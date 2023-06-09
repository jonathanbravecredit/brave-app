import { Component, OnDestroy, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { DisputeStatus } from "@shared/constants/disputes.interface";
import { IDispute } from "@shared/interfaces/disputes";
import { DisputeService } from "@shared/services/dispute/dispute.service";
import { InterstitialService } from "@shared/services/interstitial/interstitial.service";
import { TransunionService } from "@shared/services/transunion/transunion.service";
import { TDisputeEntity } from "@views/dashboard/disputes/components/cards/interfaces";
import { Subscription } from "rxjs";
import { ROUTE_NAMES as routes } from "@shared/routes/routes.names";
import { IDisputesOverview } from "../disputes-overview-initial-pure/disputes-overview-initial-pure.view";
import { IDisputeCurrent } from "../../components/cards/interfaces";
import { TransunionUtil as tu } from "@shared/utils/transunion/transunion";

const enum ParserTypes {
  Tradeline = "tradeline",
  PersonalItem = "personalItem",
  PublicItem = "publicItem",
}

const parsers = {
  [ParserTypes.Tradeline]: tu.mappers.mapTradelineDispute,
  [ParserTypes.PersonalItem]: tu.mappers.mapPersonalDispute,
  [ParserTypes.PublicItem]: tu.mappers.mapPublicDispute,
};

@Component({
  selector: "brave-disputes-overview-initial",
  templateUrl: "./disputes-overview-initial.view.html",
})
export class DisputesOverviewInitialView implements OnInit, OnDestroy {
  routeSub$: Subscription | undefined;
  allDisputes: IDispute[] | undefined;
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private interstitial: InterstitialService,
    private disputeService: DisputeService,
    private transunion: TransunionService
  ) {
    this.routeSub$ = this.route.data.subscribe((resp) => {
      const { allDisputes, currDispute } = resp.disputes;
      this.allDisputes = allDisputes;
    });
  }

  ngOnInit(): void {
    this.interstitial.closeInterstitial();
  }
  ngOnDestroy(): void {
    if (this.routeSub$) this.routeSub$.unsubscribe();
  }

  /**
   * Method to check the status of the results
   * - two states: 1. complete, no results 2. complete, results
   * @param entity
   * @returns
   */
  async onViewDetailsClick(entity: TDisputeEntity): Promise<void> {
    if (!entity.dispute) throw `dispute missing`;
    const dispute: IDispute = entity.dispute;
    const { disputeId } = dispute;
    this.disputeService.currentDispute$.next(dispute);
    const { disputeInvestigationResults: irID, disputeCreditBureau: cbID } = dispute;
    if (dispute.disputeStatus?.toLowerCase() === DisputeStatus.Complete && (!irID || !cbID)) {
      // the results are not saved...can attempt to gather them again
      // TODO need to handle this case...complete but no id's
      const resp = await this.transunion.getInvestigationResults(disputeId);
      const { success, error, data } = resp;
      if (!success) {
        this.router.navigate([routes.root.dashboard.disputes.error.segment], {
          queryParams: {
            code: error?.Code || "197",
          },
        });
      }
    } else if (dispute.disputeStatus?.toLowerCase() === DisputeStatus.Complete) {
      // do I need to set the current dispute
      this.interstitial.openInterstitial();
      this.interstitial.changeMessage("gathering results");
      this.router.navigate([routes.root.dashboard.disputes.findings.segment, irID, cbID]);
    }
  }

  transformDisputesToOverview(): IDisputesOverview {
    const disputes = this.allDisputes;

    const dummy = {
      currentDispute: null,
      hasHistorical: false,
    };

    if (!disputes || !disputes.length || !disputes.filter(Boolean).length) return dummy;
    // go through the dispute input arrays
    const sorted = [...disputes].sort((a, b) => {
      const openedA = new Date(a?.openedOn || 0);
      const openedB = new Date(b?.openedOn || 0);
      return +openedB - +openedA;
    });

    // parse the current dispute
    const dispute = sorted[0];
    const items = dispute ? JSON.parse(dispute.disputeItems) : null;
    const currentDisputeArr =
      items instanceof Array ? this.mapDisputeItem(items[0], dispute) : this.mapDisputeItem(items, dispute);

    // check if historical disputes present
    const historicalDisputeArr = sorted.slice(1);

    return {
      currentDispute: currentDisputeArr,
      hasHistorical: historicalDisputeArr?.length > 0,
    };
  }

  // TODO find better interface than any here...dispute items are stored as JSON string in DB
  private mapDisputeItem(item: any, dispute: IDispute | null | undefined): IDisputeCurrent {
    const cases = [ParserTypes.Tradeline, ParserTypes.PersonalItem, ParserTypes.PublicItem];
    for (let i = 0; i < cases.length; i++) {
      if (item[cases[i]] !== undefined) {
        return parsers[cases[i]](item, dispute);
      }
    }
    return parsers[ParserTypes.Tradeline](item, dispute); // fallback
  }

  onViewHistoricalClick(): void {
    this.router.navigate([routes.root.dashboard.disputes.historical.segment]);
  }
}
