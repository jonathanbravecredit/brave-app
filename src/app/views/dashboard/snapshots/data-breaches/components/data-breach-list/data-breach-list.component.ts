import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IBreachCard } from '@views/dashboard/snapshots/data-breaches/components/data-breach-card/interfaces';
import { dataBreachListContent } from '@views/dashboard/snapshots/data-breaches/components/data-breach-list/content';

@Component({
  selector: 'brave-data-breach-list',
  templateUrl: './data-breach-list.component.html',
})
export class DataBreachListComponent implements OnInit {
  @Input() cards: IBreachCard[] = [];
  @Output() closeClick: EventEmitter<number> = new EventEmitter();
  content = dataBreachListContent;
  constructor() {}

  ngOnInit(): void {}

  hideCard(idx: number): void {
    this.cards.splice(idx, 1);
    this.cards = [...this.cards];
  }
}
