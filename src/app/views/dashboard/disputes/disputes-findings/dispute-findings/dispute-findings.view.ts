import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ICreditBureau } from '@shared/interfaces/credit-bureau.interface';
import { IDispute } from '@shared/interfaces/disputes';
import { ITrueLinkCreditReportType } from '@shared/interfaces/merge-report.interface';
import { DisputeService } from '@shared/services/dispute/dispute.service';
import { TransunionQueries } from '@shared/utils/transunion/queries/transunion-queries';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'brave-dispute-findings',
  templateUrl: './dispute-findings.view.html',
})
export class DisputeFindingsView implements OnInit, OnDestroy {
  dispute$: Observable<IDispute>;
  routeSub$: Subscription | undefined;
  stateOfResidence: string = '';
  investigationResults: { trueLinkCreditReportType: ITrueLinkCreditReportType | undefined } | undefined;
  creditBureauResults: { creditBureau: ICreditBureau | undefined } | undefined;
  tuQuery = TransunionQueries;

  constructor(public route: ActivatedRoute, private disputeService: DisputeService) {
    this.routeSub$ = this.route.data.subscribe((resp) => {
      const { record: irRecord = '' } = resp.reports.investigationResults;
      const { record: cbRecord = '' } = resp.reports.creditBureauResults;
      this.investigationResults = JSON.parse(irRecord);
      this.creditBureauResults = JSON.parse(cbRecord);
    });
    this.dispute$ = this.disputeService.currentDispute$.asObservable();
  }

  async ngOnInit(): Promise<void> {
    this.stateOfResidence = this.disputeService.getUserStateOfResidence();
  }

  ngOnDestroy(): void {
    if (this.routeSub$) this.routeSub$.unsubscribe();
  }
}
