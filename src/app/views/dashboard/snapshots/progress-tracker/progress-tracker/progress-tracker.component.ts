import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngxs/store';
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

  constructor(private dashboardService: DashboardService, private store: Store) {
    this.initiative$ = this.dashboardService.progressTrackerData$.subscribe((data) => {
      this.initiative = data;
    });
  }

  ngOnInit(): void {
    this.setCurrentInitiativeTasks();
    this.createSteps();
    this.findFutureScore();
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

  findFutureScore() {
    this.initiative?.initiativeTasks?.forEach((initiativeTasks: InitiativeTask) => {
      let res = initiativeTasks.subTasks?.reduce((total: number, subTask: InitiativeSubTask) => {
        return total + +subTask.taskCard?.metric;
      }, 0);
      this.futureScore += res ? res : 0;
    });
    if (this.enrolledScore) {
      this.futureScore += +this.enrolledScore;
    } else {
      this.futureScore = 0;
    }
  }

  //choose compoennt based on init
}
