import { Component, Input, OnInit } from '@angular/core';
import { IFilledOnlyTextButtonConfig } from '@shared/components/buttons/filled-onlytext-button/filled-onlytext-button.component';
import { trigger, state, style, animate, transition } from '@angular/animations';
import {
  InitiativePatchBody,
  InitiativePatchTask,
  InitiativeSubTask,
  InitiativeTask,
} from '@views/dashboard/snapshots/progress-tracker/MOCKDATA';
import { ProgressTrackerService } from '@shared/services/progress-tracker/progress-tracker-service.service';

@Component({
  selector: 'brave-progress-tracker-goal-card',
  templateUrl: './progress-tracker-goal-card.component.html',
  animations: [
    trigger('openClose', [
      state(
        'closed',
        style({
          // transform: 'translateY(-100%)',
          height: '0',
        }),
      ),
      state(
        'open',
        style({
          // transform: 'translateY(0%)',
          height: '*',
        }),
      ),
      transition('closed => open', [animate('0.3s linear')]),
      transition('open => closed', [animate('0.3s linear')]),
    ]),
  ],
})
export class ProgressTrackerGoalCardComponent implements OnInit {
  @Input() subTask: InitiativeSubTask | undefined;
  @Input() patchBody: InitiativePatchBody | undefined;
  @Input() taskCompleted: boolean = false;
  expanded: boolean = false;
  hideQuestion: boolean = false;
  config: IFilledOnlyTextButtonConfig = {
    buttonSize: 'lg',
    backgroundColor: 'bg-indigo-800',
    activeColor: 'bg-indigo-900',
    color: 'text-white',
    full: false,
  };

  constructor(private progressTrackerService: ProgressTrackerService) {}

  ngOnInit(): void {}

  clickYes() {
    this.patchBody?.subTasks.forEach((subTask: InitiativePatchTask) => {
      if (subTask.taskId === this.subTask?.taskId) {
        subTask.taskStatus = 'complete';
        this.taskCompleted = true;
      }
    });
    if (this.patchBody) {
      // this.progressTrackerService.patchProgressTrackerData(this.patchBody);
    }
  }

  clickNo() {
    this.hideQuestion = true;
  }
}
