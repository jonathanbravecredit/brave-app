import { Component, OnDestroy, OnInit } from "@angular/core";
import {
  InitiativeTask,
} from "@shared/interfaces/progress-tracker.interface";
import { Subscription } from "rxjs";
import { IProgressTrackerView } from "../progress-tracker.model";
import { ProgressTrackerViewService } from "../progress-tracker-view.service";

@Component({
  selector: "brave-progress-tracker",
  templateUrl: "./progress-tracker.component.html",
})
export class ProgressTrackerComponent implements OnDestroy {
  model: IProgressTrackerView = {} as IProgressTrackerView;
  modelSub$: Subscription | undefined;

  hasSelfLoan: boolean = false;

  constructor(
    public progressTrackerViewService: ProgressTrackerViewService
  ) {
    this.modelSub$ = progressTrackerViewService.model$.subscribe((res) => {
      this.model = res;
    });
  }

  ngOnDestroy(): void {
    this.modelSub$?.unsubscribe();
  }
}
