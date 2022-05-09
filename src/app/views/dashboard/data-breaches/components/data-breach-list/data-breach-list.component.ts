import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  OnDestroy,
} from "@angular/core";
import { Router } from "@angular/router";
import { ROUTE_NAMES as routes } from "@shared/routes/routes.names";
import { IBreachCard } from "@shared/interfaces/breach-card.interface";
import { DATA_BREACHES_CONTENT } from "../../data-breaches.content";
import { DataBreachesViewService } from "../../data-breaches-view.service";
import { IDataBreachesView } from "../../data-breaches.model";
import { Subscription } from "rxjs";

@Component({
  selector: "brave-data-breach-list",
  templateUrl: "./data-breach-list.component.html",
})
export class DataBreachListComponent implements OnDestroy {
  @Output() closeClick: EventEmitter<number> = new EventEmitter();
  DATA_BREACHES_CONTENT = DATA_BREACHES_CONTENT;
  model: IDataBreachesView = {} as IDataBreachesView;
  modelSub$: Subscription | undefined;

  constructor(public dataBreachesViewService: DataBreachesViewService) {
    this.modelSub$ = this.dataBreachesViewService.model$.subscribe((res) => {
      this.model = res;
    });
  }

  ngOnDestroy(): void {
    this.modelSub$?.unsubscribe();
  }

  hideCard(idx: number): void {
    this.closeClick.emit(idx);
    this.dataBreachesViewService.updateReviewed(idx)
  }
}
