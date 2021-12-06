import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'brave-referral-banner',
  templateUrl: './referral-banner.component.html'
})
export class ReferralBannerComponent implements OnInit {
  @Input() referredTen: boolean = false

  constructor() { }

  ngOnInit(): void {
  }

}
