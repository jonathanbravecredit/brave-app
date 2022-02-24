import { Component, OnInit } from '@angular/core';

export interface IGoalInfo {
  id: string,
  header: string,
}

@Component({
  selector: 'brave-kyc-goal-choice',
  templateUrl: './kyc-goal-choice.component.html'
})
export class KycGoalChoiceComponent implements OnInit {
  goalItems: IGoalInfo[] = [{id: '', header: 'Buy a house'}, {id: '', header: 'Get a credit card'}]

  constructor() { }

  ngOnInit(): void {
  }

}
