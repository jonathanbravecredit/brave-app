import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { ViewdetailButtonComponent } from '@shared/components/buttons/viewdetail-button/viewdetail-button.component';
import {
  OnboardingDisputeComponent,
  IOnboardingEvent,
} from '@shared/components/modals/onboarding-dispute/onboarding-dispute.component';
import { ITradeLinePartition } from '@shared/interfaces/merge-report.interface';

@Component({
  selector: 'brave-dispute-header-card',
  templateUrl: './dispute-header-card.component.html',
})
export class DisputeHeaderCardComponent {
  @ViewChild(ViewdetailButtonComponent)
  viewDetail: ViewdetailButtonComponent | undefined;
  @ViewChild(OnboardingDisputeComponent)
  disputeTermsModal: OnboardingDisputeComponent | undefined;
  @Output() confirmed: EventEmitter<void> = new EventEmitter();
  @Input() showDisputeButton = false;
  @Input() tradeline: ITradeLinePartition | undefined = {} as ITradeLinePartition;
  @Input() creditorName: string | undefined = '';
  @Input() lastReported: string | undefined = '';
  @Input() originalCreditor: string | undefined = '';
  @Input() originalCreditorValue: string | undefined = '';
  @Input() accountTypeDescription: string | undefined = '';
  @Input() accountTypeDescriptionValue: string | undefined = '';
  @Input() disputeFlag: string | undefined = '';
  @Input() disputeFlagValue: string | undefined = '';
  @Input() accountNumber: string | undefined = '';
  @Input() typeOfCollection: string | undefined = '';
  @Input() amountPastDue: string | number | undefined = 0;
  @Input() dateOpened: string | undefined = '1900-01-01';
  @Input() dateLastPayment: string | undefined = '1900-01-01';
  @Input() remarks: string | undefined = '';

  showModal = false;

  constructor() {}

  actionForDispute(e: IOnboardingEvent) {
    if (e.isConfirmed) {
      this.showModal = false;
      this.confirmed.emit();
    }
  }
}
