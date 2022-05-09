import { Component, Input } from "@angular/core";
import { ViewdetailButtonComponent } from "@shared/components/buttons/viewdetails/viewdetail-button/viewdetail-button.component";

@Component({
  selector: "brave-horizontal-viewdetail-button",
  templateUrl: "./horizontal-viewdetail-button.component.html",
})
export class HorizontalViewdetailButtonComponent extends ViewdetailButtonComponent {
  @Input() side: "left" | "right" = "right";
}
