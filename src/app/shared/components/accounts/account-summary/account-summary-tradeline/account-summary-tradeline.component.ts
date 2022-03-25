import { Component, Input, OnInit } from '@angular/core';
import { BaseModalSmallComponent } from '@shared/components/modals/base-modal-small/base-modal-small.component';
import { ModalService } from '@shared/services/modal/modal.service';
import { TransunionUtil } from '@shared/utils/transunion/transunion';
import { ITradelineDetailsConfig } from '@views/dashboard/reports/credit-report/tradelines/components/tradeline-details/interfaces';

@Component({
  selector: 'brave-account-summary-tradeline',
  templateUrl: './account-summary-tradeline.component.html',
})
export class AccountSummaryTradelineComponent implements OnInit {
  @Input() tradeline: ITradelineDetailsConfig | undefined = {} as ITradelineDetailsConfig;
  missing = TransunionUtil.bcMissing;

  constructor(private modalService: ModalService) {}

  ngOnInit(): void {}

  openModal = () => {
    return this.modalService.appendModalToBody(BaseModalSmallComponent, {
      config: {
        openButtonText: '',
        title: 'Original creditor',
        body: 'This refers to the account’s first creditor, if the account was sent to a collections agency. If the field is empty, it means the account has not changed creditors.',
        actionButtonOneText: '',
        actionButtonTwoText: '',
        hideButtons: true,
      },
      showModal: true,
    });
  };
}
