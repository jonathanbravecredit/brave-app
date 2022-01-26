import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'brave-credit-utilization-assessment',
  templateUrl: './credit-utilization-assessment.component.html',
})
export class CreditUtilizationAssessmentComponent implements OnInit {
  @Input() utilizationPerc!: number;
  @Input() hasCards!: boolean;
  text: string = '';
  color: string = '';

  constructor() {}

  ngOnInit(): void {
    console.log('HERE', this.hasCards)
    if (this.hasCards) {
      this.text = this.calculateText(this.utilizationPerc);
      this.color = this.calculateColor(this.utilizationPerc)
    }
  }

  calculateText(percent: number): string {
    switch (true) {
      case percent <= 9:
        return 'Excellent';
      case percent <= 29:
        return 'Good';
      case percent <= 49:
        return 'Fair';
      case percent <= 74:
        return 'Poor';
      default:
        return 'Very Poor';
    }
  }

  calculateColor(percent: number): string {
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
