import { Component, Input, OnInit, ViewChild } from '@angular/core';
import {
  BaseModalSmallComponent,
  IBaseModalSmallConfig,
} from '@shared/components/modals/base-modal-small/base-modal-small.component';
import { ModalService } from '@shared/services/modal/modal.service';
import { ICON_KEY_DESCRIPTIONS } from '@views/dashboard/reports/credit-report/tradelines/components/tradeline-payment-icon-key/constants';

@Component({
  selector: 'brave-tradeline-payment-icon-key',
  templateUrl: './tradeline-payment-icon-key.component.html',
})
export class TradelinePaymentIconKeyComponent implements OnInit {
  @ViewChild(BaseModalSmallComponent) modal: BaseModalSmallComponent | undefined;
  @Input() showModal: boolean = true;
  descriptions = ICON_KEY_DESCRIPTIONS;
  config: IBaseModalSmallConfig;

  constructor(private modalService: ModalService) {
    this.config = {
      title: 'Payment/Remarks Key',
      enableButtonOne: false,
      enableButtonTwo: false,
    };
  }

  ngOnInit(): void {
  }


  closeModal(): void {
    this.modalService.removeModalFromBody();
  }
}
