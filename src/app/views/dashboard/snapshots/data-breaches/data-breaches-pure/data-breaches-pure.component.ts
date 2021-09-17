import { Component, Input, OnInit } from '@angular/core';
import { IBreachCard } from '@views/dashboard/snapshots/data-breaches/components/data-breach-card/interfaces';

@Component({
  selector: 'brave-data-breaches-pure',
  templateUrl: './data-breaches-pure.component.html',
})
export class DataBreachesPureComponent implements OnInit {
  @Input() breachCards: IBreachCard[] = [];
  constructor() {}

  ngOnInit(): void {}
}
