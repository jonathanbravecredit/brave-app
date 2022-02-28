import { Component, Input, OnInit } from '@angular/core';
import { IProgressStep } from '@shared/components/progressbars/filled-checktext-progressbar/filled-checktext-progressbar.component';
import { Initiative, InitiativeTask } from '@shared/interfaces/progress-tracker.interface';

@Component({
  selector: 'brave-progress-tracker-pure',
  templateUrl: './progress-tracker-pure.component.html',
})
export class ProgressTrackerPureComponent implements OnInit {
  @Input() initiative: Initiative | null = null;
  @Input() goalId: string = '';
  @Input() steps: IProgressStep[] = [];
  @Input() initiativeTasks: InitiativeTask[] = [];
  @Input() futureScore: number = 0;
  @Input() enrolledScore: string | undefined;
  @Input() enrolledOn: string | undefined;

  constructor() {}

  ngOnInit(): void {
  }
}
