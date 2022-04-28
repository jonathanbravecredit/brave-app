import { Component, Input, OnInit } from "@angular/core";
import { PROGRESS_TRACKER_CONTENT } from "../../progress-tracker.content";
import { IProgressTrackerView } from "../../progress-tracker.model";
const dayjs = require("dayjs");

@Component({
  selector: "brave-future-score-card",
  templateUrl: "./future-score-card.component.html",
})
export class FutureScoreCardComponent implements OnInit {
  public model: IProgressTrackerView = {} as IProgressTrackerView;
  PROGRESS_TRACKER_CONTENT = PROGRESS_TRACKER_CONTENT;
  scoreReview: string = "";
  pointsDiff: number = 0;
  monthYear: string = "";

  constructor() {}

  ngOnInit(): void {
    this.calculatePointsDiff();
    this.scoreReview = this.getScoreReview();
    this.monthYear = dayjs(this.model.enrolledOn).format("MMMM YYYY");
  }

  calculatePointsDiff() {
    if (this.model.enrolledScore) {
      this.pointsDiff = this.model.futureScore - +this.model.enrolledScore;
    }
  }

  getScoreReview(): string {
    switch (true) {
      case this.model.futureScore <= 500:
        return "Very Poor";
      case this.model.futureScore <= 600:
        return "Poor";
      case this.model.futureScore <= 660:
        return "Fair";
      case this.model.futureScore <= 780:
        return "Good";
      default:
        return "Excellent";
    }
  }
}
