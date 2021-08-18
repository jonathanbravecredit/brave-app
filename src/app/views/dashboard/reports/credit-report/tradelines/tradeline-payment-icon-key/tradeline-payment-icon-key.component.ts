import { Component, Input, OnInit, ViewChild } from '@angular/core';
import {
  BaseModalSmallComponent,
  IBaseModalSmallConfig,
} from '@shared/components/modals/base-modal-small/base-modal-small.component';
import { ICON_KEY_DESCRIPTIONS } from '@views/dashboard/reports/credit-report/tradelines/tradeline-payment-icon-key/constants';

@Component({
  selector: 'brave-tradeline-payment-icon-key',
  templateUrl: './tradeline-payment-icon-key.component.html',
})
export class TradelinePaymentIconKeyComponent implements OnInit {
  @ViewChild(BaseModalSmallComponent) modal: BaseModalSmallComponent | undefined;
  @Input() showModal: boolean = false;
  descriptions = ICON_KEY_DESCRIPTIONS;
  config: IBaseModalSmallConfig;

  constructor() {
    this.config = {
      title: 'Payment/Remarks Key',
      enableButtonOne: false,
      enableButtonTwo: false,
    };
  }

  ngOnInit(): void {
    this.initiateModal(this.showModal);
  }

  initiateModal(showModal: boolean): void {
    if (this.modal) {
      this.modal.showModal = showModal;
    }
  }

  toggleShowModal(): void {
    if (this.modal) {
      this.modal.showModal = !this.modal.showModal;
    }
  }
}
