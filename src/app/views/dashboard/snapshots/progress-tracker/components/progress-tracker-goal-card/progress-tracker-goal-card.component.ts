import { Component, Input, OnInit } from '@angular/core';
import { IFilledOnlyTextButtonConfig } from '@shared/components/buttons/filled-onlytext-button/filled-onlytext-button.component';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { ProgressTrackerService } from '@shared/services/progress-tracker/progress-tracker-service.service';
import { InitiativePatchBody, InitiativeSubTask } from '@shared/interfaces/progress-tracker.interface';
import { Router } from '@angular/router';

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
  @Input() taskCompleted: boolean = false;
  patchBody: InitiativePatchBody | undefined;
  expanded: boolean = false;
  showQuestion: boolean = false;
  link: string | undefined;
  config: IFilledOnlyTextButtonConfig = {
    buttonSize: 'lg',
    backgroundColor: 'bg-indigo-800',
    activeColor: 'bg-indigo-900',
    color: 'text-white',
    full: false,
  };

  constructor(private progressTrackerService: ProgressTrackerService, private router: Router) {}

  ngOnInit(): void {
    this.patchBody = {
      parentId: this.subTask?.parentId,
      taskId: this.subTask?.taskId,
      taskStatus: this.subTask?.taskStatus,
    };
    if (!this.taskCompleted && this.subTask?.taskCard?.questionHeader && !this.showQuestion) {
      this.showQuestion = true;
    }
    this.link = this.subTask?.taskCard.link;
  }

  clickYes() {
    this.taskCompleted = true;
    if (this.patchBody) {
      this.patchBody.taskStatus = 'complete';
      this.progressTrackerService.updateProgressTrackerData(this.patchBody);
    }
    this.showQuestion = false;
  }

  clickNo() {
    if (this.subTask?.taskStatus === 'complete' && this.patchBody) {
      this.taskCompleted = false;
      this.patchBody.taskStatus = 'in_progress';
      this.progressTrackerService.updateProgressTrackerData(this.patchBody);
    }
    this.showQuestion = false;
  }

  clickButton() {
    if (!this.taskCompleted && !this.showQuestion) {
      this.clickYes();
    }

    if (this.link?.startsWith('http')) {
      window.open(this.link);
    } else {
      this.router.navigate([this.link]);
    }
  }
}
