import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngxs/store';
import { ICircleProgressStep } from '@shared/components/progressbars/circle-checktext-progressbar/circle-checktext-progressbar';

import { Initiative, InitiativeSubTask, InitiativeTask } from '@shared/interfaces/progress-tracker.interface';
import { DashboardService } from '@shared/services/dashboard/dashboard.service';
import { ProgressTrackerService } from '@shared/services/progress-tracker/progress-tracker-service.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'brave-progress-tracker',
  templateUrl: './progress-tracker.component.html',
})
export class ProgressTrackerComponent implements OnInit {
  initiative: Initiative | null = null; //! replace default
  goalId: string = 'credit_card'; //! replace default
  initiativeTasks: InitiativeTask[] = [];
  futureScore: number = 0;
  enrolledOn: string | undefined = this.store.selectSnapshot((state) => state.appData)?.agencies?.transunion
    ?.enrolledOn;
  enrolledScore: string | undefined = this.store.selectSnapshot((state) => state.appData)?.agencies?.transunion
    ?.enrollVantageScore.serviceProductValue;

  get firstprimaryTask(): InitiativeTask | undefined {
    if (this.initiativeTasks) {
      return this.initiativeTasks[0];
    } else {
      return undefined;
    }
  }

  constructor(public progressTracker: ProgressTrackerService, private store: Store) {
    this.initiative = progressTracker.initiative;
  }

  ngOnInit(): void {
    this.setCurrentInitiativeTasks();
    this.futureScore = (this.progressTracker.findFutureScore() || 0) + +(this.enrolledScore || 0);
  }

  setCurrentInitiativeTasks() {
    this.initiativeTasks = this.initiative?.initiativeTasks || [];
  }

  //choose compoennt based on init
}
