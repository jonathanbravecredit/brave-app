import { Component, Input, OnInit } from '@angular/core';
import { IBorrowerName, IBorrowerAddress, IEmployer } from '@shared/interfaces';
import { TransunionUtil as tu } from '@shared/utils/transunion/transunion';
import { IPersonalItemsDetailsConfig } from '@views/dashboard/reports/credit-report/personalitems/components/personalitems-details/interfaces';

@Component({
  selector: 'account-summary-personalitem',
  templateUrl: './account-summary-personalitem.component.html',
})
export class AccountSummaryPersonalitemComponent implements OnInit {
  @Input() personalDetailsConfig: IPersonalItemsDetailsConfig | undefined;
  missing = tu.bcMissing;
  value: string = tu.bcMissing;
  icon: string = 'perm_identity';
  label: string = 'Item';
  constructor() {}

  ngOnInit(): void {
    if (!this.personalDetailsConfig) {
      this.value = tu.bcMissing;
    }
    switch (this.personalDetailsConfig?.key) {
      case 'name':
        this.icon = 'face';
        this.label = 'Name';
        const name = this.personalDetailsConfig.value as IBorrowerName;
        this.value = tu.parsers.report.unparseName(name) || tu.bcMissing;
        break;
      case 'aka':
        this.icon = 'face';
        this.label = 'Name';
        const aka = this.personalDetailsConfig.value as IBorrowerName;
        this.value = tu.parsers.report.unparseName(aka) || tu.bcMissing;
        break;
      case 'curraddress':
        this.icon = 'home';
        this.label = 'Address';
        const curraddress = this.personalDetailsConfig.value as IBorrowerAddress;
        this.value = tu.parsers.report.unparseAddress(curraddress.CreditAddress) || tu.bcMissing;
        break;
      case 'prevaddress':
        this.icon = 'home';
        this.label = 'Address';
        const prevaddress = this.personalDetailsConfig.value as IBorrowerAddress;
        this.value = tu.parsers.report.unparseAddress(prevaddress.CreditAddress) || tu.bcMissing;
        break;
      case 'employer':
        this.icon = 'badge';
        this.label = 'Employer';
        const employer = this.personalDetailsConfig.value as IEmployer;
        this.value = tu.parsers.report.unparseEmployer(employer) || tu.bcMissing;
        break;
      default:
        this.value = tu.bcMissing;
        break;
    }
  }
}
