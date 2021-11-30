import { Component, Input, OnInit } from '@angular/core';
import { CreditMixService } from '@views/dashboard/snapshots/credit-mix/credit-mix-service/credit-mix-service.service';
import { ICreditMixTLSummary } from '../../interfaces/credit-mix-calc-obj.interface';

@Component({
  selector: 'brave-credit-mix-recommendation',
  templateUrl: './credit-mix-recommendation.component.html',
})
export class CreditMixRecommendationComponent implements OnInit {
  show: boolean = true;
  recommendationText: string = '';
  recommendationSubText: string = '';
  recommendationLink: string = '';
  @Input() tradeLineSum: ICreditMixTLSummary | undefined;

  constructor(private creditMixService: CreditMixService) {}

  ngOnInit(): void {
    this.calculateRecommendationText(this.tradeLineSum);
  }

  closeBox(): void {
    this.show = false;
  }

  calculateRecommendationText = (tradeLineSummary: ICreditMixTLSummary | undefined): undefined => {
    const recs = this.creditMixService.getRecommendationText(tradeLineSummary);
    if (!recs) return;
    this.recommendationLink = recs.link;
    this.recommendationText = recs.text;
    this.recommendationSubText = recs.subtext;
    return;
  };
}
