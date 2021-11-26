import { Component, Input, OnInit } from "@angular/core";

@Component({
  selector: "brave-credit-mix-badges",
  templateUrl: "./credit-mix-badges.component.html",
})
export class CreditMixBadgesComponent implements OnInit {
  selectedBadge: string = "good";
  @Input() totalAmountOfLines: number | undefined;

  constructor() {}

  ngOnInit(): void {
    this.calculateSelectedBadge()
  }

  calculateSelectedBadge(): string {
    if (this.totalAmountOfLines) {
      switch (true) {
        case this.totalAmountOfLines <= 1:
          return "poor";
        case this.totalAmountOfLines <= 4:
          return "fair";
        case this.totalAmountOfLines <= 7:
          return "good";
        default:
          return "excellent";
      }
    }
    return ''
  }
}
