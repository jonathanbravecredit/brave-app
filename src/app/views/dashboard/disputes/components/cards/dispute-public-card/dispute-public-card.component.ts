import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IPublicItemsDetailsConfig } from '@views/dashboard/reports/credit-report/publicitems/components/publicitems-details/interfaces';

@Component({
  selector: 'brave-dispute-public-card',
  templateUrl: './dispute-public-card.component.html',
})
export class DisputePublicCardComponent implements OnInit {
  @Input() publicItem: IPublicItemsDetailsConfig = {} as IPublicItemsDetailsConfig; // bring the unmapped public item foreward
  constructor() {}

  ngOnInit(): void {}
}
