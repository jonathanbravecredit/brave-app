import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
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
  isEmpty: boolean = false;
  constructor(private router: Router) {}

  ngOnInit(): void {
    this.isEmpty = this.cards.length > 0;
  }

  hideCard(idx: number): void {
    this.cards.splice(idx, 1);
    this.cards = [...this.cards];
    this.isEmpty = this.cards.length > 0;
  }

  goToReport(): void {
    this.router.navigate(['/dashboard/report']);
  }
}
