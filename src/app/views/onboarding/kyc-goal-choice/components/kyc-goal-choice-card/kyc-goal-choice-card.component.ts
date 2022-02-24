import { Component, Input, OnInit } from '@angular/core';
import { IGoalInfo } from '@views/onboarding/kyc-goal-choice/kyc-goal-choice/kyc-goal-choice.component';

@Component({
  selector: 'brave-kyc-goal-choice-card',
  templateUrl: './kyc-goal-choice-card.component.html'
})
export class KycGoalChoiceCardComponent implements OnInit {
  @Input() goalInfo: IGoalInfo | undefined


  constructor() { }

  ngOnInit(): void {
  }

}
