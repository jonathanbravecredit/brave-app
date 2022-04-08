import { Component, Input, OnInit } from '@angular/core';
const dayjs = require('dayjs');

@Component({
  selector: 'brave-future-score-card',
  templateUrl: './future-score-card.component.html',
})
export class FutureScoreCardComponent implements OnInit {
  @Input() futureScore: number = 0;
  @Input() dashScore: number | null = 0;
  @Input() dashDelta: number | null = 0;
  @Input() enrolledScore: string | null | undefined = '0';
  @Input() enrolledOn: string | null | undefined;
  scoreReview: string = '';
  pointsDiff: number = 0;
  monthYear: string = '';

  constructor() {}

  ngOnInit(): void {
    this.calculatePointsDiff();
    this.scoreReview = this.getScoreReview();
    this.monthYear = dayjs(this.enrolledOn).format('MMMM YYYY');
  }

  calculatePointsDiff() {
    if (this.enrolledScore) {
      this.pointsDiff = this.futureScore - +this.enrolledScore;
    }
  }

  getScoreReview(): string {
    switch (true) {
      case this.futureScore <= 500:
        return 'Very Poor';
      case this.futureScore <= 600:
        return 'Poor';
      case this.futureScore <= 660:
        return 'Fair';
      case this.futureScore <= 780:
        return 'Good';
      default:
        return 'Excellent';
    }
  }
}
