import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { KycService } from '@shared/services/kyc/kyc.service';
import { FormGroup } from '@angular/forms';
import { Select, Store } from '@ngxs/store';
import { AgenciesSelectors, AgenciesState, AgenciesStateModel } from '@store/agencies';
import { Observable, Subscription } from 'rxjs';
import {
  ITransunionKBAQuestion,
  ITransunionKBAAnswer,
  ITransunionKBAQuestions,
} from '@shared/interfaces/tu-kba-questions.interface';
import { filter, take } from 'rxjs/operators';
import { IVerifyAuthenticationAnswer } from '@shared/interfaces/verify-authentication-answers.interface';
import { KycKbaquestionsPureComponent } from '@views/onboarding/kyc-kbaquestions/kyc-kbaquestions-pure/kyc-kbaquestions-pure.component';
import { InterstitialService } from '@shared/services/interstitial/interstitial.service';
import {
  GooglePageViewEvents as gtViews,
  GoogleClickEvents as gtClicks,
} from '@shared/services/analytics/google/constants';
import { GoogleService } from '@shared/services/analytics/google/google.service';
import { TransunionUtil as tu } from '@shared/utils/transunion/transunion';
import { ITUServiceResponse, IVerifyAuthenticationQuestionsResult } from '@shared/interfaces';
import { TransunionInput } from '@shared/services/aws/api.service';
import { TUBundles } from '@shared/utils/transunion/constants';
import { AppStatus, AppStatusReason } from '@shared/utils/brave/constants';

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
    private route: ActivatedRoute,
    private interstitial: InterstitialService,
    private kycService: KycService,
    private google: GoogleService,
    private store: Store,
  ) {
    this.agenciesSub$ = this.agencies$
      .pipe(filter((agencies: AgenciesStateModel) => agencies !== undefined))
      .subscribe((agencies: AgenciesStateModel) => {
        const rawQuestions = agencies.transunion?.currentRawQuestions;
        if (!rawQuestions) return;
        const xml = tu.parsers.onboarding.parseCurrentRawAuthXML<ITransunionKBAQuestions>(rawQuestions);
        const questions = xml.ChallengeConfigurationType.MultiChoiceQuestion;
        questions instanceof Array ? (this.questions = questions) : [questions];
        this.numberOfQuestions = this.questions.length;
        // start kba questions clock
      });
  }

  ngOnInit(): void {
    this.google.firePageViewEvent(gtViews.OnboardingKba);
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
      this.router.navigate(['../identity'], { relativeTo: this.route });
      return;
    }
  }

  /**
   * Moves the carousel over one to the next question
   *  - if no more next questions, submits the form
   */
  goToNext(): void {
    this.google.fireClickEvent(gtClicks.OnboardingKba);
    this.answeredQuestions = [...this.answeredQuestions, this.questions[0]];
    this.questions = [...this.questions.slice(1)];
    const scroll = parseFloat(((-1 / this.numberOfQuestions) * 100).toFixed(2));
    const max = scroll * -1 - 100;
    if (this.questions.length) {
      this.interstitial.fetching$.next(false);
      this.kba?.kba?.scroll(scroll, 0, max);
    } else {
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
    const formValues = this.kba?.kba?.parentForm.value;
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
        this.interstitial.fetching$.next(false);
        this.bailOut(); //bail out on technical error...no pin
      } else if (tu.queries.exceptions.isKBAStale(kbaAge)) {
        this.handleSuspension(AppStatusReason.KbaAgeExceeded);
      } else if (kbaAttempts > 0) {
        this.handleSuspension(AppStatusReason.KbaAttemptsExceeded);
      } else {
        try {
          const resp = await this.kycService.sendVerifyAuthenticationQuestions(appData, answers);
          resp.success &&
          resp.data?.ResponseType.toLowerCase() === 'success' &&
          resp.data?.AuthenticationStatus.toLowerCase() === 'correct'
            ? this.handleSuccess()
            : this.handleError(resp);
          this.interstitial.fetching$.next(false);
        } catch (err) {
          console.log('error:kbaHandleSubmit ===> ', err);
          this.interstitial.fetching$.next(false);
          this.bailOut();
        }
      }
    }
  }

  async handleSuccess(): Promise<void> {
    try {
      this.kycService.completeStep(this.stepID); // !IMPORTANT, needs to call before backend, otherwise state is stale
      const { success, error } = await this.kycService.sendEnrollRequest();
      success
        ? this.router.navigate(['../congratulations'], {
            relativeTo: this.route,
          })
        : this.handleSuspension(AppStatusReason.EnrollmentFailed);
    } catch (err) {
      console.log('error:completeOnboarding ===> ', err);
      this.interstitial.fetching$.next(false);
      this.bailOut(); // bail out on technical error...non specific api
    }
  }

  handleError(resp: ITUServiceResponse<IVerifyAuthenticationQuestionsResult | undefined>): void {
    this.interstitial.fetching$.next(false);
    this.kycService.suspendUser({
      status: AppStatus.Suspended,
      reason: AppStatusReason.KbaAttemptsExceeded,
      duration: 24 * 30,
    });
    this.bailOut<IVerifyAuthenticationQuestionsResult>(resp);
  }

  /**
   * Helper to generate suspension requests
   * @param reason
   */
  handleSuspension(reason: AppStatusReason): void {
    const suspension = {
      status: AppStatus.Suspended,
      reason: reason,
      duration: 24 * 30,
    };
    this.kycService.suspendUser(suspension);
    this.interstitial.fetching$.next(false);
    this.router.navigate(['/suspended/default']);
  }

  /**
   * Method to route user to appropriate error screen using kyc service
   * @param resp
   */
  bailOut<T>(resp?: ITUServiceResponse<T | undefined>) {
    const tuPartial: Partial<TransunionInput> = {
      verifyAuthenticationQuestionsKBASuccess: false,
      verifyAuthenticationQuestionsKBAStatus: tu.generators.createOnboardingStatus(
        TUBundles.VerifyAuthenticationQuestionsKBA,
        false,
        resp,
      ),
    };
    this.interstitial.fetching$.next(false);
    this.kycService.bailoutFromOnboarding(tuPartial, resp);
  }
}
