import { Component, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { ViewdetailButtonComponent } from '@shared/components/buttons/viewdetail-button/viewdetail-button.component';
import { INegativeAccountCardInputs } from '@views/dashboard/negative-account/negative-account-card/interfaces';
import {
  IOnboardingEvent,
  OnboardingDisputeComponent,
} from '@shared/components/modals/onboarding-dispute/onboarding-dispute.component';

@Component({
  selector: 'brave-negative-account-card',
  templateUrl: './negative-account-card.component.html',
})
export class NegativeAccountCardComponent {
  @ViewChild(OnboardingDisputeComponent)
  disputeTermsModal: OnboardingDisputeComponent | undefined;
  @Output() confirmed: EventEmitter<void> = new EventEmitter();
  @Input() acknowledged: boolean = false;
  @Input() showDisputeButton = true;
  @Input() data: INegativeAccountCardInputs = {} as INegativeAccountCardInputs;

  @ViewChild(ViewdetailButtonComponent)
  viewDetail: ViewdetailButtonComponent | undefined;
  constructor() {}

  onDisputeClick() {
    this.confirmed.emit();
  }
}
