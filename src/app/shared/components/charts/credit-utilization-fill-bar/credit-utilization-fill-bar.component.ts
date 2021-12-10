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
  utilPercentage: number | undefined;
  isLoan: boolean = false;
  isOpen: boolean = false;

  constructor() {}

  ngOnInit(): void {
    this.isLoan =
      this.creditType === "c" ||
      this.creditType === "i" ||
      this.creditType === "m";

    this.isOpen = this.openClosed?.toLowerCase() === "o";

    if (this.isLoan) {
      this.utilPercentage = ((+this.highestBalance! - +this.currentBalance!) /
          +this.highestBalance!);
    } else {
      this.utilPercentage = (+this.currentBalance! / +this.maxCreditAmount!);
    }
  }

  get barWidth(): string {
    if (this.isLoan) {
      return `${(1 - (this.utilPercentage || 0)) * 100}%`;
    } else {
      return `${this.utilPercentage || 0 * 100}%`;
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
