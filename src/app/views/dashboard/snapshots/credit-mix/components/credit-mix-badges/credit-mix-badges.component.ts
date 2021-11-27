import { Component, Input, OnInit } from "@angular/core";
import { ICreditMixTLSummary } from "@shared/interfaces/credit-mix-tl-summary.interface";
import { calculateRating } from "../../credit-mix-calculate-rating";

@Component({
  selector: "brave-credit-mix-badges",
  templateUrl: "./credit-mix-badges.component.html",
})
export class CreditMixBadgesComponent implements OnInit {
  selectedBadge: string = "good";
  @Input() tradeLineSummary: ICreditMixTLSummary | undefined;

  constructor() {}

  ngOnInit(): void {
    this.selectedBadge = calculateRating(this.tradeLineSummary).string;
  }
}
