import { Component, Input, OnInit } from '@angular/core';
import { IProgressStep } from '@shared/components/progressbars/filled-checktext-progressbar/filled-checktext-progressbar.component';
import { Initiative, InitiativeTask } from '@views/dashboard/snapshots/progress-tracker/MOCKDATA';

@Component({
  selector: 'brave-progress-tracker-pure',
  templateUrl: './progress-tracker-pure.component.html',
})
export class ProgressTrackerPureComponent implements OnInit {
  @Input() initiative: Initiative | null = null;
  @Input() goalId: string = '';
  @Input() steps: IProgressStep[] = [];
  @Input() primaryTasks: InitiativeTask[] = [];

  constructor() {}

  ngOnInit(): void {}
}
