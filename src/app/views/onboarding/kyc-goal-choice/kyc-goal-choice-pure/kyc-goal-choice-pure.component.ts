import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ProgressTrackerService } from '@shared/services/progress-tracker/progress-tracker-service.service';
import { IGoalInfo } from '@views/onboarding/kyc-goal-choice/kyc-goal-choice/kyc-goal-choice.component';


@Component({
  selector: 'brave-kyc-goal-choice-pure',
  templateUrl: './kyc-goal-choice-pure.component.html',
})
export class KycGoalChoicePureComponent implements OnInit {
  @Input() goalItems: IGoalInfo[] | undefined;

  @Output() buttonClick: EventEmitter<IGoalInfo> = new EventEmitter<IGoalInfo>()

  constructor() {}

  ngOnInit(): void {}

}
