import { Component, Input, OnInit } from "@angular/core";
import { ITradeLinePartition } from "@shared/interfaces";
import { ICreditUtilization } from "../components/credit-utilization-card/interfaces";

@Component({
  selector: "brave-credit-utilization-pure",
  templateUrl: "./credit-utilization-pure.view.html",
  styleUrls: ["./credit-utilization-pure.view.css"],
})
export class CreditUtilizationPureView implements OnInit {
  @Input() creditAcounts: ITradeLinePartition[] = [];

  hasCards: boolean = false;

  constructor() {}

  ngOnInit(): void {
    if (this.creditAcounts.length) {
      this.hasCards = true;
    }
  }
}
