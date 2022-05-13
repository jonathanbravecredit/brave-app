import { Component, OnDestroy } from "@angular/core";
import { PROGRESS_TRACKER_CONTENT } from "../progress-tracker.content";
import { IProgressTrackerView } from "../progress-tracker.model";
import { ProgressTrackerViewService } from "../progress-tracker-view.service";
import { Subscription } from "rxjs";
@Component({
  selector: "brave-progress-tracker-pure",
  templateUrl: "./progress-tracker-pure.component.html",
})
export class ProgressTrackerPureComponent implements OnDestroy {
  PROGRESS_TRACKER_CONTENT = PROGRESS_TRACKER_CONTENT;
  model: IProgressTrackerView = {} as IProgressTrackerView;
  modelSub$: Subscription | undefined;

  constructor(public progressTrackerViewService: ProgressTrackerViewService) {
    this.modelSub$ = progressTrackerViewService.model$.subscribe((res) => {
      this.model = res;
    });
  }

  ngOnDestroy(): void {
    this.modelSub$?.unsubscribe();
  }
}
