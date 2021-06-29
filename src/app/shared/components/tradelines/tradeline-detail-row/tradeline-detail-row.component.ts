import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'brave-tradeline-detail-row',
  templateUrl: './tradeline-detail-row.component.html',
})
export class TradelineDetailRowComponent implements OnInit {
  @Input() label: string | undefined = '';
  @Input() value: number | string | undefined = '';
  constructor() {}

  ngOnInit(): void {}
}
