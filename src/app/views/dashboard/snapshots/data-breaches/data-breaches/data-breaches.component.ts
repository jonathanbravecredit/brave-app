import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { GooglePageViewEvents as gtEvts } from '@shared/services/analytics/google/constants';
import { GoogleService } from '@shared/services/analytics/google/google.service';
import { IBreachCard } from '@views/dashboard/snapshots/data-breaches/components/data-breach-card/interfaces';

@Component({
  selector: 'brave-data-breaches',
  templateUrl: './data-breaches.component.html',
})
export class DataBreachesComponent implements OnInit {
  breaches: IBreachCard[] | undefined;
  constructor(private router: Router, private route: ActivatedRoute, private google: GoogleService) {
    this.route.data.subscribe((resp: any) => {
      this.breaches = resp.breaches;
    });
  }

  ngOnInit(): void {
    this.google.firePageViewEvent(gtEvts.DashboardReportSnapshotDatabreach);
  }
}
