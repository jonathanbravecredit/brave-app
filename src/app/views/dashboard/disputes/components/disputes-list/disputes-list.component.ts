import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { TDisputeEntity } from '@views/dashboard/disputes/components/cards/interfaces';

@Component({
  selector: 'brave-disputes-list',
  templateUrl: './disputes-list.component.html',
  styleUrls: ['./disputes-list.component.css'],
})
export class DisputesListComponent {
  @Input() disputeList: TDisputeEntity[] = [];
  @Input() disputListType: 'current' | 'historical' = 'current';
  @Input() listHeader = '';
  @Input() headerIcon = '';
  @Input() isEmptyMessage = '';
  @Output() viewDetailsClick: EventEmitter<TDisputeEntity> = new EventEmitter();

  constructor() {}
}
