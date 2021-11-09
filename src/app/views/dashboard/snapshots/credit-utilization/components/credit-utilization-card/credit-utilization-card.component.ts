import { AfterViewInit, Component, ViewChild, Input } from '@angular/core';
import { ViewdetailButtonComponent } from '@shared/components/buttons/viewdetail-button/viewdetail-button.component';
import { Observable, of } from 'rxjs';
import { ICreditUtilization, TCreditUtilizationEntity, TCreditUtilizationStatus } from './interfaces';

@Component({
  selector: 'brave-credit-utilization-card',
  templateUrl: './credit-utilization-card.component.html',
})
export class CreditUtilizationCardComponent implements AfterViewInit {
  @ViewChild(ViewdetailButtonComponent)
  viewDetail: ViewdetailButtonComponent | undefined;
  open$: Observable<boolean> = of(false);
  @Input() status: TCreditUtilizationStatus = 'good';
  @Input() creditUtilization: ICreditUtilization | undefined;
  @Input() creditUtilizationType: 'credit' | 'credit-utilization' | 'loan' = 'credit';

  constructor() {}

  ngAfterViewInit(): void {
    if (this.viewDetail) {
      this.open$ = this.viewDetail.open$.asObservable();
    }
  }

  // getStatusText(creditCardStatus: CreditUtilizationStatus): string {
  //   return creditCardStatuses[creditCardStatus];
  // }

  // getOwnershipText(ownershipOfAccount: CreditUtilizationOwnership): string {
  //   return creditCardStatuses[ownershipOfAccount];
  // }
}
