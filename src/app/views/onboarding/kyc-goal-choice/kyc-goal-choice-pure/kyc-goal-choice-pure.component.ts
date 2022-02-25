import { Component, Input, OnInit } from '@angular/core';
import { ProgressTrackerService } from '@shared/services/progress-tracker/progress-tracker-service.service';
import { IGoalInfo } from '@views/onboarding/kyc-goal-choice/kyc-goal-choice/kyc-goal-choice.component';

@Component({
  selector: 'brave-kyc-goal-choice-pure',
  templateUrl: './kyc-goal-choice-pure.component.html',
})
export class KycGoalChoicePureComponent implements OnInit {
  @Input() goalItems: IGoalInfo[] | undefined;

  constructor(private progressTrackerService: ProgressTrackerService) {}

  ngOnInit(): void {}

  buttonClick(goalInfo: IGoalInfo) {
    this.progressTrackerService.postUserGoal(goalInfo)
  }
}
