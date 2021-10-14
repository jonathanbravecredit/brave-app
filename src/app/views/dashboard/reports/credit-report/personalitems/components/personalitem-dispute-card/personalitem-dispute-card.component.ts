import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IBorrowerAddress, IEmployer, IBorrowerName } from '@shared/interfaces';
import { TransunionUtil as tu } from '@shared/utils/transunion/transunion';
import { IPersonalItemsDetailsConfig } from '@views/dashboard/reports/credit-report/personalitems/components/personalitems-details/interfaces';

@Component({
  selector: 'brave-personalitem-dispute-card',
  templateUrl: './personalitem-dispute-card.component.html',
})
export class PersonalitemDisputeCardComponent implements OnInit {
  @Input() personalItem: IPersonalItemsDetailsConfig | undefined;
  @Output() disputeClick: EventEmitter<void> = new EventEmitter();
  value: string = tu.bcMissing;
  icon: string = 'perm_identity';
  label: string = 'Item';
  constructor() {}

  ngOnInit(): void {
    if (!this.personalItem) {
      this.value = tu.bcMissing;
    }
    switch (this.personalItem?.key) {
      case 'name':
        this.icon = 'face';
        this.label = 'Name';
        const name = this.personalItem.value as IBorrowerName;
        this.value = tu.parsers.report.unparseName(name) || tu.bcMissing;
        break;
      case 'address':
        this.icon = 'home';
        this.label = 'Address';
        const address = this.personalItem.value as IBorrowerAddress;
        this.value = tu.parsers.report.unparseAddress(address.CreditAddress) || tu.bcMissing;
        break;
      case 'employer':
        this.icon = 'badge';
        this.label = 'Employer';
        const employer = this.personalItem.value as IEmployer;
        this.value = tu.parsers.report.unparseEmployer(employer) || tu.bcMissing;
        break;
      default:
        this.value = tu.bcMissing;
        break;
    }
  }
}
