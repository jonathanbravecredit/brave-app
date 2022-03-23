import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { IMergeReport, ISubscriber, ITradeLinePartition } from '@shared/interfaces';
import { IDisputePersonalItem, IDisputePublicItem, IDisputeTradelineItem } from '@shared/interfaces/dispute.interfaces';
import { DisputeService } from '@shared/services/dispute/dispute.service';
import { InterstitialService } from '@shared/services/interstitial/interstitial.service';
import { DisputeReconfirmFilter } from '@views/dashboard/disputes/disputes-reconfirm/types/dispute-reconfirm-filters';
import { BehaviorSubject, Subscription } from 'rxjs';
import { ROUTE_NAMES as routes } from '@shared/routes/routes.names';
import { TransunionUtil as tu } from '@shared/utils/transunion/transunion';
import { CreditreportService } from '@shared/services/creditreport/creditreport.service';
import { MergereportToNegativeTradelinesPipe } from '@shared/pipes/mergereport-to-negative-tradelines/mergereport-to-negative-tradelines.pipe';
import { MergereportToSubscribersPipe } from '@shared/pipes/mergereport-to-subscribers/mergereport-to-subscribers.pipe';
import { StateService } from '@shared/services/state/state.service';

@Injectable({
  providedIn: 'root',
})
export class AccountService {
  accountType: 'tradeline' | 'personalItem' | 'publicItem' | undefined;
  personalItem$: BehaviorSubject<IDisputePersonalItem | null> = new BehaviorSubject<IDisputePersonalItem | null>(null);
  publicItem$: BehaviorSubject<IDisputePublicItem | null> = new BehaviorSubject<IDisputePublicItem | null>(null);
  acknowledged: boolean = false;
  creditReport$: Subscription;
  tradelines: ITradeLinePartition[] | null = null;
  subscribers: ISubscriber[] | null = null;
  report: IMergeReport | undefined;

  constructor(
    private interstitial: InterstitialService,
    private disputeService: DisputeService,
    private router: Router,
    private creditReportService: CreditreportService,
    private mergereportToNegativeTradelinesPipe: MergereportToNegativeTradelinesPipe,
    private mergereportToSubscribers: MergereportToSubscribersPipe,
    private statesvc: StateService,
  ) {
    this.creditReport$ = this.creditReportService.tuReport$.asObservable().subscribe((v) => {
      this.report = v;
    });
    if (this.report) {
      this.tradelines = this.mergereportToNegativeTradelinesPipe.transform(this.report);
      this.subscribers = this.mergereportToSubscribers.transform(this.report);
    }
    this.acknowledged = this.statesvc.state?.appData.agencies?.transunion?.acknowledgedDisputeTerms || false;
  }

  async onConfirmed(tradeline: ITradeLinePartition): Promise<void> {
    const accountType = tu.queries.report.getTradelineTypeDescription(tradeline);
    this.interstitial.changeMessage('checking eligibility');
    this.interstitial.openInterstitial();
    this.disputeService
      .onUserConfirmed()
      .then((resp) => {
        const { success, error } = resp;
        if (success) {
          const filter: DisputeReconfirmFilter = accountType;
          this.router.navigate([routes.root.dashboard.disputes.reconfirm.full], {
            queryParams: {
              type: filter,
            },
          });
        } else {
          const code = `${error?.Code}`;
          this.handleError(code);
        }
      })
      .catch((err) => {
        this.handleError();
      });
  }

  handleError(code: string = '197'): void {
    this.interstitial.closeInterstitial();
    this.router.navigate([routes.root.dashboard.disputes.error.full], {
      queryParams: {
        code: code,
      },
    });
  }
}
