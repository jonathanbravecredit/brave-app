import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IBorrowerAddress, IEmployer, IBorrowerName } from '@shared/interfaces';
import { TransunionUtil as TU } from '@shared/utils/transunion/transunion';
import { IPersonalItemsDetailsConfig } from '@views/dashboard/reports/credit-report/personalitems/personalitems-details/interfaces';

@Component({
  selector: 'brave-personalitem-dispute-card',
  templateUrl: './personalitem-dispute-card.component.html',
})
export class PersonalitemDisputeCardComponent implements OnInit {
  @Input() personalItem: IPersonalItemsDetailsConfig | undefined;
  @Output() disputeClick: EventEmitter<void> = new EventEmitter();
  value: string = TU.bcMissing;
  icon: string = 'perm_identity';
  label: string = 'Item';
  constructor() {}

  ngOnInit(): void {
    if (!this.personalItem) {
      this.value = TU.bcMissing;
    }
    switch (this.personalItem?.key) {
      case 'name':
        this.icon = 'face';
        this.label = 'Name';
        const name = this.personalItem.value as IBorrowerName;
        this.value = TU.nameUnparser(name) || TU.bcMissing;
        break;
      case 'address':
        this.icon = 'home';
        this.label = 'Address';
        const address = this.personalItem.value as IBorrowerAddress;
        this.value = TU.addressUnparser(address.CreditAddress) || TU.bcMissing;
        break;
      case 'employer':
        this.icon = 'badge';
        this.label = 'Employer';
        const employer = this.personalItem.value as IEmployer;
        this.value = TU.employerUnparser(employer) || TU.bcMissing;
        break;
      default:
        this.value = TU.bcMissing;
        break;
    }
  }
}
