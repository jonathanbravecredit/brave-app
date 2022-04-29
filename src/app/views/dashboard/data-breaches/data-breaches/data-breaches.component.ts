import { Component } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import {
  AnalyticClickEvents,
} from "@shared/services/analytics/analytics/constants";
import { DataBreachesViewService } from '../data-breaches-view.service';

@Component({
  selector: "brave-data-breaches",
  templateUrl: "./data-breaches.component.html",
})
export class DataBreachesComponent {
  AnalyticClickEvents = AnalyticClickEvents;

  constructor(
    private route: ActivatedRoute,
    public dataBreachesViewService: DataBreachesViewService
  ) {
    this.route.data.subscribe((resp: any) => {
      this.dataBreachesViewService.initialModelMerge(resp.breaches)
    });
  }
}
