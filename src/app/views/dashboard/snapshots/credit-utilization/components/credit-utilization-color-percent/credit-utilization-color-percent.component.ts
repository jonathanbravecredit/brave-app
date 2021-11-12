import { Component, Input, OnInit } from "@angular/core";

@Component({
  selector: "brave-credit-utilization-color-percent",
  templateUrl: "./credit-utilization-color-percent.component.html",
})
export class CreditUtilizationColorPercentComponent implements OnInit {
  @Input() utilPercent: number | undefined;
  color: string = "";

  constructor() {}

  ngOnInit(): void {
    this.color = this.calculateColor(this.utilPercent!)
  }

  calculateColor(percent: number): string {
    console.log(percent)
    switch (true) {
      case percent <= 9:
        return "#4BD269";
      case percent <= 29:
        return "#BBD904";
      case percent <= 49:
        return "#F59300";
      case percent <= 74:
        return "#F56700";
      default:
        return "#E93C25";
    }
  }
}
