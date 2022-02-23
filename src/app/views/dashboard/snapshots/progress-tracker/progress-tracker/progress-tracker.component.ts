import { Component, OnInit } from '@angular/core';
import { IProgressStep } from '@shared/components/progressbars/filled-checktext-progressbar/filled-checktext-progressbar.component';
import { Initiative, InitiativeSubTask, InitiativeTask, MOCKPROGRESSTRACKERDATA } from '@views/dashboard/snapshots/progress-tracker/MOCKDATA';

@Component({
  selector: 'brave-progress-tracker',
  templateUrl: './progress-tracker.component.html'
})
export class ProgressTrackerComponent implements OnInit {
  data: Initiative = MOCKPROGRESSTRACKERDATA; //! replace default
  steps: IProgressStep[] = [];
  goalId: string = 'credit_card'; //! replace default
  primaryTasks: InitiativeTask[] = [];

  get firstprimaryTask() : InitiativeTask | undefined {
    return this.primaryTasks[0]
  }

  constructor() { }

  ngOnInit(): void {
    this.setCurrentPrimaryTasks()
    this.createSteps()
  }


  setCurrentPrimaryTasks() {
    this.primaryTasks = this.data.primaryTasks
  }

  createSteps() {
    this.steps = []
    if (this.primaryTasks.length > 1) {
      this.primaryTasks.forEach((primaryTask: InitiativeTask, i: number) => {
        this.steps.push({
          id: i,
          active: true,
          complete: primaryTask.taskStatus === 'complete',
          name: primaryTask.taskLabel,
        })
      })
    } else {
      this.firstprimaryTask?.subTasks?.forEach((subTask: InitiativeSubTask, i: number) => {
        this.steps.push({
          id: i,
          active: true,
          complete: subTask.taskStatus === 'complete',
          name: subTask.taskLabel,
        })
      });
    }
  }

  //choose compoennt based on init

}
