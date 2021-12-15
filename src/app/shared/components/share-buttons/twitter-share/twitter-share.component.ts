import { Component, Input, OnInit } from "@angular/core";

@Component({
  selector: "brave-twitter-share",
  templateUrl: "./twitter-share.component.html",
})
export class TwitterShareComponent implements OnInit {
  @Input() referralCode: string | undefined;
  fullReferralLink: string | undefined;

  constructor() {}

  ngOnInit(): void {
    this.fullReferralLink =
      "https://twitter.com/intent/tweet?text=Haven’t%20checked%20your%20credit%20score%20in%20a%20while?%20Check%20it%20through%20Brave%20Credit%20and%20get%20$5!%20Plus,%20get%20$5%20for%20anyone%20else%20you%20refer!%20Then,%20dispute%20any%20issues%20you%20see%20for%20free,%20and%20start%20growing%20your%20score!%20%23BraveCredit%20https%3A%2F%2Fapp.brave.credit%2Fauth%2Fsignup%3FreferralCode%3D" +
      this.referralCode;
  }
}
