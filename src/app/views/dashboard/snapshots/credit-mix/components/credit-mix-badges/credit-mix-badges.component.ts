import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'brave-credit-mix-badges',
  templateUrl: './credit-mix-badges.component.html'
})
export class CreditMixBadgesComponent implements OnInit {
  @Input() selectedBadge: string = 'good'

  constructor() { }

  ngOnInit(): void {
  }

}
