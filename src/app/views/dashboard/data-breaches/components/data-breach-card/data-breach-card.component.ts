import { Component, EventEmitter, Input, OnInit, Output, OnDestroy } from '@angular/core';
import { AnalyticClickEvents } from '@shared/services/analytics/analytics/constants';
import { DATA_BREACHES_CONTENT } from '../../data-breaches.content';
import { DataBreachesViewService } from '../../data-breaches-view.service';
import { IDataBreachesView } from '../../data-breaches.model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'brave-data-breach-card',
  templateUrl: './data-breach-card.component.html',
})
export class DataBreachCardComponent implements OnDestroy {
  @Output() closeClick: EventEmitter<void> = new EventEmitter();
  AnalyticClickEvents = AnalyticClickEvents;

  DATA_BREACHES_CONTENT = DATA_BREACHES_CONTENT
  model: IDataBreachesView = {} as IDataBreachesView;
  modelSub$: Subscription | undefined;

  constructor(
    public dataBreachesViewService: DataBreachesViewService
  ) {
    this.modelSub$ = this.dataBreachesViewService.model$.subscribe(
      (res) => {
        this.model = res;
      }
    );
  }

  ngOnDestroy(): void {
    this.modelSub$?.unsubscribe();
  }
}
