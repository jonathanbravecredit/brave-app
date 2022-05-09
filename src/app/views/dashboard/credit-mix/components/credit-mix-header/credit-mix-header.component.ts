import { Component } from "@angular/core";
import { CREDIT_MIX_CONTENT } from "../../credit-mix.content";

@Component({
  selector: "brave-credit-mix-header",
  templateUrl: "./credit-mix-header.component.html",
})
export class CreditMixHeaderComponent {
  CREDIT_MIX_CONTENT = CREDIT_MIX_CONTENT;

  constructor() {}
}
