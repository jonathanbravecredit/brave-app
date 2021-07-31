import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { IBorrower, IPublicPartition } from '@shared/interfaces';
import { CreditreportService } from '@shared/services/creditreport/creditreport.service';
import { DisputeService } from '@shared/services/dispute/dispute.service';
import { StateService } from '@shared/services/state/state.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'brave-personalitems',
  templateUrl: './personalitems.view.html',
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
    private creditReportServices: CreditreportService,
  ) {
    this.personalItem$ = this.creditReportServices.tuPersonalItem$.asObservable();
    this.acknowledged = this.statesvc.state?.appData.agencies?.transunion?.acknowledgedDisputeTerms || false;
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
   * @param personalItem
   * @returns {void}
   */
  async onDisputeClicked(personalItem: IBorrower): Promise<void> {
    const id = this.statesvc.state?.appData.id;
    if (!id) throw `personalItem:onDisputeClicked=Missing id:${id}`;
    this.disputeService
      .sendDisputePreflightCheck(id)
      .then((eligible) => {
        console.log('preflightCheckReturn ===> ', eligible);
        if (eligible) {
          this.router.navigate(['../dispute'], { relativeTo: this.route });
        } else {
          // TODO replace with better view to tell them they are ineligible
          this.router.navigate(['/dashboard/report/dispute/personalitem/error']);
        }
      })
      .catch((err) => {
        this.router.navigate(['/dashboard/report/dispute/personalitem/error']);
      });
  }
}
