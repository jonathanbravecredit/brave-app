import { Component, Input, OnInit } from '@angular/core';
import { DashboardService } from '@shared/services/dashboard/dashboard.service';
import { InterstitialService } from '@shared/services/interstitial/interstitial.service';

@Component({
  selector: 'brave-dashboard-unenrolled',
  templateUrl: './dashboard-unenrolled.component.html',
})
export class DashboardUnenrolledComponent implements OnInit {
  @Input() userName: string = '';
  @Input() defaultMsg = 'Welcome back!';
  @Input() initialMsg: string = 'Welcome back!';
  @Input() lastUpdated = 'Today';

  constructor(private dashboardService: DashboardService, private interstitial: InterstitialService) {}

  ngOnInit(): void {
    if (this.userName) this.initialMsg = 'Welcome back, ' + this.userName;
  }

  /**
   * Enroll the user in report in score
   */
  onClickGetMyReport(): void {
    this.interstitial.changeMessage('fetching your credit report');
    this.interstitial.openInterstitial();
    this.dashboardService.enrollInReportAndScore().then((success) => {
      if (success) {
        this.interstitial.changeMessage('success!');
        setTimeout(() => {
          this.interstitial.closeInterstitial();
        }, 1000);
      } else {
        this.interstitial.changeMessage('uh oh! something went wrong');
        setTimeout(() => {
          this.interstitial.closeInterstitial();
        }, 1000);
      }
    });
  }
}
