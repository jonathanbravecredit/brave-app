import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { KbaquestionsFormComponent } from '@shared/components/forms/kbaquestions-form/kbaquestions-form.component';
import { KycService } from '@shared/services/kyc/kyc.service';
import { AbstractControl, FormGroup } from '@angular/forms';
import { SyncService } from '@shared/services/sync/sync.service';

@Component({
  selector: 'brave-kyc-kbaquestions',
  templateUrl: './kyc-kbaquestions.component.html',
})
export class KycKbaquestionsComponent implements OnInit, AfterViewInit {
  @ViewChild(KbaquestionsFormComponent) kba:
    | KbaquestionsFormComponent
    | undefined;

  questions: any[] = [0, 1, 2, 3]; // TODO replace with KBA question interface
  answers: any[] = []; // TODO replace with KBA answers interface
  stepID = 3;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private kycService: KycService,
    private syncService: SyncService
  ) {}

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    this.syncService.syncStateToBackend();
  }

  goBack(): void {
    if (this.answers.length) {
      const question = this.answers.pop();
      this.answers = [...this.answers];
      this.questions = [question, ...this.questions];
      this.kba?.scroll(25);
    } else {
      this.kycService.inactivateStep(this.stepID);
      this.router.navigate(['../identity'], { relativeTo: this.route });
      return;
    }
  }

  goToNext(form: FormGroup): void {
    // TODO need to extract the answers and save
    this.answers = [...this.answers, this.questions[0]];
    this.questions = [...this.questions.slice(1)];
    if (this.questions.length) {
      this.kba?.scroll(-25);
    } else {
      this.kycService.completeStep(this.stepID);
      this.router.navigate(['../congratulations'], { relativeTo: this.route });
    }
  }

  handleError(errors: { [key: string]: AbstractControl }): void {
    console.log('form errors', errors);
  }
}
