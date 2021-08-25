import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { KycService } from '@shared/services/kyc/kyc.service';
import { AbstractControl, FormGroup } from '@angular/forms';
import { Select, Store } from '@ngxs/store';
import { AgenciesState, AgenciesStateModel } from '@store/agencies';
import { Observable, Subscription } from 'rxjs';
import {
  ITransunionKBAQuestion,
  ITransunionKBAAnswer,
  ITransunionKBAQuestions,
} from '@shared/interfaces/tu-kba-questions.interface';
import { take } from 'rxjs/operators';
import { IVerifyAuthenticationAnswer } from '@shared/interfaces/verify-authentication-answers.interface';
import { KycKbaquestionsPureComponent } from '@views/onboarding/kyc-kbaquestions/kyc-kbaquestions-pure/kyc-kbaquestions-pure.component';
import { InterstitialService } from '@shared/services/interstitial/interstitial.service';

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

  @Select(AgenciesState) agencies$!: Observable<AgenciesStateModel>;
  agenciesSub$: Subscription;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private interstitial: InterstitialService,
    private kycService: KycService,
    private store: Store,
  ) {
    this.agenciesSub$ = this.agencies$.pipe(take(1)).subscribe((agencies: AgenciesStateModel) => {
      if (!agencies.transunion?.currentRawQuestions) return;
      const xml: ITransunionKBAQuestions = this.kycService.parseCurrentRawQuestions(
        agencies.transunion?.currentRawQuestions,
      );
      const questions = xml.ChallengeConfigurationType.MultiChoiceQuestion;
      questions instanceof Array ? (this.questions = questions) : [questions];
      this.numberOfQuestions = this.questions.length;
    });
  }

  ngOnInit(): void {
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
  async handleSubmit(form: FormGroup) {
    const formValues = this.kba?.kba?.parentForm.value;
    if (Object.keys(formValues).length) this.router.navigate(['../error'], { relativeTo: this.route });

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
    const { appData: state } = this.store.snapshot();
    try {
      const { success, error, data } = await this.kycService.sendVerifyAuthenticationQuestions(state, answers);
      if (success) {
        this.kycService.completeStep(this.stepID);
        this.router.navigate(['../congratulations'], {
          relativeTo: this.route,
        });
        this.interstitial.fetching$.next(false);
      } else {
        this.router.navigate(['../error'], { relativeTo: this.route });
        this.interstitial.fetching$.next(false);
      }
    } catch (err) {
      this.router.navigate(['../error'], { relativeTo: this.route });
      this.interstitial.fetching$.next(false);
    }
  }

  handleError(errors: { [key: string]: AbstractControl }): void {
    console.log('form errors', errors);
  }
}
