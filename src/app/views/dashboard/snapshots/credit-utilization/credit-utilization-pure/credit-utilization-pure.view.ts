import { Component, Input } from "@angular/core";
import { ITradeLinePartition } from "@shared/interfaces/merge-report.interface";

@Component({
  selector: "brave-credit-utilization-pure",
  templateUrl: "./credit-utilization-pure.view.html",
  styleUrls: ["./credit-utilization-pure.view.css"],
})
export class CreditUtilizationPureView {
  @Input() creditAcounts: ITradeLinePartition[] = [];
  @Input() hasCards!: boolean;
  @Input() debtAmount!: number;
  @Input() totalAmount!: number;
  @Input() utilizationPerc!: number;
}
