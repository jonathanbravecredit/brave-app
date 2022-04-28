import { IProgressTrackerView } from "./../../progress-tracker.model";
import { Component, Input, OnInit, OnDestroy } from "@angular/core";
import { PROGRESS_TRACKER_CONTENT } from "../../progress-tracker.content";
import { ProgressTrackerViewService } from "../../progress-tracker-view.service";
import { Subscription } from "rxjs";
const dayjs = require("dayjs");

@Component({
  selector: "brave-future-score-card",
  templateUrl: "./future-score-card.component.html",
})
export class FutureScoreCardComponent implements OnDestroy {
  PROGRESS_TRACKER_CONTENT = PROGRESS_TRACKER_CONTENT;
  scoreReview: string = "";
  pointsDiff: number = 0;
  monthYear: string = "";
  model: IProgressTrackerView = {} as IProgressTrackerView;
  modelSub$: Subscription | undefined;

  constructor(public progressTrackerViewService: ProgressTrackerViewService) {
    this.modelSub$ = progressTrackerViewService.model$.subscribe((res) => {
      this.model = res;
    });
    this.pointsDiff = this.progressTrackerViewService.calculatePointsDiff();
    this.scoreReview = this.progressTrackerViewService.getScoreReview();
    this.monthYear = this.progressTrackerViewService.calculateMonthYear();
  }

  ngOnDestroy(): void {
    this.modelSub$?.unsubscribe();
  }
}
