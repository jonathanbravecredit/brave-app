import { Component, Input, OnInit } from "@angular/core";
import { ICreditMixTLSummary } from "../../interfaces/credit-mix-calc-obj.interface";

@Component({
  selector: "brave-credit-mix-rating",
  templateUrl: "./credit-mix-rating.component.html",
})
export class CreditMixRatingComponent implements OnInit {
  @Input() tradeLineSummary: ICreditMixTLSummary | undefined;
  @Input() rating: string | undefined = '';
  @Input() ratingColor: string | undefined = '';

  constructor() {}

  ngOnInit(): void {}
}
