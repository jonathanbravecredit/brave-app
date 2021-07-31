import { Component, Input, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { IMergeReport } from '@shared/interfaces';
import { DashboardService } from '@shared/services/dashboard/dashboard.service';
import { InterstitialService } from '@shared/services/interstitial/interstitial.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'brave-dashboard-enrolled',
  templateUrl: './dashboard-enrolled.component.html',
})
export class DashboardEnrolledComponent implements OnInit {
  @Input() userName: string = '';
  @Input() defaultMsg = 'Welcome back!';
  @Input() initialMsg: string = 'Welcome back!';
  @Input() lastUpdated = 'Today';
  tuReport$: Observable<IMergeReport>;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private dashboardService: DashboardService,
    private interstitial: InterstitialService,
  ) {
    this.tuReport$ = this.dashboardService.tuReport$.asObservable();
  }

  ngOnInit(): void {
    if (this.userName) this.initialMsg = 'Welcome back, ' + this.userName;
  }

  onNegativeItemsClicked() {
    this.router.navigate(['../report/accounts/negative'], { relativeTo: this.route });
  }

  onFullReportClicked() {
    this.router.navigate(['../report'], { relativeTo: this.route });
  }
}
