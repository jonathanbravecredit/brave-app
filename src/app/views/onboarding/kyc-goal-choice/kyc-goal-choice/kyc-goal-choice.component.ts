import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ROUTE_NAMES as routes } from '@shared/routes/routes.names';
import { AnalyticsService } from '@shared/services/analytics/analytics/analytics.service';
import { AnalyticPageViewEvents } from '@shared/services/analytics/analytics/constants';

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
  constructor(private router: Router, private analytics: AnalyticsService) {}

  ngOnInit(): void {}

  routeChangeClick() {
    this.router.navigate([routes.root.onboarding.name.full]);
  }
}
