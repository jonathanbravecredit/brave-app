import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { IMergeReport } from '@shared/interfaces';
import { CreditreportService } from '@shared/services/creditreport/creditreport.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'brave-data-breaches',
  templateUrl: './data-breaches.component.html',
})
export class DataBreachesComponent implements OnInit {
  report: IMergeReport | undefined;
  constructor(private router: Router, private route: ActivatedRoute, private creditReportService: CreditreportService) {
    this.route.data.subscribe((resp: any) => {
      this.report = resp.report;
    });
  }

  ngOnInit(): void {}
}
