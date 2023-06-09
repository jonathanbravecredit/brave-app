import { Component, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ITradeLinePartition } from '@shared/interfaces/merge-report.interface';
import { AnalyticsService } from '@shared/services/analytics/analytics/analytics.service';
import { AnalyticClickEvents } from '@shared/services/analytics/analytics/constants';
import { DisputeService } from '@shared/services/dispute/dispute.service';
import { InterstitialService } from '@shared/services/interstitial/interstitial.service';
import { IProcessDisputeTradelineResult } from '@views/dashboard/disputes/disputes-tradeline/disputes-tradeline-pure/disputes-tradeline-pure.view';
import { Observable } from 'rxjs';
import { ROUTE_NAMES as routes } from '@shared/routes/routes.names';

type viewDisplay = 'sent' | 'not-sent';

@Component({
  selector: 'brave-disputes-tradeline-view',
  templateUrl: './disputes-tradeline.view.html',
})
export class DisputesTradelineView implements OnDestroy {
  viewDisplay: viewDisplay = 'not-sent';
  tradeline$: Observable<ITradeLinePartition>;
  AnalyticClickEvents = AnalyticClickEvents;

  constructor(
    private router: Router,
    public route: ActivatedRoute,
    private interstitial: InterstitialService,
    private disputeService: DisputeService,
    private analytics: AnalyticsService,
  ) {
    this.tradeline$ = this.disputeService.tradeline$.asObservable();
  }

  ngOnDestroy(): void {
    this.disputeService.clearDisputes();
  }

  async onProcessResult(event: IProcessDisputeTradelineResult): Promise<void> {
    // result event has a data property where the reason ids can be pull out and find them in the constants of the tradeline component
    const { result, tradeline } = event;
    if (tradeline === undefined) throw new Error(`Tradeline is missing from dispute`);
    // TODO need to handle submitting multiple items.
    this.disputeService.pushDispute(event);
    if (result.isFinished) {
      try {
        // TODO need to handle the response appropriately now that we are set up with TU
        const { success, error, data } = await this.disputeService.sendStartDispute();
        if (success) {
          this.analytics.fireClickEvent(AnalyticClickEvents.DisputeSucessfullySubmited, {
            google: true,
            brave: true,
          });
          this.viewDisplay = 'sent';
        } else {
          const errorCode = error?.Code;
          this.router.navigate([routes.root.dashboard.disputes.error.full], {
            queryParams: {
              code: errorCode,
            },
          });
        }
      } catch (err) {
        this.interstitial.fetching$.next(false);
        throw new Error(`disputesTradeline:onProcessResult=${err}`);
      }
    }
  }
}
