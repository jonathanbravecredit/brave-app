import { Injectable, OnDestroy } from '@angular/core';
import { IMergeReport, ISubscriber, ITradeLinePartition } from '@shared/interfaces';
import { IDisputePersonalItem, IDisputePublicItem } from '@shared/interfaces/dispute.interfaces';

import { BehaviorSubject, Subscription } from 'rxjs';

import { CreditreportService } from '@shared/services/creditreport/creditreport.service';
import { MergereportToSubscribersPipe } from '@shared/pipes/mergereport-to-subscribers/mergereport-to-subscribers.pipe';
import { StateService } from '@shared/services/state/state.service';
import { MergereportToPersonalitemsPipe } from '@shared/pipes/mergereport-to-personalitems/mergereport-to-personalitems.pipe';
import { MergereportToPublicitemsPipe } from '@shared/pipes/mergereport-to-publicitems/mergereport-to-publicitems.pipe';
import { MergereportToTradelinesPipe } from '@shared/pipes/mergereport-to-tradelines/mergereport-to-tradelines.pipe';
import { IPersonalItemsDetailsConfig } from '@views/dashboard/reports/credit-report/personalitems/components/personalitems-details/interfaces';
import { IPublicItemsDetailsConfig } from '@views/dashboard/reports/credit-report/publicitems/components/publicitems-details/interfaces';
import { ITradelineDetailsConfig } from '@views/dashboard/reports/credit-report/tradelines/components/tradeline-details/interfaces';
import { MergereportToNegativeTradelinesPipe } from '@shared/pipes/mergereport-to-negative-tradelines/mergereport-to-negative-tradelines.pipe';

@Injectable({
  providedIn: 'root',
})
export class AccountService implements OnDestroy {
  acknowledged: boolean = false;
  creditReport$: Subscription;
  tradelines: ITradeLinePartition[] | null = null; //!The other two needed
  publicItems: IPublicItemsDetailsConfig[] | null = null;
  personalItems: IPersonalItemsDetailsConfig[] | null = null;
  subscribers: ISubscriber[] | null = null;
  report: IMergeReport | undefined;

  constructor(
    private creditReportService: CreditreportService,
    private mergereportToNegativeTradelinesPipe: MergereportToNegativeTradelinesPipe,
    private MergereportToPersonalitemsPipe: MergereportToPersonalitemsPipe,
    private MergereportToPublicitemsPipe: MergereportToPublicitemsPipe,
    private mergereportToSubscribers: MergereportToSubscribersPipe,
    private statesvc: StateService,
  ) {
    this.creditReport$ = this.creditReportService.tuReport$.asObservable().subscribe((v) => {
      this.report = v;
    });
    if (this.report) {
      this.tradelines = this.mergereportToNegativeTradelinesPipe.transform(this.report);
      this.personalItems = this.MergereportToPersonalitemsPipe.transform(this.report);
      this.publicItems = this.MergereportToPublicitemsPipe.transform(this.report);
      this.subscribers = this.mergereportToSubscribers.transform(this.report);
    }
    this.acknowledged = this.statesvc.state?.appData.agencies?.transunion?.acknowledgedDisputeTerms || false;
  }

  ngOnDestroy(): void {
    this.creditReport$.unsubscribe()
  }
}
