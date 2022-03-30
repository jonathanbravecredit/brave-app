import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { CreditReportSelectors, CreditReportStateModel } from '@store/credit-report';

@Component({
  selector: 'brave-disputes-reconfirm',
  templateUrl: './disputes-reconfirm.view.html',
})
export class DisputesReconfirmView {
  report$: Observable<CreditReportStateModel> = this.store.select(CreditReportSelectors.getCreditReport);

  constructor(private store: Store, public route: ActivatedRoute) {}
}
