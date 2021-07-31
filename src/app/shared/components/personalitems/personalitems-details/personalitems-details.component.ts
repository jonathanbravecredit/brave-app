import { Component, Input, OnInit } from '@angular/core';
import { IPersonalItemsDetailsConfig } from '@shared/components/personalitems/personalitems-details/interfaces';

@Component({
  selector: 'brave-personalitems-details',
  templateUrl: './personalitems-details.component.html',
})
export class PersonalitemsDetailsComponent implements OnInit {
  @Input() config: IPersonalItemsDetailsConfig | undefined;
  constructor() {}

  ngOnInit(): void {}
}
