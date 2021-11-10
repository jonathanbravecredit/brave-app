import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { Store } from "@ngxs/store";
import { IMergeReport } from "@shared/interfaces";
import { AnalyticsService } from "@shared/services/analytics/analytics/analytics.service";
import { CreditreportService } from "@shared/services/creditreport/creditreport.service";
import { Observable } from "rxjs";
import { ICreditUtilization } from "../components/credit-utilization-card/interfaces";

@Component({
  selector: "brave-credit-utilization",
  templateUrl: "./credit-utilization.view.html",
  styleUrls: ["./credit-utilization.view.css"],
})
export class CreditUtilizationView implements OnInit {
  creditReport$: Observable<IMergeReport>;

  creditAcounts: ICreditUtilization[] = []

  constructor(
    private creditReportService: CreditreportService,
    private store: Store,
    private router: Router,
    private route: ActivatedRoute,
    private analytics: AnalyticsService
  ) {
    this.creditReport$ = this.creditReportService.tuReport$.asObservable();
  }

  ngOnInit(): void {}
}
