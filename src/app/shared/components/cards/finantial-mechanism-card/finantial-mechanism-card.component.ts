import { AfterViewInit, Component, ViewChild, Input } from '@angular/core';
import { ViewdetailButtonComponent } from '@shared/components/buttons/viewdetail-button/viewdetail-button.component';
import { Observable, of } from 'rxjs';
import { DEFAULT_CREDIT_CARD_STATUS_VALUES as creditCardStatuses } from './constants';
import { FinantialMechanismOwnership, FinantialMechanismStatus } from './enums';
import { TFinantialMechanismEntity, TFinantialMechanismStatus } from './interfaces';

@Component({
  selector: 'brave-finantial-mechanism-card',
  templateUrl: './finantial-mechanism-card.component.html',
})
export class FinantialMechanismCardComponent implements AfterViewInit {
  @ViewChild(ViewdetailButtonComponent)
  viewDetail: ViewdetailButtonComponent | undefined;
  open$: Observable<boolean> = of(false);
  @Input() status: TFinantialMechanismStatus = 'good';
  @Input() finantialMechanism: TFinantialMechanismEntity | undefined;
  @Input() finantialMechanismType: 'credit' | 'credit-utilization' | 'loan' = 'credit';
  
  constructor() {}

  ngAfterViewInit(): void {
    if (this.viewDetail) {
      this.open$ = this.viewDetail.open$.asObservable();
    }
  }

  isTypeCredit(): boolean {
    return this.finantialMechanismType === 'credit' || this.finantialMechanismType === 'credit-utilization';
  }

  isTypeCreditCard(): boolean {
    return this.finantialMechanismType === 'credit';
  }

  getStatusText(creditCardStatus: FinantialMechanismStatus): string {
    return creditCardStatuses[creditCardStatus];
  }

  getOwnershipText(ownershipOfAccount: FinantialMechanismOwnership): string {
    return creditCardStatuses[ownershipOfAccount];
  }
}
