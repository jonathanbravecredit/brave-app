import { Component, Input, OnInit } from "@angular/core";

@Component({
  selector: "brave-facebook-share",
  templateUrl: "./facebook-share.component.html",
})
export class FacebookShareComponent implements OnInit {
  @Input() referralCode: string | undefined;
  fullReferralLink: string | undefined;

  constructor() {}

  ngOnInit(): void {
    this.fullReferralLink =
      "https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fapp.brave.credit%2Fauth%2Fsignup%3FreferralCode%3D" +
      this.referralCode +
      "&amp;src=sdkpreparse";
  }
}
