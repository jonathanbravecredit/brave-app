import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { TransunionUtil as tu } from '@shared/utils/transunion/transunion';
import { IPublicItemsDetailsConfig } from '@views/dashboard/reports/credit-report/publicitems/publicitems-details/interfaces';

@Component({
  selector: 'brave-publicitems-details-table',
  templateUrl: './publicitems-details-table.component.html',
})
export class PublicitemsDetailsTableComponent implements OnInit {
  /**
   * Config parameters with parsed public item data
   * @property config
   */
  @Input() config: IPublicItemsDetailsConfig | undefined;
  @Input() isDisputePageOne: boolean = false;
  @Input() isDisputePageTwo: boolean = false;
  mapper: Record<string, any>;
  bcMissing = tu.bcMissing;
  /**
   * Revolving account display mapping
   * @property {Record<string, any>} revolvingAccountMapping
   */
  private publicItemsMapping: Record<string, any> = {
    docketNumber: 'Docket Number',
    courtName: 'Name',
    dateFiled: 'Date Filed',
    datePaid: 'Date Paid',
    dateUpdated: 'Date Updated',
    publicRecordType: 'Type',
    responsibility: 'Responsibility',
    expirationDate: 'Estimated month and year that this item will be removed',
  };

  constructor() {
    this.mapper = this.publicItemsMapping;
  }

  ngOnInit(): void {}
}
