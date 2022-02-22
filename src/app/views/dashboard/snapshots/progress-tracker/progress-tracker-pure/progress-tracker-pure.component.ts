import { Component, Input, OnInit } from '@angular/core';
import { IProgressStep } from '@shared/components/progressbars/filled-checktext-progressbar/filled-checktext-progressbar.component';
import { IGoalHolder, IGoalSummary } from '@views/dashboard/snapshots/progress-tracker/MOCKDATA';

@Component({
  selector: 'brave-progress-tracker-pure',
  templateUrl: './progress-tracker-pure.component.html',
})
export class ProgressTrackerPureComponent implements OnInit {
  @Input() data: IGoalHolder | undefined;
  @Input() goalId: string = '';
  @Input() steps: IProgressStep[] = [];
  @Input() currentGoal: IGoalSummary | undefined;

  constructor() {}

  ngOnInit(): void {
    console.log('HERE', this.currentGoal)
  }
}
