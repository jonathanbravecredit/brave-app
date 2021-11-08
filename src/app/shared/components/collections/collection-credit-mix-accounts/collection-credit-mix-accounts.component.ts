import { Component, Input, OnInit } from '@angular/core';
import { ICreditCard, ILoan, IBaseCreditUtilization } from '@views/dashboard/snapshots/credit-utilization/components/credit-utilization-card/interfaces';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';

type TFinantialMechanismCollectionType = 'credit' | 'loan' | 'closed';

@Component({
  selector: 'brave-collection-credit-mix-accounts',
  templateUrl: './collection-credit-mix-accounts.component.html',
  styleUrls: ['./collection-credit-mix-accounts.component.css']
})
export class CollectionCreditMixAccountsComponent implements OnInit {
  @Input() creditCards: ICreditCard[] = [];
  @Input() loans: ILoan[] = [];
  @Input() closedAccounts: IBaseCreditUtilization[] = [];
  private isCreditCardCollectionOpen = new BehaviorSubject(false);
  private isClosedAccountsCollectionOpen = new BehaviorSubject(false);
  private isLoanCollectionOpen = new BehaviorSubject(false);
  isCreditCardCollectionOpen$ = this.isCreditCardCollectionOpen.asObservable();
  isLoanCollectionOpen$ = this.isLoanCollectionOpen.asObservable();
  isClosedAccountsCollectionOpen$ = this.isClosedAccountsCollectionOpen.asObservable();

  constructor() { }

  ngOnInit(): void {
  }

  switch(collectionType: TFinantialMechanismCollectionType): void {
    const collection = this.getCollectionByType(collectionType);
    collection.next(!collection.value);
  }

  private getCollectionByType(collectionType: TFinantialMechanismCollectionType): BehaviorSubject<boolean> {
    const collectionMap = {
      ['credit']: this.isCreditCardCollectionOpen,
      ['loan']: this.isLoanCollectionOpen,
      ['closed']: this.isClosedAccountsCollectionOpen
    }

    return collectionMap[collectionType];
  }

  isCollectionOpen(collectionType: TFinantialMechanismCollectionType): boolean {
    return this.getCollectionByType(collectionType).value;
  }


}
