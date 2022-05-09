import { Component, Input, OnInit } from "@angular/core";
import { IFilledOnlyTextButtonConfig } from "@shared/components/buttons/filled-onlytext-button/filled-onlytext-button.component";
import { CREDIT_MIX_CONTENT } from "../../credit-mix.content";

@Component({
  selector: "brave-credit-mix-card-section",
  templateUrl: "./credit-mix-card-section.component.html",
})
export class CreditMixCardSectionComponent implements OnInit {
  CREDIT_MIX_CONTENT = CREDIT_MIX_CONTENT;

  @Input() title: string | undefined;
  @Input() icon: string | undefined;
  @Input() populated: boolean | undefined = false;
  @Input() populatedText: string | undefined;
  @Input() emptyText: string | undefined;
  @Input() learnMoreLink: string | undefined;
  buttonConfig: IFilledOnlyTextButtonConfig = {
    buttonSize: "lg",
    backgroundColor: "#d9f1f5",
    activeColor: "#d9f1f5",
    color: "#222c9d",
  };

  constructor() {}

  ngOnInit(): void {}
}
