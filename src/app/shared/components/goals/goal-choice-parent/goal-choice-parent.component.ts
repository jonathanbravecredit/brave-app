import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { goalItems } from '@shared/components/goals/goal-info';
import { ProgressTrackerService } from '@shared/services/progress-tracker/progress-tracker-service.service';
import { IGoalInfo } from '@views/onboarding/kyc-goal-choice/kyc-goal-choice/kyc-goal-choice.component';

@Component({
  selector: 'brave-goal-choice-parent',
  templateUrl: './goal-choice-parent.component.html',
})
export class GoalChoiceParentComponent implements OnInit {
  goalItems: IGoalInfo[] = goalItems;

  @Input() getInitiative: boolean = false;

  @Output() goalClick: EventEmitter<void> = new EventEmitter<void>();

  constructor(private progressTrackerService: ProgressTrackerService) {}

  ngOnInit(): void {}

  onClick(goalInfo: IGoalInfo): void {
    if (this.getInitiative) {
      this.progressTrackerService.postThenGetUserGoal(goalInfo);
    } else {
      this.progressTrackerService.postUserGoal(goalInfo);
    }
    this.goalClick.emit();
  }
}
