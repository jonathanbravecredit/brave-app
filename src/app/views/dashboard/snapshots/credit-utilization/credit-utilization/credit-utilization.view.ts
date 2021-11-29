import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { ITradeLinePartition } from "@shared/interfaces";

@Component({
  selector: "brave-credit-utilization",
  templateUrl: "./credit-utilization.view.html",
})
export class CreditUtilizationView implements OnInit {
  creditReports: ITradeLinePartition[] = [];
  debtAmount: number = 0;
  totalAmount: number = 0;
  utilizationPerc: number = 0;
  hasCards: boolean = false;

  constructor(private route: ActivatedRoute) {
    this.route.data.subscribe((resp: any) => {
      this.creditReports = resp.creditReports;
    });
  }

  ngOnInit(): void {
    this.debtAmount = this.sumDebtAmount(this.creditReports);
    this.totalAmount = this.sumTotalAmount(this.creditReports);
    this.utilizationPerc = this.calcUtilzationPerc(
      this.debtAmount,
      this.totalAmount
    );
    if (this.creditReports.length) {
      this.hasCards = true;
    }
  }

  sumDebtAmount(account: ITradeLinePartition[]): number {
    return account.reduce<number>(
      (acc: number, tradePart: ITradeLinePartition) => {
        console.log(tradePart.Tradeline?.creditorName ,tradePart.accountTypeSymbol)
        if (tradePart.Tradeline?.OpenClosed?.symbol === "C") {
          return acc;
        }
        if (tradePart.accountTypeSymbol?.toLowerCase() !== 'r') {
          return acc;
        }
        if (+tradePart.Tradeline?.GrantedTrade.CreditLimit! <= 0) {
          return acc;
        }
        return acc + +tradePart.Tradeline?.currentBalance!;
      },
      0
    );
  }

  sumTotalAmount(account: ITradeLinePartition[]): number {
    return account.reduce<number>(
      (acc: number, tradePart: ITradeLinePartition) => {
        if (tradePart.Tradeline?.OpenClosed?.symbol === "C") {
          return acc;
        }
        if (tradePart.accountTypeSymbol?.toLowerCase() !== 'r') {
          return acc;
        }
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
