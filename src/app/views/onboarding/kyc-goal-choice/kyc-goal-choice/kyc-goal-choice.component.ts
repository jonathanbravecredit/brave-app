import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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
  constructor(private router: Router) {}

  ngOnInit(): void {}

  routeChangeClick() {
    this.router.navigate([routes.root.onboarding.name.full]);
  }
}
