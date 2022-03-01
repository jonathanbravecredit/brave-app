import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ICircleProgressStep } from '@shared/components/progressbars/circle-checktext-progressbar/circle-checktext-progressbar';
import { Initiative, InitiativeSubTask, InitiativeTask } from '@shared/interfaces/progress-tracker.interface';


@Component({
  selector: 'brave-progress-tracker-pure',
  templateUrl: './progress-tracker-pure.component.html',
})
export class ProgressTrackerPureComponent implements OnInit {
  @Input() initiative: Initiative | null = null;
  @Input() goalId: string = '';
  @Input() steps: ICircleProgressStep[]  = [];
  @Input() initiativeTasks: InitiativeTask[] = [];
  @Input() futureScore: number = 0;
  @Input() enrolledScore: string | undefined;
  @Input() enrolledOn: string | undefined;

  @Output() updateTask: EventEmitter<InitiativeSubTask | InitiativeTask> = new EventEmitter<
    InitiativeSubTask | InitiativeTask
  >();

  constructor() {}

  ngOnInit(): void {}
}
