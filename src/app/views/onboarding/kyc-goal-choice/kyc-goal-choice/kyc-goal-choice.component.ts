import { Component, OnInit } from '@angular/core';

export interface IGoalInfo {
  programId: string;
  reason: string;
  header: string;
}

@Component({
  selector: 'brave-kyc-goal-choice',
  templateUrl: './kyc-goal-choice.component.html',
})
export class KycGoalChoiceComponent implements OnInit {
  goalItems: IGoalInfo[] = [
    { programId: '1', reason: 'buy_house', header: 'Buy a house' },
    { programId: '1', reason: 'credit_card', header: 'Get a credit card' },
  ];

  constructor() {}

  ngOnInit(): void {}
}
