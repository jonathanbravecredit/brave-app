import { Component, Input } from "@angular/core";
import { ViewdetailButtonComponent } from "@shared/components/buttons/viewdetails/viewdetail-button/viewdetail-button.component";
import { NavigationService } from '../../../../services/navigation/navigation.service';

@Component({
  selector: "brave-link-viewdetail-button",
  templateUrl: "./link-viewdetail-button.component.html",
})
export class LinkViewdetailButtonComponent extends ViewdetailButtonComponent {
  @Input() route: string = "";

  constructor(public navigatorService: Navigator) {
    super();
  }

  navigate() {
    this.navigatorService.
  }
}
