import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'brave-credit-utilization-total',
  templateUrl: './credit-utilization-total.component.html',
})
export class CreditUtilizationTotalComponent implements OnInit {
  usePercentage: number = 90

  constructor() { }

  ngOnInit(): void {
  }

}
