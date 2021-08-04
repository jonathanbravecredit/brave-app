import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IBorrowerAddress, IEmployer, IBorrowerName } from '@shared/interfaces';

@Component({
  selector: 'brave-personalitem-dispute-card',
  templateUrl: './personalitem-dispute-card.component.html',
})
export class PersonalitemDisputeCardComponent implements OnInit {
  @Input() icon: string = 'perm_identity';
  @Input() fieldName: string = '';
  @Input() fieldValues: string = '--';
  @Input() personalItem: IBorrowerAddress | IEmployer | IBorrowerName | undefined;

  @Output() disputeClick: EventEmitter<IBorrowerAddress | IEmployer | IBorrowerName | undefined> = new EventEmitter();
  constructor() {}

  ngOnInit(): void {}
}
