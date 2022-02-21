import { Component, Input, OnInit } from '@angular/core';
import { IProgressStep } from '@shared/components/progressbars/filled-checktext-progressbar/filled-checktext-progressbar.component';

@Component({
  selector: 'brave-progress-tracker-pure',
  templateUrl: './progress-tracker-pure.component.html',
})
export class ProgressTrackerPureComponent implements OnInit {
  @Input() data: any = {};
  @Input() goalId: string = '';
  @Input() steps: IProgressStep[] = [];
  @Input() currentGoal: any = {};

  constructor() {}

  ngOnInit(): void {
  }
}
