import { Component, Input, OnInit } from '@angular/core';
import { IBreachCard } from '@views/dashboard/snapshots/data-breaches/components/data-breach-card/interfaces';

@Component({
  selector: 'brave-data-breach-list',
  templateUrl: './data-breach-list.component.html',
})
export class DataBreachListComponent implements OnInit {
  @Input() cards: IBreachCard[] = [];
  constructor() {}

  ngOnInit(): void {}
}
