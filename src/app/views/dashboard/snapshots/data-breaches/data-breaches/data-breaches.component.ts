import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Store } from '@ngxs/store';
import { GooglePageViewEvents as gtEvts } from '@shared/services/analytics/google/constants';
import { GoogleService } from '@shared/services/analytics/google/google.service';
import { IBreachCard } from '@views/dashboard/snapshots/data-breaches/components/data-breach-card/interfaces';
import * as DashboardActions from '@store/dashboard/dashboard.actions';
import { APIService, UpdateAppDataInput } from '@shared/services/aws/api.service';
import { AppDataStateModel } from '@store/app-data';
import { resolve } from 'dns';

@Component({
  selector: 'brave-data-breaches',
  templateUrl: './data-breaches.component.html',
})
export class DataBreachesComponent implements OnInit {
  breaches: IBreachCard[] | undefined;
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private google: GoogleService,
    private store: Store,
    private api: APIService,
  ) {
    this.route.data.subscribe((resp: any) => {
      this.breaches = resp.breaches;
    });
  }

  ngOnInit(): void {
    this.google.firePageViewEvent(gtEvts.DashboardReportSnapshotDatabreach);
  }

  onCardClick(idx: number): void {
    this.store
      .dispatch(new DashboardActions.MarkDatabreachAsReviewed(idx))
      .subscribe((state: { appData: AppDataStateModel }) => {
        const input = { ...state.appData } as UpdateAppDataInput;
        if (!input.id) {
          console.log('failed to update state');
          return;
        } else {
          this.api.UpdateAppData(input);
        }
      });
  }
}
