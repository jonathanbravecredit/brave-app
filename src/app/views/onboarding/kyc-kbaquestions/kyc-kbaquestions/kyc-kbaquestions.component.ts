import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { KycService } from '@shared/services/kyc/kyc.service';
import { FormGroup } from '@angular/forms';
import { Store } from '@ngxs/store';
import { AgenciesSelectors, AgenciesStateModel } from '@store/agencies';
import { Observable, Subscription } from 'rxjs';
import {
  ITransunionKBAQuestion,
  ITransunionKBAAnswer,
  ITransunionKBAQuestions,
  ITransunionKBAChallengeAnswer,
} from '@shared/interfaces/tu-kba-questions.interface';
import { filter } from 'rxjs/operators';
import { IVerifyAuthenticationAnswer } from '@shared/interfaces/verify-authentication-answers.interface';
import { KycKbaquestionsPureComponent } from '@views/onboarding/kyc-kbaquestions/kyc-kbaquestions-pure/kyc-kbaquestions-pure.component';
import { InterstitialService } from '@shared/services/interstitial/interstitial.service';
import { TransunionUtil as tu } from '@shared/utils/transunion/transunion';
import { ITUServiceResponse, IVerifyAuthenticationQuestionsResult } from '@shared/interfaces';
import { TransunionInput, TUStatusRefInput } from '@shared/services/aws/api.service';
import { TUBundles } from '@shared/utils/transunion/constants';
import { AppStatusReason } from '@shared/utils/brave/constants';
import { AnalyticsService } from '@shared/services/analytics/analytics/analytics.service';
import { AnalyticClickEvents, AnalyticPageViewEvents } from '@shared/services/analytics/analytics/constants';
import { ROUTE_NAMES as routes } from '@shared/routes/routes.names';

@Component({
  selector: 'brave-kyc-kbaquestions',
  templateUrl: './kyc-kbaquestions.component.html',
})
export class KycKbaquestionsComponent implements OnInit {
  @ViewChild(KycKbaquestionsPureComponent) kba: KycKbaquestionsPureComponent | undefined;

  questions: (ITransunionKBAQuestion | ITransunionKBAAnswer | undefined)[] = []; // TODO replace with KBA question interface
  answeredQuestions: (ITransunionKBAQuestion | ITransunionKBAAnswer | undefined)[] = [];
  numberOfQuestions: number = 0;
  stepID = 3;

  agencies$: Observable<AgenciesStateModel> = this.store.select(AgenciesSelectors.getAgencies);
  agenciesSub$: Subscription;

  constructor(
    private router: Router,
    private interstitial: InterstitialService,
    private kycService: KycService,
    private analytics: AnalyticsService,
    private store: Store,
  ) {
    this.agenciesSub$ = this.agencies$
      .pipe(filter((agencies: AgenciesStateModel) => agencies !== undefined))
      .subscribe((agencies: AgenciesStateModel) => {
        const rawQuestions = agencies.transunion?.currentRawQuestions;
        if (!rawQuestions) return;
        const xml = tu.parsers.onboarding.parseCurrentRawAuthXML<ITransunionKBAQuestions>(rawQuestions);
        const challenge = tu.parsers.onboarding.parseCurrentRawAuthXML<ITransunionKBAChallengeAnswer>(rawQuestions);
        const config = xml.ChallengeConfigurationType
          ? xml.ChallengeConfigurationType
          : challenge.VerifyChallengeAnswersResponseSuccess.ChallengeConfiguration; // challenge is in progress FLOW
        const questions = config.MultiChoiceQuestion;
        questions instanceof Array ? (this.questions = questions) : (this.questions = [questions]);
        this.answeredQuestions = [];
        this.numberOfQuestions = this.questions.length;
        // start kba questions clock
      });
  }

  ngOnInit(): void {
    this.analytics.firePageViewEvent(AnalyticPageViewEvents.OnboardingKba);
    this.kycService.activateStep(this.stepID);
  }

  ngOnDestroy(): void {
    if (this.agenciesSub$) this.agenciesSub$.unsubscribe();
  }

  /**
   * Moves the carousel back one to the previous question
   *  - if no more previous questions, routes back to identity
   */
  goBack(): void {
    if (this.answeredQuestions.length) {
      const question = this.answeredQuestions.pop();
      this.answeredQuestions = [...this.answeredQuestions];
      this.questions = [question, ...this.questions];
      const scroll = parseFloat(((1 / this.numberOfQuestions) * 100).toFixed(2));
      const max = scroll - 100;
      this.kba?.kba?.scroll(scroll, 0, max);
    } else {
      this.kycService.inactivateStep(this.stepID);
      this.router.navigate([routes.root.children.onboarding.children.identity.full]);
      return;
    }
  }

  /**
   * Moves the carousel over one to the next question
   *  - if no more next questions, submits the form
   */
  goToNext(): void {
    this.analytics.fireClickEvent(AnalyticClickEvents.OnboardingKba);
    this.answeredQuestions = [...this.answeredQuestions, this.questions[0]];
    this.questions = [...this.questions.slice(1)];
    const scroll = parseFloat(((-1 / this.numberOfQuestions) * 100).toFixed(2));
    const max = scroll * -1 - 100;
    if (this.questions.length) {
      this.interstitial.fetching$.next(false);
      this.kba?.kba?.scroll(scroll, 0, max);
    } else {
      this.interstitial.fetching$.next(true);
      this.kba?.kba?.submitForm();
    }
  }

  /**
   * This method takes the KBA answers, formats them to the Transunion request format (IVerifyAuthenticationAnswer)
   *   and submits them to Transunion for verification.
   *   Upon success, will be routed to congratulations screen
   * @param form the KBA answer form
   */
  async handleSubmit(form: FormGroup): Promise<void> {
    const formValues = form.value;
    if (Object.keys(formValues).length) {
      const answers: IVerifyAuthenticationAnswer[] = Object.keys(formValues)
        .filter((key) => {
          return formValues[key]?.input?.answer && formValues[key]?.input?.question;
        })
        .map((key) => {
          let answer: ITransunionKBAAnswer = formValues[key]?.input?.answer;
          let question: ITransunionKBAQuestion = formValues[key]?.input?.question;
          return {
            VerifyChallengeAnswersRequestMultiChoiceQuestion: {
              QuestionId: question?.QuestionId,
              SelectedAnswerChoice: {
                AnswerChoiceId: answer?.AnswerChoiceId,
              },
            },
          };
        });
      const { appData } = this.store.snapshot();
      const kbaAge = appData?.agencies?.transunion?.kbaCurrentAge;
      const kbaAttempts = appData?.agencies?.transunion?.kbaAttempts || 0;

      if (!kbaAge || !(kbaAttempts >= 0)) {
        this.handleAPIError(); //bail out on technical error...no pin
      } else if (tu.queries.exceptions.isKBAStale(kbaAge)) {
        this.handleSuspension(AppStatusReason.KbaAgeExceeded);
      } else if (kbaAttempts > 0) {
        this.handleSuspension(AppStatusReason.KbaAttemptsExceeded);
      } else {
        try {
          const resp = await this.kycService.sendVerifyAuthenticationQuestions(appData, answers);
          !resp.success
            ? await this.bailOut<IVerifyAuthenticationQuestionsResult>(resp)
            : await this.handleResponse(resp);
        } catch (err) {
          console.log('error:kbaHandleSubmit ===> ', err);
          this.handleAPIError();
        }
      }
    }
  }

  async handleResponse(resp: ITUServiceResponse<IVerifyAuthenticationQuestionsResult | undefined>): Promise<void> {
    // is success and correct
    const { data } = resp;
    if (!data) {
      await this.handleIncorrect(resp);
      return;
    }
    const { ResponseType, AuthenticationStatus } = data;
    const type = ResponseType.toLowerCase();
    const status = AuthenticationStatus.toLowerCase();
    if (type === 'success' && status === 'correct') {
      await this.handleSuccess();
    } else if (type === 'success' && status === 'incorrect') {
      await this.handleIncorrect(resp);
    } else if (type === 'success' && status === 'inprogress') {
      await this.handleInProgress(resp);
    } else {
      await this.handleIncorrect(resp);
    }
  }

  async handleSuccess(): Promise<void> {
    try {
      this.kycService.completeStep(this.stepID); // !IMPORTANT, needs to call before backend, otherwise state is stale
      const { success, error } = await this.kycService.sendEnrollRequest();
      success
        ? this.router.navigate([routes.root.children.onboarding.children.congratulations.full])
        : await this.handleSuspension(AppStatusReason.EnrollmentFailed);
    } catch (err) {
      console.log('error:completeOnboarding ===> ', err);
      this.handleAPIError();
    }
  }

  async handleIncorrect(resp: ITUServiceResponse<IVerifyAuthenticationQuestionsResult | undefined>): Promise<void> {
    await this.kycService.updateTransunion(this.createTuPartial<IVerifyAuthenticationQuestionsResult>(resp));
    await this.handleSuspension(AppStatusReason.KbaIncorrect);
    this.interstitial.fetching$.next(false);
  }

  async handleInProgress(resp: ITUServiceResponse<IVerifyAuthenticationQuestionsResult | undefined>): Promise<void> {
    await this.kycService.handleVerificationInProgressFlow(resp);
    this.interstitial.fetching$.next(false);
  }

  async handleAPIError(): Promise<void> {
    this.router.navigate([routes.root.children.onboarding.children.retry.full]);
    this.interstitial.fetching$.next(false);
  }

  async handleSuspension(reason: AppStatusReason): Promise<void> {
    await this.kycService.handleSuspension(reason);
    this.interstitial.fetching$.next(false);
  }

  createTuPartial<T>(resp?: ITUServiceResponse<T | undefined>): Partial<TransunionInput> {
    const tuPartial: Partial<TransunionInput> = {
      verifyAuthenticationQuestionsKBASuccess: false,
      verifyAuthenticationQuestionsKBAStatus: tu.generators.createOnboardingStatus(
        TUBundles.VerifyAuthenticationQuestionsKBA,
        false,
        resp,
      ),
    };
    return tuPartial;
  }

  async bailOut<T>(resp?: ITUServiceResponse<T | undefined>): Promise<void> {
    const partial = this.createTuPartial<T>(resp);
    await this.kycService.bailoutFromOnboarding(partial, resp);
  }

  /**
   * Method to route user to appropriate error screen using kyc service
   * @param resp
   */
  handleBailout<T>(resp?: ITUServiceResponse<T | undefined>) {
    const tuPartial: {
      getAuthenticationQuestionsSuccess: boolean;
      getAuthenticationQuestionsStatus: TUStatusRefInput;
      serviceBundleFulfillmentKey: string | null;
    } = {
      getAuthenticationQuestionsSuccess: false,
      getAuthenticationQuestionsStatus: tu.generators.createOnboardingStatus(
        TUBundles.GetAuthenticationQuestions,
        false,
        resp,
      ),
      serviceBundleFulfillmentKey: '',
    };
    this.kycService.updateGetAuthenticationQuestions(tuPartial);
    this.kycService.bailoutFromOnboarding(tuPartial, resp);
  }
}
