import { Component, OnDestroy, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { ICreditBureau } from "@shared/interfaces/credit-bureau.interface";
import { IDispute } from "@shared/interfaces/disputes";
import { ITrueLinkCreditReportType } from "@shared/interfaces/merge-report.interface";
import { DisputeService } from "@shared/services/dispute/dispute.service";
import { TransunionQueries } from "@shared/utils/transunion/queries/transunion-queries";
import { Subscription } from "rxjs";
import {
  ITradelineCreditBureauConfig,
  IPersonalInfoCreditBureauConfig,
  IPublicRecordCreditBureauConfig,
} from "../dispute-findings-pure/interfaces";
import { CreditBureauFindingsType } from "../../../../../shared/utils/transunion/constants";
import {
  ILineItem,
  ITrade,
} from "../../../../../shared/interfaces/credit-bureau.interface";
import { TransunionUtil as tu } from "@shared/utils/transunion/transunion";
import { ITradeLinePartition } from "../../../../../shared/interfaces/merge-report.interface";
export interface IDisputeToDisputeFindingOutput {
  status: string;
  reportCreatedAt: string;
  totalDisputedItems?: string;
  estimatedCompletionDate?: string;
  fileIdentificationNumber: string;
  creditBureau?: ICreditBureau;
  investigationResults?: ITrueLinkCreditReportType;
}

@Component({
  selector: "brave-dispute-findings",
  templateUrl: "./dispute-findings.view.html",
})
export class DisputeFindingsView implements OnInit, OnDestroy {
  currentDispute: IDispute | null = null;
  disputeSub$: Subscription;
  routeSub$: Subscription | undefined;
  stateOfResidence: string = "";

  tradelineAccountConfig: ITradelineCreditBureauConfig[] = [];
  publicRecordConfig: IPublicRecordCreditBureauConfig[] = [];
  personalInfoConfig: IPersonalInfoCreditBureauConfig[] = [];
  findings: IDisputeToDisputeFindingOutput | undefined;

  investigationResults:
    | { trueLinkCreditReportType: ITrueLinkCreditReportType | undefined }
    | undefined;
  creditBureauResults: { creditBureau: ICreditBureau | undefined } | undefined;
  tuQuery = TransunionQueries;

  constructor(
    public route: ActivatedRoute,
    public disputeService: DisputeService
  ) {
    this.routeSub$ = this.route.data.subscribe((resp) => {
      const { record: irRecord = "" } = resp.reports.investigationResults;
      const { record: cbRecord = "" } = resp.reports.creditBureauResults;
      this.investigationResults = JSON.parse(irRecord);
      this.creditBureauResults = JSON.parse(cbRecord);
    });
    this.disputeSub$ = this.disputeService.currentDispute$.subscribe((r) => {
      this.currentDispute = r;
    });
    this.tradelineAccountConfig =
      disputeService.transformCreditbureauToTradelineDetails(
        this.creditBureauResults?.creditBureau,
        this.investigationResults?.trueLinkCreditReportType
      );
    this.publicRecordConfig =
      disputeService.transformCreditbureauToPublicItemDetails(
        this.creditBureauResults?.creditBureau,
        this.investigationResults?.trueLinkCreditReportType
      );
    this.personalInfoConfig =
      disputeService.transformCreditbureauToPersonalItemDetails(
        this.creditBureauResults?.creditBureau,
        this.investigationResults?.trueLinkCreditReportType
      );
    this.findings = disputeService.transformDisputeToFindings(
      this.currentDispute,
      this.creditBureauResults?.creditBureau
    );
  }

  async ngOnInit(): Promise<void> {
    this.stateOfResidence = this.disputeService.getUserStateOfResidence();
  }

  ngOnDestroy(): void {
    if (this.routeSub$) this.routeSub$.unsubscribe();
  }
}
