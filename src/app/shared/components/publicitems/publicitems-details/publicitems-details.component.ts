import { Component, Input, OnInit } from '@angular/core';
import { IPublicItemsDetailsConfig } from '@shared/components/publicitems/publicitems-details/interfaces';

@Component({
  selector: 'brave-publicitems-details',
  templateUrl: './publicitems-details.component.html',
})
export class PublicitemsDetailsComponent implements OnInit {
  @Input() config: IPublicItemsDetailsConfig | undefined;
  constructor() {}

  ngOnInit(): void {}
}
