import { Component, Input, OnInit } from '@angular/core';
import * as dayjs from 'dayjs';

@Component({
  selector: 'brave-future-score-card',
  templateUrl: './future-score-card.component.html',
})
export class FutureScoreCardComponent implements OnInit {
  @Input() futureScore: number = 0;
  @Input() originalScore: number = 550;
  scoreReview: string = '';
  pointsDiff: number = 0;
  monthYear: string = dayjs().format('MMMM YYYY');

  constructor() {}

  ngOnInit(): void {
    this.calculatePointsDiff();
    this.scoreReview = this.getScoreReview();
  }

  calculatePointsDiff() {
    this.pointsDiff = this.futureScore - this.originalScore;
  }

  getScoreReview(): string {
    switch (this.futureScore) {
      case 622:
        return 'Good';
    }
    return ''; //! wont be needed
  }
}
