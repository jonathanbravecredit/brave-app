import { AfterViewInit, Component, ViewChild, Input } from '@angular/core';
import { ViewdetailButtonComponent } from '@shared/components/buttons/viewdetail-button/viewdetail-button.component';
import { Observable, of } from 'rxjs';
import { DEFAULT_CREDIT_CARD_STATUS_VALUES as creditCardStatuses } from './constants';
import { CreditCardOwnership, CreditCardStatus } from './enums';
import { ICreditCard } from './interfaces';

export type Status = 'excellent' | 'good' | 'okay' | 'poor';

@Component({
  selector: 'brave-creditcard-card',
  templateUrl: './creditcard-card.component.html',
})
export class CreditcardCardComponent implements AfterViewInit {
  @ViewChild(ViewdetailButtonComponent)
  viewDetail: ViewdetailButtonComponent | undefined;
  open$: Observable<boolean> = of(false);
  @Input() status: Status = 'good';
  @Input() creditCard: ICreditCard | undefined;
  
  constructor() {}

  ngAfterViewInit(): void {
    if (this.viewDetail) {
      this.open$ = this.viewDetail.open$.asObservable();
    }
  }

  getStatusText(creditCardStatus: CreditCardStatus): string {
    return creditCardStatuses[creditCardStatus];
  }

  getOwnershipText(ownershipOfAccount: CreditCardOwnership): string {
    return creditCardStatuses[ownershipOfAccount];
  }
}
