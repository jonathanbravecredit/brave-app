import { Component } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import { IBorrower } from "@shared/interfaces";
import { CreditreportService } from "@shared/services/creditreport/creditreport.service";
import { DisputeService } from "@shared/services/dispute/dispute.service";
import { StateService } from "@shared/services/state/state.service";
import { DisputeReconfirmFilter } from "@views/dashboard/disputes/disputes-reconfirm/types/dispute-reconfirm-filters";
import { Observable } from "rxjs";
import { ROUTE_NAMES as routes } from "@shared/routes/routes.names";

@Component({
  selector: "brave-personalitems",
  templateUrl: "./personalitems.view.html",
})
export class PersonalitemsView {
  /**
   * Raw tradline partition directly from Merge Report
   */
  personalItem$: Observable<IBorrower>;
  /**
   * Flag to indicate that dispute terms have been acknowledged
   */
  _acknowledged: boolean = false;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private statesvc: StateService,
    private disputeService: DisputeService,
    private creditReportServices: CreditreportService
  ) {
    this.personalItem$ = this.creditReportServices.tuPersonalItem$.asObservable();
    this.acknowledged =
      this.statesvc.state?.appData.agencies?.transunion
        ?.acknowledgedDisputeTerms || false;
  }

  set acknowledged(value: boolean) {
    this._acknowledged = value;
  }
  get acknowledged(): boolean {
    return this._acknowledged;
  }
  /**
   * Sets the current dispute in the service based on the personal item clicked
   * - TODO...refactor to be DRY
   * @returns {void}
   */
  async onDisputeClick(): Promise<void> {
    this.disputeService
      .sendDisputePreflightCheck()
      .then((resp) => {
        const { success, error } = resp;
        if (success) {
          const filter: DisputeReconfirmFilter = "personal";
          this.router.navigate(
            [
              routes.root.children.dashboard.children.disputes.children
                .reconfirm.full,
            ],
            {
              queryParams: {
                type: filter,
              },
            }
          ); // add query param to filter for only personal items
        } else {
          this.router.navigate(
            [
              routes.root.children.dashboard.children.disputes.children.error
                .full,
            ],
            {
              queryParams: {
                code: error?.Code || "197",
              },
            }
          );
        }
      })
      .catch((err) => {
        this.router.navigate(
          [
            routes.root.children.dashboard.children.disputes.children.error
              .full,
          ],
          {
            queryParams: {
              code: "197",
            },
          }
        );
      });
  }
}
