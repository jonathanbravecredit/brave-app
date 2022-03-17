import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { IBreachCard } from '@views/dashboard/data-breaches/components/data-breach-card/interfaces';
import { dataBreachListContent } from '@views/dashboard/data-breaches/components/data-breach-list/content';
import { ROUTE_NAMES as routes } from '@shared/routes/routes.names';

@Component({
  selector: 'brave-data-breach-list',
  templateUrl: './data-breach-list.component.html',
})
export class DataBreachListComponent implements OnInit {
  @Input() cards: IBreachCard[] = [];
  @Output() closeClick: EventEmitter<number> = new EventEmitter();
  content = dataBreachListContent;
  unreviewed: IBreachCard[] = [];
  reviewed: IBreachCard[] = [];
  isEmpty: boolean = false;
  constructor(private router: Router) {}

  ngOnInit(): void {
    this.cards.forEach((c) => {
      if (c.reviewed) this.reviewed.push(c);
      if (!c.reviewed) this.unreviewed.push(c);
    });
    this.isEmpty = this.unreviewed.length === 0;
  }

  hideCard(idx: number): void {
    this.closeClick.emit(idx);
    if (this.unreviewed.length === 1) {
      this.unreviewed = [];
      this.isEmpty = true;
    } else {
      this.unreviewed.splice(idx, 1);
      this.unreviewed = [...this.unreviewed];
      this.isEmpty = this.unreviewed.length === 0;
    }
  }

  goToReport(): void {
    this.router.navigate([routes.root.dashboard.report.full]);
  }
}
