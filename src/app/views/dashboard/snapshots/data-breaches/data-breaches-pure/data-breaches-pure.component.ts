import { Component, Input, OnInit } from '@angular/core';
import { ITradeLinePartition } from '@shared/interfaces';

@Component({
  selector: 'brave-data-breaches-pure',
  templateUrl: './data-breaches-pure.component.html',
})
export class DataBreachesPureComponent implements OnInit {
  @Input() breachAccounts: ITradeLinePartition[] = [];
  constructor() {}

  ngOnInit(): void {}
}
