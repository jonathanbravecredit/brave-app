import { Component, OnDestroy } from "@angular/core";
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

  constructor(public progressTrackerViewService: ProgressTrackerViewService) {
    this.modelSub$ = progressTrackerViewService.model$.subscribe((res) => {
      this.model = res;
    });
    console.log('here', this.model)
  }

  ngOnDestroy(): void {
    this.modelSub$?.unsubscribe();
  }
}
