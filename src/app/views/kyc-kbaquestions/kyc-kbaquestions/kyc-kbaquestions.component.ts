import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { KbaquestionsFormComponent } from '@shared/components/forms/kbaquestions-form/kbaquestions-form.component';
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
import * as parser from 'fast-xml-parser';
import { KycKbaquestionsPureComponent } from '@views/kyc-kbaquestions/kyc-kbaquestions-pure/kyc-kbaquestions-pure.component';

@Component({
  selector: 'brave-kyc-kbaquestions',
  templateUrl: './kyc-kbaquestions.component.html',
})
export class KycKbaquestionsComponent implements OnInit {
  @ViewChild(KycKbaquestionsPureComponent) kba:
    | KycKbaquestionsPureComponent
    | undefined;

  questions: (ITransunionKBAQuestion | ITransunionKBAAnswer | undefined)[] = []; // TODO replace with KBA question interface
  answers: (ITransunionKBAQuestion | ITransunionKBAAnswer | undefined)[] = []; // TODO replace with KBA answers interface
  numberOfQuestions: number = 0;
  stepID = 3;

  @Select(AgenciesState) agencies$!: Observable<AgenciesStateModel>;
  agenciesSub$: Subscription;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private kycService: KycService
  ) {
    this.agenciesSub$ = this.agencies$
      .pipe(take(1))
      .subscribe((agencies: AgenciesStateModel) => {
        if (!agencies.currentRawQuestions) return;
        console.log('xml', agencies.currentRawQuestions);
        const xml: ITransunionKBAQuestions = parser.parse(
          agencies.currentRawQuestions
        );
        this.questions = xml.ChallengeConfigurationType.MultiChoiceQuestion;
        this.numberOfQuestions = this.questions.length;
      });
  }

  ngOnInit(): void {
    this.kycService.activateStep(this.stepID);
  }

  ngOnDestroy(): void {
    if (this.agenciesSub$) this.agenciesSub$.unsubscribe();
  }

  goBack(): void {
    if (this.answers.length) {
      const question = this.answers.pop();
      this.answers = [...this.answers];
      this.questions = [question, ...this.questions];
      const scroll = parseFloat(
        ((1 / this.numberOfQuestions) * 100).toFixed(2)
      );
      const max = scroll - 100;
      this.kba?.kba?.scroll(scroll, 0, max);
    } else {
      this.kycService.inactivateStep(this.stepID);
      this.router.navigate(['../identity'], { relativeTo: this.route });
      return;
    }
  }

  goToNext(): void {
    console.log('next called');
    // TODO need to extract the answers and save
    this.answers = [...this.answers, this.questions[0]];
    this.questions = [...this.questions.slice(1)];
    console.log('questions', this.questions);
    console.log('kba', this.kba);
    const scroll = parseFloat(((-1 / this.numberOfQuestions) * 100).toFixed(2));
    const max = scroll * -1 - 100;
    if (this.questions.length) {
      this.kba?.kba?.scroll(scroll, 0, max);
    } else {
      this.kba?.kba?.submitForm();
    }
  }

  handleSubmit(form: FormGroup) {
    // need to submit the answers back to TU.
    this.kycService.completeStep(this.stepID);
    this.router.navigate(['../congratulations'], { relativeTo: this.route });
  }

  handleError(errors: { [key: string]: AbstractControl }): void {
    console.log('form errors', errors);
  }
}
