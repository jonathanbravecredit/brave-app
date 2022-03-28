import { Component, OnDestroy, OnInit } from '@angular/core';
import { ICircleProgressStep } from '@shared/components/progressbars/circle-checktext-progressbar/circle-checktext-progressbar';
import { Initiative, InitiativeTask } from '@shared/interfaces/progress-tracker.interface';
import { DashboardService } from '@shared/services/dashboard/dashboard.service';
import { ProgressTrackerService } from '@shared/services/progress-tracker/progress-tracker-service.service';
import { BehaviorSubject, Subscription } from 'rxjs';

@Component({
  selector: 'brave-progress-tracker',
  templateUrl: './progress-tracker.component.html',
})
export class ProgressTrackerComponent implements OnInit, OnDestroy {
  futureScore: number = 0;
  dashScore: number | null = 0;
  dashScore$: Subscription | undefined;
  dashDelta: number | null = 0;
  dashDelta$: Subscription | undefined;
  initiative: Initiative | null = null;
  initiativeTasks: InitiativeTask[] = [];
  hasSelfLoan: boolean = false;

  constructor(public progressTracker: ProgressTrackerService, public dashboard: DashboardService) {
    this.initiative = progressTracker.initiative;
    this.dashScore$ = this.dashboard.dashScore$.subscribe((v) => {
      this.dashScore = v;
    });
    this.dashDelta$ = this.dashboard.dashDelta$.subscribe((v) => {
      this.dashDelta = v;
    });
  }

  get firstprimaryTask(): InitiativeTask | undefined {
    return this.initiativeTasks ? this.initiativeTasks[0] : undefined;
  }

  get initiativeSteps$(): BehaviorSubject<ICircleProgressStep[]> {
    return this.progressTracker.initiativeSteps$;
  }

  get enrolledOn(): string | null | undefined {
    return this.progressTracker.enrolledOn;
  }

  get enrolledScore(): string | null | undefined {
    return this.progressTracker.enrolledScore;
  }

  ngOnInit(): void {
    this.setCurrentInitiativeTasks();
    this.futureScore = (this.progressTracker.findFutureScore() || 0) + +(this.enrolledScore || 0);
  }

  ngOnDestroy(): void {
    this.dashDelta$?.unsubscribe();
    this.dashScore$?.unsubscribe();
  }

  setCurrentInitiativeTasks() {
    this.initiativeTasks = this.initiative?.initiativeTasks || [];
  }
}
