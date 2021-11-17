import { Component, Input, OnInit } from "@angular/core";
import { ScaleType } from "@swimlane/ngx-charts";

@Component({
  selector: "brave-percentage-gauge",
  templateUrl: "./percentage-gauge.component.html",
})
export class PercentageGaugeComponent implements OnInit {
  @Input() percentageNumber: any[] = [];
  view: [number, number] = [250, 175];
  colorScheme: {domain: string[]} = {
    domain: [],
  };

  constructor() {
    Object.assign(this, { single: this.percentageNumber });
  }

  ngOnInit() {
    this.colorScheme.domain.push(this.calcColor(this.percentageNumber[0].value))
  }

  calcColor(percentage: number): string {
    switch (true) {
      case percentage <= 9:
        return "#4BD269";
      case percentage <= 29:
        return "#BBD904";
      case percentage <= 49:
        return "#F59300";
      case percentage <= 74:
        return "#F56700";
      default:
        return "#E93C25";
    }
  }
}
