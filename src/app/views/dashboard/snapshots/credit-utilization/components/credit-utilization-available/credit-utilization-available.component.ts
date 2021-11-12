import { Component, Input, OnInit } from "@angular/core";

@Component({
  selector: "brave-credit-utilization-available",
  templateUrl: "./credit-utilization-available.component.html"
})
export class CreditUtilizationAvailableComponent implements OnInit {
  @Input() debtAmount : string | undefined;
  @Input() totalAmount : string | undefined;

  constructor() { }

  ngOnInit(): void {
  }

}
