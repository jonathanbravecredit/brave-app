import { Component, EventEmitter, Input, OnInit, ViewChild } from '@angular/core';
import { FilledSpinningButtonComponent } from '@shared/components/buttons/filled-spinning-button/filled-spinning-button.component';
import { ViewdetailButtonComponent } from '@shared/components/buttons/viewdetail-button/viewdetail-button.component';
import { IOnboardingEvent } from '@shared/components/modals/onboarding-dispute/onboarding-dispute.component';
import { IDisputePersonalItem, IDisputePublicItem, IDisputeTradelineItem } from '@shared/interfaces/dispute.interfaces';

@Component({
  selector: 'brave-account-detail',
  templateUrl: './account-detail.component.html',
})
export class AccountDetailComponent implements OnInit {
  @Input() pages: any[] = [];
  @Input() data: any[] = [];
  @Input() disputeable: boolean = false;

  viewDetail: ViewdetailButtonComponent | undefined;

  tradeline: IDisputeTradelineItem | undefined;
  publicItem: IDisputePublicItem | undefined;
  personalItem: IDisputePersonalItem | undefined;

  @Input() acknowledged: boolean = false;
  @Input() confirmed: EventEmitter<void> = new EventEmitter();
  @Input() showModal: boolean = false;

  @ViewChild(FilledSpinningButtonComponent) spinnerBtn: FilledSpinningButtonComponent | undefined;

  constructor() {}

  ngOnInit(): void {}

  actionForDispute(e: IOnboardingEvent) {
    if (e.isConfirmed) {
      this.showModal = false;
      this.confirmed.emit();
    } else {
      this.spinnerBtn?.toggleSpinner();
    }
  }

  disputeClicked() {
    // when clicked and do not need acknowledgment
    if (this.acknowledged) {
      this.confirmed.emit();
    }
  }
}
