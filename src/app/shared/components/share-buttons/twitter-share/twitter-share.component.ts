import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'brave-twitter-share',
  templateUrl: './twitter-share.component.html',
})
export class TwitterShareComponent implements OnInit {
  @Input() referralCode: string | undefined;
  fullReferralLink: string | undefined;

  constructor() {}

  ngOnInit(): void {
    this.fullReferralLink =
      'https://twitter.com/intent/tweet?text=Haven%E2%80%99t%20checked%20your%20credit%20score%20in%20a%20while?%20Check%20it%20through%20%23BraveCredit%20and%20earn!%20Then,%20dispute%20any%20issues%20you%20see%20on%20your%20credit%20report%20for%20free!%20Click%20this%20link%20to%20get%20started%3A%20https%3A%2F%2Fapp.brave.credit%2Fauth%2Fsignup%3FreferralCode%3D' +
      this.referralCode;
  }
}
