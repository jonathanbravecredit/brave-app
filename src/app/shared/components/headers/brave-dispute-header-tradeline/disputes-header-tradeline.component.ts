import { Component, Input, OnInit } from '@angular/core';
import { BaseModalSmallComponent } from '@shared/components/modals/base-modal-small/base-modal-small.component';
import { IDisputeTradelineItem } from '@shared/interfaces/dispute.interfaces';
import { ModalService } from '@shared/services/modal/modal.service';
import { TransunionUtil } from '@shared/utils/transunion/transunion';

@Component({
  selector: 'brave-disputes-header-tradeline',
  templateUrl: './disputes-header-tradeline.component.html',
})
export class DisputesHeaderTradelineComponent implements OnInit {
  @Input() dispute: IDisputeTradelineItem | undefined = {} as IDisputeTradelineItem;
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
