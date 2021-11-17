import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IPersonalItemsDetailsConfig } from '@views/dashboard/reports/credit-report/personalitems/components/personalitems-details/interfaces';

@Component({
  selector: 'brave-dispute-personal-card',
  templateUrl: './dispute-personal-card.component.html',
})
export class DisputePersonalCardComponent implements OnInit {
  @Input() personalItem: IPersonalItemsDetailsConfig | undefined;
  @Output() disputeClick: EventEmitter<void> = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}
}
