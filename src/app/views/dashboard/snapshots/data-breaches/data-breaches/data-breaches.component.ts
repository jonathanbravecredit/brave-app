import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Store } from '@ngxs/store';
import { IBreachCard } from '@views/dashboard/snapshots/data-breaches/components/data-breach-card/interfaces';
import * as DashboardActions from '@store/dashboard/dashboard.actions';
import { APIService, UpdateAppDataInput } from '@shared/services/aws/api.service';
import { AppDataStateModel } from '@store/app-data';
import { AnalyticClickEvents, AnalyticPageViewEvents } from '@shared/services/analytics/analytics/constants';

@Component({
  selector: 'brave-data-breaches',
  templateUrl: './data-breaches.component.html',
})
export class DataBreachesComponent implements OnInit {
  breaches: IBreachCard[] | undefined;
  AnalyticClickEvents = AnalyticClickEvents
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private store: Store,
    private api: APIService,
  ) {
    this.route.data.subscribe((resp: any) => {
      this.breaches = resp.breaches;
    });
  }

  ngOnInit(): void {
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
