import { Component, Input, OnInit } from '@angular/core';
import { ICreditCard } from '@shared/components/cards/creditcard-card/interfaces';

@Component({
  selector: 'brave-collection-credit-mix-accounts',
  templateUrl: './collection-credit-mix-accounts.component.html',
  styleUrls: ['./collection-credit-mix-accounts.component.css']
})
export class CollectionCreditMixAccountsComponent implements OnInit {
  @Input() creditCards: ICreditCard[] = []
  constructor() { }

  ngOnInit(): void {
  }

}
