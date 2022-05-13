import { Component, OnInit } from "@angular/core";
import { PROGRESS_TRACKER_CONTENT } from "../../progress-tracker.content";

@Component({
  selector: "brave-progress-tracker-disclaimer",
  templateUrl: "./progress-tracker-disclaimer.component.html",
})
export class ProgressTrackerDisclaimerComponent implements OnInit {
  PROGRESS_TRACKER_CONTENT = PROGRESS_TRACKER_CONTENT;
  
  constructor() {}

  ngOnInit(): void {}
}
