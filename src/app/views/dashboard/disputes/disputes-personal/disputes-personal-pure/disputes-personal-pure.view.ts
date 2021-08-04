import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { DisputesTradelineComponent } from '@shared/components/disputes/disputes-tradeline/disputes-tradeline.component';
import { IDisputeProcessResult } from '@shared/components/disputes/disputes-tradeline/interfaces';
import { IBorrower, IBorrowerAddress, IBorrowerName, IEmployer } from '@shared/interfaces';
import { IDisputePersonalItem } from '@shared/services/dispute/dispute.interfaces';
import { TransunionUtil } from '@shared/utils/transunion/transunion';
import { PersonalDisputeTypes } from '@views/dashboard/disputes/disputes-reconfirm/types/dispute-reconfirm-filters';

export interface IProcessDisputePersonalResult {
  result: IDisputeProcessResult;
  personalItem: IDisputePersonalItem;
}

@Component({
  selector: 'brave-disputes-personal-pure-view',
  templateUrl: './disputes-personal-pure.view.html',
})
export class DisputesPersonalPureView implements OnInit {
  @ViewChild(DisputesTradelineComponent) disputeProcess: DisputesTradelineComponent | undefined;
  isDisputeProcessInProgress = true;
  @Input() isDisputeSent = false;
  @Input() personalType: PersonalDisputeTypes = 'unknown';
  @Input() borrower: IBorrower | undefined;
  @Input() nameDispute: IBorrowerName | undefined;
  @Input() addressDispute: IBorrowerAddress | undefined;
  @Input() employerDispute: IEmployer | undefined;
  @Output() processResult: EventEmitter<IProcessDisputePersonalResult> = new EventEmitter();
  parsedDispute: IDisputePersonalItem = {} as IDisputePersonalItem;
  constructor() {}

  ngOnInit(): void {
    console.log('personalType in personal pure ===> ', this.personalType);
    switch (this.personalType) {
      case 'name':
        this.parsedDispute = {
          borrowerPartition: this.borrower,
          personalType: this.personalType,
          namePartition: this.nameDispute,
          currentLabel: 'Name',
          currentValue: TransunionUtil.nameUnparser(this.nameDispute),
          dateUpdated: this.nameDispute?.dateUpdated || '',
        };
        break;
      case 'address':
        this.parsedDispute = {
          borrowerPartition: this.borrower,
          personalType: this.personalType,
          addressPartition: this.addressDispute,
          currentLabel: 'Address',
          currentValue: TransunionUtil.addressUnparser(this.addressDispute?.CreditAddress),
          dateUpdated: '',
        };
        break;
      case 'employer':
        this.parsedDispute = {
          borrowerPartition: this.borrower,
          personalType: this.personalType,
          addressPartition: this.employerDispute,
          currentLabel: 'Employer',
          currentValue: TransunionUtil.nameUnparser(this.employerDispute),
          dateUpdated: this.employerDispute?.dateUpdated || '',
        };
        break;
      default:
        break;
    }
  }

  // requestGoBack() {
  //   const currentInnerProcessNavigationIndex = this.disputeProcess?.getCurrentNavigationIndex();
  //   if (currentInnerProcessNavigationIndex) {
  //     if (currentInnerProcessNavigationIndex > 0) {
  //       this.disputeProcess?.goBack();
  //     }
  //   }
  // }

  // onDisputeProcessResult(result: IDisputeProcessResult): void {
  //   // result event has a data property where the reason ids can be pull out and find them in the constants of the tradeline component
  //   if (result.isFinished) {
  //     this.isDisputeSent = true;
  //     this.isDisputeProcessInProgress = false;
  //   }
  // }
}
