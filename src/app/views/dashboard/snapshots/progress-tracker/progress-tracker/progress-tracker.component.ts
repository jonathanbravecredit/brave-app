import { Component, OnInit } from '@angular/core';
import { Store } from '@ngxs/store';
import { ICircleProgressStep } from '@shared/components/progressbars/circle-checktext-progressbar/circle-checktext-progressbar';
import { Initiative, InitiativeTask } from '@shared/interfaces/progress-tracker.interface';
import { ProgressTrackerService } from '@shared/services/progress-tracker/progress-tracker-service.service';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'brave-progress-tracker',
  templateUrl: './progress-tracker.component.html',
})
export class ProgressTrackerComponent implements OnInit {
  futureScore: number = 0;
  initiative: Initiative | null = null;
  initiativeTasks: InitiativeTask[] = [];

  constructor(public progressTracker: ProgressTrackerService, private store: Store) {
    this.initiative = progressTracker.initiative;
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

  setCurrentInitiativeTasks() {
    this.initiativeTasks = this.initiative?.initiativeTasks || [];
  }
}
