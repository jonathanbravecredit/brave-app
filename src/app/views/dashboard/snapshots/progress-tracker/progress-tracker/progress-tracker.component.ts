import { Component, OnDestroy, OnInit } from '@angular/core';
import { IProgressStep } from '@shared/components/progressbars/filled-checktext-progressbar/filled-checktext-progressbar.component';
import { DashboardService } from '@shared/services/dashboard/dashboard.service';
import {
  Initiative,
  InitiativePatchBody,
  InitiativeSubTask,
  InitiativeTask,
} from '@views/dashboard/snapshots/progress-tracker/MOCKDATA';
import { Subscription } from 'rxjs';

@Component({
  selector: 'brave-progress-tracker',
  templateUrl: './progress-tracker.component.html',
})
export class ProgressTrackerComponent implements OnInit, OnDestroy {
  initiative: Initiative | null = null; //! replace default
  initiative$: Subscription | undefined;
  steps: IProgressStep[] = [];
  goalId: string = 'credit_card'; //! replace default
  primaryTasks: InitiativeTask[] = [];

  get firstprimaryTask(): InitiativeTask | undefined {
    if (this.primaryTasks) {
      return this.primaryTasks[0];
    } else {
      return undefined;
    }
  }

  constructor(dashboardService: DashboardService) {
    this.initiative$ = dashboardService.progressTrackerData$.subscribe((data) => {
      this.initiative = data;
    });
  }

  ngOnInit(): void {
    this.setCurrentPrimaryTasks();
    this.createSteps();
  }

  ngOnDestroy() {
    this.initiative$?.unsubscribe();
  }

  setCurrentPrimaryTasks() {
    this.primaryTasks = this.initiative?.primaryTasks || [];
  }

  createSteps() {
    this.steps = [];
    if (this.primaryTasks && this.primaryTasks.length > 1) {
      this.primaryTasks?.forEach((primaryTask: InitiativeTask, i: number) => {
        this.steps.push({
          id: i,
          active: true,
          complete: primaryTask.taskStatus === 'complete',
          name: primaryTask.taskLabel,
        });
      });
    } else {
      this.firstprimaryTask?.subTasks?.forEach((subTask: InitiativeSubTask, i: number) => {
        this.steps.push({
          id: i,
          active: true,
          complete: subTask.taskStatus === 'complete',
          name: subTask.taskLabel,
        });
      });
    }
  }

  //choose compoennt based on init
}
