import { Component, AfterViewInit, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AnalyticsService } from '@shared/services/analytics/analytics/analytics.service';
import { AnalyticPageViewEvents } from '@shared/services/analytics/analytics/constants';

@Component({
  selector: 'brave-kyc-congratulations',
  templateUrl: './kyc-congratulations.component.html',
})
export class KycCongratulationsComponent implements OnInit, AfterViewInit {
  constructor(private router: Router, private analytics: AnalyticsService) {}

  ngOnInit(): void {
    this.analytics.firePageViewEvent(AnalyticPageViewEvents.OnboardingCongratulations);
  }

  ngAfterViewInit(): void {
    setTimeout(() => {
      this.goToNext();
    }, 3500);
  }

  goToNext(): void {
    this.router.navigate(['/dashboard/init']);
  }
}
