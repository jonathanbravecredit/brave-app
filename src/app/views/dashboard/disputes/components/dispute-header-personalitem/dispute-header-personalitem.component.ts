import { Component, Input, OnInit } from '@angular/core';
import { IBorrowerName, IBorrowerAddress, IEmployer } from '@shared/interfaces';
import { IDisputePersonalItem } from '@shared/services/dispute/dispute.interfaces';
import { TransunionUtil as tu } from '@shared/utils/transunion/transunion';

@Component({
  selector: 'brave-dispute-header-personalitem',
  templateUrl: './dispute-header-personalitem.component.html',
})
export class DisputeHeaderPersonalitemComponent implements OnInit {
  @Input() dispute: IDisputePersonalItem | undefined = {} as IDisputePersonalItem;
  missing = tu.bcMissing;
  value: string = tu.bcMissing;
  icon: string = 'perm_identity';
  label: string = 'Item';
  constructor() {}

  ngOnInit(): void {
    if (!this.dispute) {
      this.value = tu.bcMissing;
    }
    switch (this.dispute?.key) {
      case 'name':
        this.icon = 'face';
        this.label = 'Name';
        const name = this.dispute.value as IBorrowerName;
        this.value = tu.parsers.report.unparseName(name) || tu.bcMissing;
        break;
      case 'curraddress':
        this.icon = 'home';
        this.label = 'Address';
        const curraddress = this.dispute.value as IBorrowerAddress;
        this.value = tu.parsers.report.unparseAddress(curraddress.CreditAddress) || tu.bcMissing;
        break;
      case 'prevaddress':
        this.icon = 'home';
        this.label = 'Address';
        const prevaddress = this.dispute.value as IBorrowerAddress;
        this.value = tu.parsers.report.unparseAddress(prevaddress.CreditAddress) || tu.bcMissing;
        break;
      case 'employer':
        this.icon = 'badge';
        this.label = 'Employer';
        const employer = this.dispute.value as IEmployer;
        this.value = tu.parsers.report.unparseEmployer(employer) || tu.bcMissing;
        break;
      default:
        this.value = tu.bcMissing;
        break;
    }
  }
}
