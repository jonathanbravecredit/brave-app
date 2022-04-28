import { Component, OnInit } from "@angular/core";
import { REFERRAL_DASHBOARD_CONTENT } from "../../referral-dashboard.content";

@Component({
  selector: "brave-referral-header",
  templateUrl: "./referral-header.component.html",
})
export class ReferralHeaderComponent implements OnInit {
  REFERRAL_DASHBOARD_CONTENT = REFERRAL_DASHBOARD_CONTENT;
  constructor() {}

  ngOnInit(): void {}
}
