import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';
import { KbaquestionsFormComponent } from '@shared/components/forms/kbaquestions-form/kbaquestions-form.component';

@Component({
  selector: 'brave-kyc-kbaquestions',
  templateUrl: './kyc-kbaquestions.component.html',
})
export class KycKbaquestionsComponent implements OnInit {
  @ViewChild(KbaquestionsFormComponent) kba:
    | KbaquestionsFormComponent
    | undefined;

  questions: any[] = [0, 1, 2, 3]; // TODO replace with KBA question interface
  answers: any[] = []; // TODO replace with KBA answers interface

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private location: Location
  ) {}

  ngOnInit(): void {}

  goBack(): void {
    if (this.answers.length) {
      const question = this.answers.pop();
      this.answers = [...this.answers];
      this.questions = [question, ...this.questions];
      this.kba?.scroll(25);
    } else {
      this.location.back();
      return;
    }
  }

  goToNext(): void {
    this.answers = [...this.answers, this.questions[0]];
    this.questions = [...this.questions.slice(1)];
    if (this.questions.length) {
      this.kba?.scroll(-25);
    } else {
      this.router.navigate(['../congratulations'], { relativeTo: this.route });
    }
  }
}
