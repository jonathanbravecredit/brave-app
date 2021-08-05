import { Component, Input, OnInit } from '@angular/core';
import { IPersonalItemsDetailsTable } from '@views/dashboard/reports/credit-report/personalitems/personalitems-details/interfaces';

@Component({
  selector: 'brave-personalitems-details',
  templateUrl: './personalitems-details.component.html',
})
export class PersonalitemsDetailsComponent implements OnInit {
  @Input() config: IPersonalItemsDetailsTable | undefined;
  constructor() {}

  ngOnInit(): void {}
}
