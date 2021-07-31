import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IPublicPartition, ITradeLinePartition } from '@shared/interfaces';
import { CreditreportService } from '@shared/services/creditreport/creditreport.service';
import { DisputeService } from '@shared/services/dispute/dispute.service';
import { StateService } from '@shared/services/state/state.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'brave-publicitems',
  templateUrl: './publicitems.view.html',
})
export class PublicitemsView {
  /**
   * Raw tradline partition directly from Merge Report
   */
  publicItem$: Observable<IPublicPartition>;
  /**
   * Flag to indicate that dispute terms have been acknowledged
   */
  _acknowledged: boolean = false;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private statesvc: StateService,
    private disputeService: DisputeService,
    private creditReportServices: CreditreportService,
  ) {
    this.publicItem$ = this.creditReportServices.tuPublicItem$.asObservable();
    this.acknowledged = this.statesvc.state?.appData.agencies?.transunion?.acknowledgedDisputeTerms || false;
  }

  set acknowledged(value: boolean) {
    this._acknowledged = value;
  }
  get acknowledged(): boolean {
    return this._acknowledged;
  }
  /**
   * Sets the current dispute in the service based on the public item clicked
   * - TODO...refactor to be DRY
   * @param publicItem
   * @returns {void}
   */
  async onDisputeClicked(publicItem: IPublicPartition): Promise<void> {
    const id = this.statesvc.state?.appData.id;
    if (!id) throw `publicitems:onDisputeClicked=Missing id:${id}`;
    this.disputeService
      .sendDisputePreflightCheck(id)
      .then((eligible) => {
        console.log('preflightCheckReturn ===> ', eligible);
        if (eligible) {
          this.router.navigate(['../dispute'], { relativeTo: this.route });
        } else {
          // TODO replace with better view to tell them they are ineligible
          this.router.navigate(['/dashboard/report/dispute/publicitem/error']);
        }
      })
      .catch((err) => {
        this.router.navigate(['/dashboard/report/dispute/publicitem/error']);
      });
  }
}
