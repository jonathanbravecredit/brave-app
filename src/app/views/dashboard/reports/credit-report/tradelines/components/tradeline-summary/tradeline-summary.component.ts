import { Component, Input, OnInit } from "@angular/core";

@Component({
  selector: "brave-tradeline-summary",
  templateUrl: "./tradeline-summary.component.html",
})
export class TradelineSummaryComponent implements OnInit {
  /**
   * Raw payment status from Merge Report
   * @property {string} status
   * @default
   */
  @Input() status: string = "";
  /**
   * Raw creditor name from Merge Report
   * @property {string} creditorName
   * @default
   */
  @Input() creditorName: string = "";
  /**
   * Raw date reported from Merge Report
   * @property {string} dateReported
   * @default
   */
  @Input() dateReported: string = "";
  /**
   * Raw current balance from Merge Report
   * @property {number | string} currentBalance
   * @default
   */
  @Input() currentBalance: number | string = 0;
  /**
   * Raw open/closed status from Merge Report
   * @property {string} openClosed
   * @default
   */
  @Input() openClosed: string = "";

  @Input() payStatusSymbol: string | undefined;

  isOpen: boolean = false;

  get closed(): boolean {
    return !this.isOpen;
  }

  get safe(): boolean {
    return this.isOpen && this.payStatusSymbol?.toLowerCase() === "c";
  }

  get danger(): boolean {
    return (
      this.payStatusSymbol === "1" ||
      this.payStatusSymbol === "2" ||
      this.payStatusSymbol === "3" ||
      this.payStatusSymbol === "4" ||
      this.payStatusSymbol === "7" ||
      this.payStatusSymbol === "8R"
    );
  }

  get critical(): boolean {
    return this.payStatusSymbol === "9";
  }

  get default(): boolean {
    if (!this.closed && !this.safe && !this.danger && !this.critical) {
      return true;
    } else {
      return false;
    }
  }

  constructor() {}

  ngOnInit() {
    this.isOpen = this.openClosed.toLowerCase() === "o";
  }
}
