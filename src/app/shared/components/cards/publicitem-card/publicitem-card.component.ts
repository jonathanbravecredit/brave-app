import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IPublicPartition } from '@shared/interfaces';

@Component({
  selector: 'brave-publicitem-card',
  templateUrl: './publicitem-card.component.html',
})
export class PublicitemCardComponent implements OnInit {
  @Input() publicItemType: string = '';
  @Input() firstFieldName: string = '';
  @Input() firstFieldValue: string = '';
  @Input() publicItem: IPublicPartition = {} as IPublicPartition; // bring the unmapped public item foreward
  @Output() viewDetailClick: EventEmitter<void> = new EventEmitter();
  constructor() {}

  ngOnInit(): void {}
}
