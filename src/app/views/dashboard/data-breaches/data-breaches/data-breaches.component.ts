import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AnalyticClickEvents } from '@shared/services/analytics/analytics/constants';
import { IBreachCard } from '@shared/interfaces/breach-card.interface';
import { StateService } from '@shared/services/state/state.service';
import * as DashboardActions from '@store/dashboard/dashboard.actions';
import { DataBreachesViewService } from '@views/dashboard/data-breaches/data-breaches-view.service';

@Component({
  selector: 'brave-data-breaches',
  templateUrl: './data-breaches.component.html',
})
export class DataBreachesComponent implements OnInit {
  breaches: IBreachCard[] | undefined;
  AnalyticClickEvents = AnalyticClickEvents;
  constructor(
    private route: ActivatedRoute,
    private state: StateService,
    private dataBreachesViewService: DataBreachesViewService,
  ) {
    this.route.data.subscribe((resp: any) => {
      this.dataBreachesViewService.initialModelMerge(resp.breaches);
    });
  }

  ngOnInit(): void {}

  onCardClick(idx: number): void {
    const action = new DashboardActions.MarkDatabreachAsReviewed(idx);
    this.state.dispatch(action, true);
  }
}
