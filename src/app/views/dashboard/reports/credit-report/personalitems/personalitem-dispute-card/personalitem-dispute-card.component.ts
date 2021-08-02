import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'brave-personalitem-dispute-card',
  templateUrl: './personalitem-dispute-card.component.html',
})
export class PersonalitemDisputeCardComponent implements OnInit {
  @Input() icon: string = 'perm_identity';
  @Input() fieldName: string = '';
  @Input() fieldValues: string = '--';

  @Output() disputeClick: EventEmitter<void> = new EventEmitter();
  constructor() {}

  ngOnInit(): void {}
}
