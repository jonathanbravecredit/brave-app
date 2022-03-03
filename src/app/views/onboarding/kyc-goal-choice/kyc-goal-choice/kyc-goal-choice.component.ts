import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProgressTrackerService } from '@shared/services/progress-tracker/progress-tracker-service.service';
import { ROUTE_NAMES as routes } from '@shared/routes/routes.names';

export interface IGoalInfo {
  programId: string;
  reason: string;
  header: string;
  iconLink: string;
}

@Component({
  selector: 'brave-kyc-goal-choice',
  templateUrl: './kyc-goal-choice.component.html',
})
export class KycGoalChoiceComponent implements OnInit {
  goalItems: IGoalInfo[] = [
    { programId: '1', reason: 'buy_house', header: 'Buy a house', iconLink: 'https://d3e1i93f88eoxl.cloudfront.net/small-house-icon.svg' },
    { programId: '1', reason: 'credit_card', header: 'Get a credit card', iconLink: 'https://d3e1i93f88eoxl.cloudfront.net/small-credit-card-icon.svg' },
  ];

  constructor(private progressTrackerService: ProgressTrackerService, private router: Router) {}

  ngOnInit(): void {}

  buttonClick(goalInfo: IGoalInfo) {
    this.progressTrackerService.postUserGoal(goalInfo);
    this.router.navigate([routes.root.onboarding.name.full]);
  }
}
