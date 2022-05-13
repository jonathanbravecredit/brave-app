import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  OnDestroy,
} from "@angular/core";
import { AnalyticClickEvents } from "@shared/services/analytics/analytics/constants";
import { DATA_BREACHES_CONTENT } from "../../data-breaches.content";
import { DataBreachesViewService } from "../../data-breaches-view.service";
import { IDataBreachesView } from "../../data-breaches.model";
import { Subscription } from "rxjs";
import { state, style, trigger, animate, transition } from '@angular/animations';

@Component({
  selector: "brave-data-breach-card",
  templateUrl: "./data-breach-card.component.html",
  animations: [
    trigger("openClose", [
      state("closed", style({ height: "0" })),
      state("open", style({ height: "*" })),
      transition("closed => open", [animate("0.2s linear")]),
      transition("open => closed", [animate("0.2s linear")]),
    ]),
  ],
})
export class DataBreachCardComponent implements OnDestroy {
  @Input() subscriber: string | undefined = "Unknown";
  @Input() paragraphs: string[] | undefined = ["Unknown"];
  @Input() reason: string | undefined = "Unknown";
  @Output() closeClick: EventEmitter<void> = new EventEmitter();
  AnalyticClickEvents = AnalyticClickEvents;

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
}
