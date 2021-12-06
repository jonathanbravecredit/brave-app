import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'brave-referral-amount-link',
  templateUrl: './referral-amount-link.component.html'
})
export class ReferralAmountLinkComponent implements OnInit {

  @Input() usersReferralLink : string = 'brave.credit/sadfkljasld...'

  constructor() { }

  ngOnInit(): void {
  }

}
