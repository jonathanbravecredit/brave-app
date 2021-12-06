import { Component, Input, OnInit } from "@angular/core";

@Component({
  selector: "brave-referral-pure",
  templateUrl: "./referral-pure.view.html",
})
export class ReferralDashboardPureView implements OnInit {
  @Input() referredTen: boolean = false;

  constructor() {}

  ngOnInit(): void {}
}
