import { Component, OnInit } from '@angular/core';
import { IProgressStep } from '@shared/components/progressbars/filled-checktext-progressbar/filled-checktext-progressbar.component';
import { MOCKPROGRESSTRACKERDATA } from '@views/dashboard/snapshots/progress-tracker/MOCKDATA';

@Component({
  selector: 'brave-progress-tracker',
  templateUrl: './progress-tracker.component.html'
})
export class ProgressTrackerComponent implements OnInit {
  data: any = MOCKPROGRESSTRACKERDATA; //! replace default
  steps: IProgressStep[] = [];
  goalId: string = 'credit_card'; //! replace default
  currentGoal: any = {};

  constructor() { }

  ngOnInit(): void {
    this.setCurrentGoal()
    this.createSteps()
  }


  setCurrentGoal() {
    this.currentGoal = this.data.aggregateGoals.filter((intance: any) => intance.id === this.goalId)[0];
  }

  createSteps() {
    this.steps = []
    this.currentGoal.goals.forEach((element: any, i: number) => {
      this.steps.push({
        id: i,
        active: true,
        complete: element.progress === 'complete',
        name: element.stepText,
      })
    });
  }
}
