import { Injectable, OnDestroy } from '@angular/core';
import { Store } from '@ngxs/store';
import { ITradeLinePartition } from '@shared/interfaces/merge-report.interface';
import { TransunionService } from '@shared/services/transunion/transunion.service';
import { IProcessDisputeTradelineResult } from '@views/disputes-tradeline/disputes-tradeline-pure/disputes-tradeline-pure.view';
import { BehaviorSubject, Subscription } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DisputeService implements OnDestroy {
  tradeline: ITradeLinePartition | undefined;
  tradeline$: BehaviorSubject<ITradeLinePartition> = new BehaviorSubject({} as ITradeLinePartition);
  tradelineSub$: Subscription;
  disputeStack: IProcessDisputeTradelineResult[] = [];

  constructor(private store: Store, private transunion: TransunionService) {
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

  pushDispute(item: IProcessDisputeTradelineResult): void {
    this.disputeStack = [...this.disputeStack, item];
  }

  popDispute(): IProcessDisputeTradelineResult | undefined {
    const item = this.disputeStack.pop();
    this.disputeStack = [...this.disputeStack];
    return item;
  }
  clearDisputes(): void {
    this.disputeStack = [];
  }

  async sendStartDispute(): Promise<string | undefined> {
    // TODO need to save the dispute state and in DB at some point
    const state = this.store.snapshot()?.appData;
    try {
      return await this.transunion.sendStartDispute(state, this.disputeStack);
    } catch (err) {
      throw new Error(`Error in disputeService:sendStartDispute=${err}`);
    }
  }
}
