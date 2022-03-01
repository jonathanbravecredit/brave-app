import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Initiative, InitiativeSubTask, InitiativeTask } from '@shared/interfaces/progress-tracker.interface';
import { ICircleProgressStep } from '@shared/components/progressbars/circle-checktext-progressbar/circle-checktext-progressbar';

@Component({
  selector: 'brave-progress-tracker-pure',
  templateUrl: './progress-tracker-pure.component.html',
})
export class ProgressTrackerPureComponent implements OnInit {
  @Input() initiative: Initiative | null = null;
  @Input() goalId: string = '';
  @Input() steps: ICircleProgressStep[] = [];
  @Input() initiativeTasks: InitiativeTask[] = [];
  @Input() futureScore: number = 0;
  @Input() enrolledScore: string | null | undefined;
  @Input() enrolledOn: string | null | undefined;

  @Output() updateTask: EventEmitter<InitiativeSubTask | InitiativeTask> = new EventEmitter<
    InitiativeSubTask | InitiativeTask
  >();

  constructor() {}

  ngOnInit(): void {}
}
