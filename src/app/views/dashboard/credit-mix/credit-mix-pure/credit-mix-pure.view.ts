import { Component, Input, OnInit } from '@angular/core';
import { ITradeLinePartition } from '@shared/interfaces';
import { AnalyticClickEvents } from '@shared/services/analytics/analytics/constants';
import {
  ICreditMixTLSummary,
  IRecommendationText,
  TCreditMixCalcObj,
} from '../interfaces/credit-mix-calc-obj.interface';

@Component({
  selector: 'brave-credit-mix-pure',
  templateUrl: './credit-mix-pure.view.html',
  styleUrls: ['./credit-mix-pure.view.css'],
})
export class CreditMixPureView implements OnInit {
  @Input() tradeLineParition: ITradeLinePartition[] | undefined;
  @Input() tradeLineSummary: ICreditMixTLSummary | undefined;
  @Input() recommendations: IRecommendationText | undefined;
  event = AnalyticClickEvents;

  constructor() {}

  ngOnInit(): void {}
}
