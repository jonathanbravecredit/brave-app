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
  @Input() openClosed: string | undefined;
  @Input() creditLimit: string | number | undefined;
  utilPercentage: number | undefined;
  isLoan: boolean = false;
  isOpen: boolean = false;

  constructor() {}

  ngOnInit(): void {
    this.isLoan =
      this.creditType?.toLowerCase() === "c" ||
      this.creditType?.toLowerCase() === "i" ||
      this.creditType?.toLowerCase() === "m";

    this.isOpen = this.openClosed?.toLowerCase() === "o";

    if (this.isLoan) {
      if (this.highestBalance === 0) {
        this.utilPercentage = 0;
      } else {
        this.utilPercentage =
          (+this.highestBalance! - +this.currentBalance!) /
          +this.highestBalance!;
      }
    } else {
      const creditLimit = +(this.creditLimit || 0);
      if (!creditLimit || `${creditLimit}` === "NaN") {
        this.utilPercentage = 0;
      } else {
        this.utilPercentage = +this.currentBalance! / +this.creditLimit!;
      }
    }
  }

  get barWidth(): string {
    if (this.isLoan) {
      return `${(1 - (this.utilPercentage || 0)) * 100}%`;
    } else {
      return `${(this.utilPercentage || 0) * 100}%`;
    }
  }

  get barPercent(): number {
    if (this.isLoan) {
      return 1 - (this.utilPercentage || 0);
    } else {
      return this.utilPercentage || 0;
    }
  }
}
