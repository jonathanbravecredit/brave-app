import { Component, Input, OnInit } from "@angular/core";

@Component({
  selector: "brave-credit-mix-icons",
  templateUrl: "./credit-mix-icons.component.html",
})
export class CreditMixIconsComponent implements OnInit {
  @Input() hasCreditCards: boolean | undefined = false;
  @Input() hasStudentLoans: boolean | undefined = true;
  @Input() hasAutoLoans: boolean | undefined = false;
  @Input() hasMortgages: boolean | undefined = true;

  constructor() {}

  ngOnInit(): void {}
}
