import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ViewDetailOrientation } from '@shared/components/buttons/viewdetail-button/viewdetail-button.component';
import { IPublicPartition } from '@shared/interfaces';

export type PublicItemCardFieldType = 'string' | 'currency' | 'date';

@Component({
  selector: 'brave-publicitem-card',
  templateUrl: './publicitem-card.component.html',
})
export class PublicitemCardComponent implements OnInit {
  @Input() publicItemType: string = '';
  @Input() firstFieldName: string = '';
  @Input() firstFieldValue: string = '';
  @Input() firstFieldType: PublicItemCardFieldType = 'string';
  @Input() publicItem: IPublicPartition = {} as IPublicPartition; // bring the unmapped public item foreward
  @Input() viewDetailOrientation: ViewDetailOrientation = 'horizontal-right';
  @Output() viewDetailClick: EventEmitter<void> = new EventEmitter();
  constructor() {}

  ngOnInit(): void {}
}
