import { Component, Input, OnInit } from "@angular/core";

@Component({
  selector: "brave-credit-mix-card-section",
  templateUrl: "./credit-mix-card-section.component.html",
})
export class CreditMixCardSectionComponent implements OnInit {
  @Input() title: string | undefined;
  @Input() icon: string | undefined;
  @Input() populated: boolean = false;
  @Input() populatedText: string | undefined;
  @Input() emptyText: string | undefined;
  @Input() learnMoreLink: string | undefined;

  constructor() {}

  ngOnInit(): void {}

  learnMoreButtonClick() {
    // TODO Route to learnMoreLink
  }
}
