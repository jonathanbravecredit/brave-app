import { Component, OnInit } from "@angular/core";
import { IBaseModalSmallConfig } from "@shared/components/modals/base-modal-small/base-modal-small.component";

@Component({
  selector: "brave-credit-mix-sub-headers",
  templateUrl: "./credit-mix-sub-headers.component.html",
})
export class CreditMixSubHeadersComponent implements OnInit {
  showModal: boolean = false;
  config: IBaseModalSmallConfig = {
    title: "Why are some accounts missing?",
    body:
      "If you do not see all of your accounts, it may be because the lender doesn’t report that account to TransUnion. Many lenders report payments to only one or two of the major credit bureaus, TransUnion, Equifax, and Experian.",
    subBody:
      "If your account was recently opened, it may be too new to show up on reports. New accounts may take up to 60 days to be reflected on your credit history!",
    enableButtonOne: false,
    enableButtonTwo: false,
    actionButtonOneText: "Cancel",
    actionButtonTwoText: "Continue",
  };

  constructor() {}

  ngOnInit(): void {}

  toggleShowModal() {
    this.showModal = !this.showModal;
  }
}
