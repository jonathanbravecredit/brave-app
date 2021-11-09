import { Component, OnInit } from "@angular/core";
import { ICreditUtilization } from "../components/credit-utilization-card/interfaces";

@Component({
  selector: "brave-credit-utilization-pure",
  templateUrl: "./credit-utilization-pure.view.html",
  styleUrls: ["./credit-utilization-pure.view.css"],
})
export class CreditUtilizationPureView implements OnInit {
  creditUtiliCardMocks: ICreditUtilization[] = [
    {
      accountName: "CITI",
      percetangeUtilization: 80,
      creditBalance: 800,
      creditLimit: 1500,
      open: true,
      status: 'excellent'
    },
    {
      accountName: "CITI",
      percetangeUtilization: 50,
      creditBalance: 1000,
      creditLimit: 2500,
      open: false,
      status: 'poor'
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
