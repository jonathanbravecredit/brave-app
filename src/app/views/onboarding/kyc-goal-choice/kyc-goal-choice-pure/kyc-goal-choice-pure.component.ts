import { Component, Input, OnInit } from '@angular/core';
import { IGoalInfo } from '@views/onboarding/kyc-goal-choice/kyc-goal-choice/kyc-goal-choice.component';

@Component({
  selector: 'brave-kyc-goal-choice-pure',
  templateUrl: './kyc-goal-choice-pure.component.html'
})
export class KycGoalChoicePureComponent implements OnInit {
  @Input() goalItems: IGoalInfo[] | undefined;

  constructor() { }

  ngOnInit(): void {
  }

}
