import { Component, Input, OnInit } from '@angular/core';
import { IPersonalItemsDetailsConfig } from '@shared/components/personalitems/personalitems-details/interfaces';
import { IPublicItemsDetailsConfig } from '@shared/components/publicitems/publicitems-details/interfaces';

@Component({
  selector: 'brave-personalitems-details-table',
  templateUrl: './personalitems-details-table.component.html',
})
export class PersonalitemsDetailsTableComponent implements OnInit {
  /**
   * Config parameters with parsed public item data
   * @property config
   */
  @Input() config: IPersonalItemsDetailsConfig | undefined;
  @Input() isDisputePageOne: boolean = false;
  @Input() isDisputePageTwo: boolean = false;
  mapper: Record<string, any>;
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
    expirationDate: 'Estimated month and year that this item will be removed',
  };

  constructor() {
    this.mapper = this.publicItemsMapping;
  }

  ngOnInit(): void {}
}
