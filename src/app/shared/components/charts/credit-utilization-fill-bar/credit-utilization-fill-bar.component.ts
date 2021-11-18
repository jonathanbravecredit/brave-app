import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'brave-credit-utilization-fill-bar',
  templateUrl: './credit-utilization-fill-bar.component.html'
})
export class CreditUtilizationFillBarComponent implements OnInit {

  @Input() creditType: string | undefined;
  @Input() maxCreditAmount: string | number | undefined;
  @Input() currentBalance: string | number | undefined;
  utilPercentage: string | undefined;
  isLoan: boolean = false

  constructor() { }

  ngOnInit(): void {
    this.isLoan = this.creditType === 'c' || this.creditType === 'i' || this.creditType === 'm'

    console.log(this.maxCreditAmount)

    this.utilPercentage = `${Math.floor(( +this.currentBalance! / +this.maxCreditAmount!) * 100)}%`
  }

}
