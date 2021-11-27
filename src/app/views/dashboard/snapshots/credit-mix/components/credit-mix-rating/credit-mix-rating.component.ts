import { Component, Input, OnInit } from "@angular/core";
import { ICreditMixTLSummary } from "@shared/interfaces/credit-mix-tl-summary.interface";
import { calculateRating } from "../../credit-mix-calculate-rating";

@Component({
  selector: "brave-credit-mix-rating",
  templateUrl: "./credit-mix-rating.component.html",
})
export class CreditMixRatingComponent implements OnInit {
  @Input() tradeLineSummary: ICreditMixTLSummary | undefined;

  rating: string = "";
  ratingColor: string = "";

  constructor() {}

  ngOnInit(): void {
    let returnedObj = calculateRating(this.tradeLineSummary);
    this.rating = returnedObj.string;
    this.ratingColor = returnedObj.color;
  }
}
