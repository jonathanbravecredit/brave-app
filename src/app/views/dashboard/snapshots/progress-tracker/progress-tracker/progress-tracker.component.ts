import { Component, OnDestroy, OnInit } from '@angular/core';
import { IProgressStep } from '@shared/components/progressbars/filled-checktext-progressbar/filled-checktext-progressbar.component';
import { Initiative, InitiativeSubTask, InitiativeTask } from '@shared/interfaces/progress-tracker.interface';
import { DashboardService } from '@shared/services/dashboard/dashboard.service';
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
  initiativeTasks: InitiativeTask[] = [];

  get firstprimaryTask(): InitiativeTask | undefined {
    if (this.initiativeTasks) {
      return this.initiativeTasks[0];
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
    this.setCurrentInitiativeTasks();
    this.createSteps();
  }

  ngOnDestroy() {
    this.initiative$?.unsubscribe();
  }

  setCurrentInitiativeTasks() {
    this.initiativeTasks = this.initiative?.initiativeTasks || [];
  }

  createSteps() {
    this.steps = [];
    if (this.initiativeTasks && this.initiativeTasks.length > 1) {
      this.initiativeTasks?.forEach((primaryTask: InitiativeTask, i: number) => {
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
