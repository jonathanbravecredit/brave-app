import { Injectable, OnDestroy } from "@angular/core";
import { IProgressTrackerView } from "./progress-tracker.model";
import { BehaviorSubject } from "rxjs/internal/BehaviorSubject";
import * as _ from "lodash";
import { ProgressTrackerService } from "../../../shared/services/progress-tracker/progress-tracker-service.service";
import { DashboardService } from "../../../shared/services/dashboard/dashboard.service";
import { Subscription } from "rxjs";
import { ICircleProgressStep } from "../../../shared/components/progressbars/circle-checktext-progressbar/circle-checktext-progressbar";
import {
  Initiative,
  InitiativeSubTask,
} from "../../../shared/interfaces/progress-tracker.interface";
import dayjs from "dayjs";
import { InitiativePatchBody } from '../../../shared/interfaces/progress-tracker.interface';

@Injectable({
  providedIn: "root",
})
export class ProgressTrackerViewService implements OnDestroy {
  model: IProgressTrackerView = {} as IProgressTrackerView;
  model$: BehaviorSubject<IProgressTrackerView> =
    new BehaviorSubject<IProgressTrackerView>({} as IProgressTrackerView);

  dashScoreSub$: Subscription;
  dashDeltaSub$: Subscription;

  constructor(
    private progressTrackerService: ProgressTrackerService,
    private dashboard: DashboardService
  ) {
    this.model.initiative = this.initiative;
    this.model.steps = this.initiativeSteps;
    this.model.enrolledOn = this.enrolledOn;
    this.model.enrolledScore = this.enrolledScore;
    if (this.model.initiative) {
      this.model.initiativeTasks = this.model.initiative.initiativeTasks;
    }
    this.model.futureScore =
      (this.progressTrackerService.findFutureScore() || 0) +
      +(this.enrolledScore || 0);

    this.dashScoreSub$ = this.dashboard.dashScore$.subscribe((v) => {
      this.model.dashScore = v;
    });
    this.dashDeltaSub$ = this.dashboard.dashDelta$.subscribe((v) => {
      this.model.dashDelta = v;
    });

    this.model.hasSelfLoan = false; //! WHERE DOES THIS COME FROM?

    this.model$.next(this.model);
  }

  ngOnDestroy(): void {
    this.dashScoreSub$.unsubscribe();
    this.dashDeltaSub$.unsubscribe();
  }

  get initiative(): Initiative | null {
    return this.progressTrackerService.initiative;
  }

  get initiativeSteps(): ICircleProgressStep[] {
    return this.progressTrackerService.initiativeSteps;
  }

  get enrolledOn(): string | null | undefined {
    return this.progressTrackerService.enrolledOn;
  }

  get enrolledScore(): string | null | undefined {
    return this.progressTrackerService.enrolledScore;
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

  calculatePointsDiff() {
    if (this.model.enrolledScore) {
      return this.model.futureScore - +this.model.enrolledScore;
    }
    return 0;
  }

  calculateMonthYear() {
    return dayjs(this.model.enrolledOn).format("MMMM YYYY");
  }

  getMetric(subTask: InitiativeSubTask): string {
    if (subTask?.taskCard?.metric) {
      if (+subTask?.taskCard?.metric === 0) {
        return subTask?.taskCard?.metric;
      }
      if (+subTask?.taskCard?.metric > 0) {
        return `+${subTask?.taskCard?.metric}`;
      } else {
        return `-${subTask?.taskCard?.metric}`;
      }
    }
    return "";
  }

  updateProgressTrackerData(body: InitiativePatchBody) {
    this.progressTrackerService.updateProgressTrackerData(body)
  }
}
