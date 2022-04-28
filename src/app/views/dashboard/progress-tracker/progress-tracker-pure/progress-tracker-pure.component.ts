import { Component, EventEmitter, OnInit, Output } from "@angular/core";
import {
  InitiativeSubTask,
  InitiativeTask,
} from "@shared/interfaces/progress-tracker.interface";
import { PROGRESS_TRACKER_CONTENT } from "../progress-tracker.content";
import { IProgressTrackerView } from "../progress-tracker.model";
@Component({
  selector: "brave-progress-tracker-pure",
  templateUrl: "./progress-tracker-pure.component.html",
})
export class ProgressTrackerPureComponent implements OnInit {
  public model: IProgressTrackerView = {} as IProgressTrackerView;

  PROGRESS_TRACKER_CONTENT = PROGRESS_TRACKER_CONTENT;

  @Output() updateTask: EventEmitter<InitiativeSubTask | InitiativeTask> =
    new EventEmitter<InitiativeSubTask | InitiativeTask>();

  constructor() {}

  ngOnInit(): void {}
}
