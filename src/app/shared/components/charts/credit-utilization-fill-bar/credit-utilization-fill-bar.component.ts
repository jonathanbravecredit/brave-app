import { Component, Input, OnInit } from "@angular/core";

@Component({
  selector: "brave-credit-utilization-fill-bar",
  templateUrl: "./credit-utilization-fill-bar.component.html",
})
export class CreditUtilizationFillBarComponent implements OnInit {
  @Input() creditType: string | undefined;
  @Input() maxCreditAmount: string | number | undefined;
  @Input() currentBalance: string | number | undefined;
  @Input() highestBalance: string | number | undefined;
  @Input() openClosed: string | undefined
  utilPercentage: string | undefined;
  isLoan: boolean = false;
  isOpen: boolean = false

  constructor() {}

  ngOnInit(): void {
    this.isLoan =
      this.creditType === "c" ||
      this.creditType === "i" ||
      this.creditType === "m";

    this.isOpen = this.openClosed?.toLowerCase() === 'o'

    if (this.isLoan) {
      this.utilPercentage = `${Math.floor(
        (+this.currentBalance! / +this.highestBalance!) * 100
      )}%`;
    } else {
      this.utilPercentage = `${Math.floor(
        (+this.currentBalance! / +this.maxCreditAmount!) * 100
      )}%`;
    }
  }
}
