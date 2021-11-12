import { Component, Input, OnInit } from '@angular/core';
import { ICreditCard, ILoan, IBaseCreditUtilization } from '@views/dashboard/snapshots/credit-utilization/components/credit-utilization-card/interfaces';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'brave-credit-mix-pure',
  templateUrl: './credit-mix-pure.view.html',
  styleUrls: ['./credit-mix-pure.view.css']
})
export class CreditMixPureView implements OnInit {
  private isRecommendationOpen = new BehaviorSubject(true);
  isRecommendationOpen$ = this.isRecommendationOpen.asObservable();
  @Input() creditCards: ICreditCard[] = [];
  @Input() loans: ILoan[] = [];
  @Input() closedAccounts: IBaseCreditUtilization[] = [];

  constructor() { }

  ngOnInit(): void {
  }

  switchRecommendation(): void {
    const isRecommendationOpen = this.isRecommendationOpen.value;
    this.isRecommendationOpen.next(!isRecommendationOpen)
  }
}
