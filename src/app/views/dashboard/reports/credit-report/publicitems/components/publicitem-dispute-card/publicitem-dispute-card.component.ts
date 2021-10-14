import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IPublicItemsDetailsConfig } from '@views/dashboard/reports/credit-report/publicitems/components/publicitems-details/interfaces';

@Component({
  selector: 'brave-publicitem-dispute-card',
  templateUrl: './publicitem-dispute-card.component.html',
})
export class PublicitemDisputeCardComponent implements OnInit {
  @Input() publicItem: IPublicItemsDetailsConfig = {} as IPublicItemsDetailsConfig; // bring the unmapped public item foreward
  @Output() disputeClick: EventEmitter<void> = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}
}
