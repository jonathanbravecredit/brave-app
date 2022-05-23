import { Injectable, OnDestroy } from "@angular/core";
import { IProgressTrackerView } from "./progress-tracker.model";
import { BehaviorSubject } from "rxjs/internal/BehaviorSubject";
import * as _ from "lodash";
import { ProgressTrackerService } from "../../../shared/services/progress-tracker/progress-tracker-service.service";
import { DashboardService } from "../../../shared/services/dashboard/dashboard.service";
import { Subscription, combineLatest } from "rxjs";
import { InitiativeSubTask } from "../../../shared/interfaces/progress-tracker.interface";
import dayjs from "dayjs";
import { InitiativePatchBody } from "../../../shared/interfaces/progress-tracker.interface";

@Injectable({
  providedIn: "root",
})
export class ProgressTrackerViewService implements OnDestroy {
  model: IProgressTrackerView = {} as IProgressTrackerView;
  model$: BehaviorSubject<IProgressTrackerView> =
    new BehaviorSubject<IProgressTrackerView>({} as IProgressTrackerView);

  initiativeSub$: Subscription;

  managedTasks: { [key: string]: boolean } = {
    review_report: true,
    open_self_loan: true,
  };

  constructor(
    private progressTrackerService: ProgressTrackerService,
    private dashboard: DashboardService
  ) {
    const { enrolledOn, enrolledScore } = this.progressTrackerService;
    let futureScore = this.futureScore + +(enrolledScore || 0);
    let modelObj: Partial<IProgressTrackerView> = {
      enrolledOn,
      enrolledScore,
      futureScore: futureScore,
      scoreReview: this.getScoreReview(futureScore),
      pointsDiff: this.calculatePointsDiff(futureScore, enrolledScore),
      monthYear: this.calculateMonthYear(enrolledOn),
      hasSelfLoan: false,
    };

    this.initiativeSub$ = combineLatest([
      this.progressTrackerService.initiative$,
      this.progressTrackerService.initiativeSteps$,
      this.dashboard.dashScore$,
      this.dashboard.dashDelta$,
    ]).subscribe(([initiative, initiativeSteps, dashScore, dashDelta]) => {
      this.mergeModel({
        initiative: initiative.data,
        initiativeSteps,
        initiativeTasks: initiative.data?.initiativeTasks || [],
        dashScore,
        dashDelta,
      });
    });

    this.mergeModel(modelObj);
  }

  get futureScore(): number {
    return this.progressTrackerService.findFutureScore() || 0;
  }

  mergeModel(modelObject: Partial<IProgressTrackerView>) {
    _.merge(this.model, modelObject);
    this.model$.next(this.model);
  }

  ngOnDestroy(): void {
    this.initiativeSub$.unsubscribe();
  }

  getScoreReview(futureScore: number): string {
    switch (true) {
      case futureScore <= 500:
        return "Very Poor";
      case futureScore <= 600:
        return "Poor";
      case futureScore <= 660:
        return "Fair";
      case futureScore <= 780:
        return "Good";
      default:
        return "Excellent";
    }
  }

  calculatePointsDiff(
    futureScore: number,
    enrolledScore: string | null | undefined
  ) {
    if (enrolledScore) {
      return futureScore - +enrolledScore;
    }
    return 0;
  }

  calculateMonthYear(enrolledOn: string | null | undefined) {
    return dayjs(enrolledOn).format("MMMM YYYY");
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

  isManagedTask(taskId: string) {
    return this.managedTasks[taskId] || false;
  }

  updateProgressTrackerData(body: InitiativePatchBody) {
    this.progressTrackerService.updateProgressTrackerData(body);
  }
}
