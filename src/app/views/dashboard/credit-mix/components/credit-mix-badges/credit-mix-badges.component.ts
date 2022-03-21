import { Component, Input, OnInit } from "@angular/core";
import { ICreditMixTLSummary } from "../../interfaces/credit-mix-calc-obj.interface";

@Component({
  selector: "brave-credit-mix-badges",
  templateUrl: "./credit-mix-badges.component.html",
})
export class CreditMixBadgesComponent implements OnInit {
  @Input() selectedBadge: string | undefined = "Poor";
  @Input() tradeLineSummary: ICreditMixTLSummary | undefined;

  constructor() {}

  ngOnInit(): void {}
}
