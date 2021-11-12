import { Component, Input, OnInit } from "@angular/core";
import { ITradeLinePartition } from "@shared/interfaces/merge-report.interface";

@Component({
  selector: "brave-credit-utilization-pure",
  templateUrl: "./credit-utilization-pure.view.html",
  styleUrls: ["./credit-utilization-pure.view.css"],
})
export class CreditUtilizationPureView implements OnInit {
  @Input() creditAcounts: ITradeLinePartition[] = [];

  hasCards: boolean = false;
  debtAmount: number = 0;
  totalAmount: number = 0;
  utilizationPerc: number = 0;

  constructor() {}

  ngOnInit(): void {
    if (this.creditAcounts.length) {
      this.hasCards = true;
    }
    if (this.hasCards) {
      this.debtAmount = this.sumDebtAmount(this.creditAcounts);
      this.totalAmount = this.sumTotalAmount(this.creditAcounts);
      this.utilizationPerc = this.calcUtilzationPerc(
        this.debtAmount,
        this.totalAmount
      );
    }
  }

  sumDebtAmount(account: ITradeLinePartition[]): number {
    return account.reduce<number>(
      (acc: number, tradePart: ITradeLinePartition) => {
        return acc + +tradePart.Tradeline?.currentBalance!;
      },
      0
    );
  }

  sumTotalAmount(account: ITradeLinePartition[]): number {
    return account.reduce<number>(
      (acc: number, tradePart: ITradeLinePartition) => {
        return acc + +tradePart.Tradeline?.GrantedTrade.CreditLimit!;
      },
      0
    );
  }

  calcUtilzationPerc(debt: number, total: number): number {
    if (total === 0) return 0;
    return Math.floor((debt / total) * 100);
  }
}
