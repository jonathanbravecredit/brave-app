import { Injectable, OnDestroy } from '@angular/core';
import { IDisputeItem } from '@shared/services/dispute/dispute.interfaces';
import { BehaviorSubject, Subscription } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DisputeService implements OnDestroy {
  dispute: IDisputeItem | undefined;
  dispute$: BehaviorSubject<IDisputeItem> = new BehaviorSubject({} as IDisputeItem);
  disputeSub$: Subscription;

  constructor() {
    this.disputeSub$ = this.dispute$.subscribe((dispute) => {
      this.dispute = dispute;
    });
  }

  ngOnDestroy(): void {
    if (this.disputeSub$) this.disputeSub$.unsubscribe();
  }

  setDisputeItem(dispute: IDisputeItem): void {
    this.dispute = dispute;
    this.dispute$.next(dispute);
  }
}
