import { Component, Input, OnInit } from '@angular/core';
import { ICreditCard, ILoan } from '@shared/components/cards/finantial-mechanism-card/interfaces';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';

@Component({
  selector: 'brave-collection-credit-mix-accounts',
  templateUrl: './collection-credit-mix-accounts.component.html',
  styleUrls: ['./collection-credit-mix-accounts.component.css']
})
export class CollectionCreditMixAccountsComponent implements OnInit {
  @Input() creditCards: ICreditCard[] = [];
  @Input() loans: ILoan[] = [];
  private isCreditCardCollectionOpen = new BehaviorSubject(false);
  private isLoanCollectionOpen = new BehaviorSubject(false);
  isCreditCardCollectionOpen$ = this.isCreditCardCollectionOpen.asObservable();
  isLoanCollectionOpen$ = this.isLoanCollectionOpen.asObservable();

  constructor() { }

  ngOnInit(): void {
  }

  switch(collectionType: 'credit' | 'loan'): void {
    const collection = this.getCollectionByType(collectionType);
    collection.next(!collection.value);
  }

  private getCollectionByType(collectionType: 'credit' | 'loan'): BehaviorSubject<boolean> {
    return collectionType === 'credit' ? this.isCreditCardCollectionOpen : this.isLoanCollectionOpen;
  }

  isCollectionOpen(collectionType: 'credit' | 'loan'): boolean {
    return this.getCollectionByType(collectionType).value;
  }
}
