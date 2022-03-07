import { Component, Input, OnInit } from '@angular/core';
import { IGoalInfo } from '@views/onboarding/kyc-goal-choice/kyc-goal-choice/kyc-goal-choice.component';

@Component({
  selector: 'brave-goal-choice-card',
  templateUrl: './goal-choice-card.component.html'
})
export class GoalChoiceCardComponent implements OnInit {
  @Input() goalInfo: IGoalInfo | undefined


  constructor() { }

  ngOnInit(): void {
  }

}
