import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'brave-credit-utilization-total',
  templateUrl: './credit-utilization-total.component.html',
})
export class CreditUtilizationTotalComponent implements OnInit {
  @Input() usePercentage: string | undefined;

  constructor() { }

  ngOnInit(): void {
  }

}
