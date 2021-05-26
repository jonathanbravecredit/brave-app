import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'brave-kyc-kbaquestions',
  templateUrl: './kyc-kbaquestions.component.html',
})
export class KycKbaquestionsComponent implements OnInit {
  questions: any[] = [0, 1, 2, 3]; // TODO replace with KBA question interface
  answers: any[] = []; // TODO replace with KBA answers interface

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private location: Location
  ) {}

  ngOnInit(): void {}

  goBack(): void {
    if (!this.answers.length) {
      // no answers left to go back to
      this.location.back();
    }
    // pop the answer stack and add it back to question
    const question = this.answers.slice(-1);
    this.answers = [...this.answers.shift()];
    this.questions = [...this.questions, question];
  }

  goToNext(): void {
    // feed the answers in to the answer array
    this.answers = [...this.answers, this.questions[0]];
    this.questions = [...this.questions.slice(1)];
    if (this.questions.length) {
      // need to add form validation or submit to backend before moving forward
      // stay on page if still questions remaining
    } else {
      // no more questions and success
      // call a TU service to validate the questions
      // if not correction go to verification error

      this.router.navigate(['../congratulations'], { relativeTo: this.route });
    }
  }

}
