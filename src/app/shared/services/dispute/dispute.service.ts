import { Injectable, OnDestroy } from '@angular/core';
import { ITradeLinePartition } from '@shared/interfaces/merge-report.interface';
import { BehaviorSubject, Subscription } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DisputeService implements OnDestroy {
  tradeline: ITradeLinePartition | undefined;
  tradeline$: BehaviorSubject<ITradeLinePartition> = new BehaviorSubject({} as ITradeLinePartition);
  tradelineSub$: Subscription;

  constructor() {
    this.tradelineSub$ = this.tradeline$.subscribe((tradeline) => {
      this.tradeline = tradeline;
    });
  }

  ngOnDestroy(): void {
    if (this.tradelineSub$) this.tradelineSub$.unsubscribe();
  }

  setTradelineItem(tradeline: ITradeLinePartition): void {
    this.tradeline$.next(tradeline);
  }
}
