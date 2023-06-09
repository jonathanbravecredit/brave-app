import { Component, Input, OnInit } from '@angular/core';
import { TransunionUtil } from '@shared/utils/transunion/transunion';
import { IPersonalItemsDetailsTable } from '@views/dashboard/reports/credit-report/personalitems/components/personalitems-details/interfaces';

@Component({
  selector: 'brave-personalitems-details-table',
  templateUrl: './personalitems-details-table.component.html',
})
export class PersonalitemsDetailsTableComponent implements OnInit {
  /**
   * Config parameters with parsed public item data
   * @property config
   */
  @Input() config: IPersonalItemsDetailsTable | undefined;
  @Input() isDisputePageOne: boolean = false;
  @Input() isDisputePageTwo: boolean = false;
  mapper: Record<string, any>;
  /**
   * Revolving account display mapping
   * @property {Record<string, any>} revolvingAccountMapping
   */
  private personalItemsMapping: Record<string, any> = {
    ssn: 'Social Security Number',
    borrowerNames: 'Name',
    currentAddress: 'Current Address',
    previousAddress: 'Previous Address(es)',
    telephone: 'Telephone',
    employers: 'Employer',
  };
  bcMissing = TransunionUtil.bcMissing;
  constructor() {
    this.mapper = this.personalItemsMapping;
  }

  ngOnInit(): void {}
}
