import { Component, Input, OnInit } from "@angular/core";
import { IFilledOnlyTextButtonConfig } from "@shared/components/buttons/filled-onlytext-button/filled-onlytext-button.component";
import {
  trigger,
  state,
  style,
  animate,
  transition,
} from "@angular/animations";
import { ProgressTrackerService } from "@shared/services/progress-tracker/progress-tracker-service.service";
import {
  InitiativePatchBody,
  InitiativeSubTask,
} from "@shared/interfaces/progress-tracker.interface";
import { Router } from "@angular/router";
import { ProgressTrackerViewService } from "../../progress-tracker-view.service";

@Component({
  selector: "brave-progress-tracker-goal-card",
  templateUrl: "./progress-tracker-goal-card.component.html",
  animations: [
    trigger("openClose", [
      state("closed", style({ height: "0" })),
      state("open", style({ height: "*" })),
      transition("closed => open", [animate("0.1s linear")]),
      transition("open => closed", [animate("0.1s linear")]),
    ]),
  ],
})
export class ProgressTrackerGoalCardComponent implements OnInit {
  @Input() subTask: InitiativeSubTask | undefined;
  @Input() taskCompleted: boolean = false;

  patchBody: InitiativePatchBody | undefined;
  expanded: boolean = false;
  showQuestion: boolean = false;
  metric: string = "-";
  link: string | undefined;
  config: IFilledOnlyTextButtonConfig = {
    buttonSize: "lg",
    backgroundColor: "bg-indigo-800",
    activeColor: "bg-indigo-900",
    color: "text-white",
    full: false,
  };

  constructor(
    private router: Router,
    private progressTrackerViewService: ProgressTrackerViewService
  ) {}

  ngOnInit(): void {
    this.patchBody = {
      parentId: this.subTask?.parentId,
      taskId: this.subTask?.taskId,
      taskStatus: this.subTask?.taskStatus,
    };
    if (
      !this.taskCompleted &&
      this.subTask?.taskCard?.questionHeader &&
      !this.showQuestion
    ) {
      this.showQuestion = true;
    }
    this.link = this.subTask?.taskCard?.link;
    if (this.subTask) {
      this.metric = this.progressTrackerViewService.getMetric(this.subTask);
    }
  }

  clickYes() {
    if (this.subTask?.taskId !== "open_self_loan") {
      //! PLACEHOLDER SOLUTION
      if (this.patchBody) {
        this.patchBody.taskStatus = "complete";
        this.progressTrackerViewService.updateProgressTrackerData(this.patchBody);
      }
      this.taskCompleted = true;
      this.showQuestion = false;
    }
  }

  clickNo() {
    if (this.subTask?.taskStatus === "complete" && this.patchBody) {
      this.taskCompleted = false;
      this.patchBody.taskStatus = "in_progress";
      this.progressTrackerViewService.updateProgressTrackerData(this.patchBody);
    }
    this.showQuestion = false;
  }

  clickButton() {
    if (!this.taskCompleted && !this.showQuestion) {
      this.clickYes();
    }

    if (this.link?.startsWith("http")) {
      window.open(this.link);
    } else {
      this.router.navigate([this.link]);
    }
  }
}
