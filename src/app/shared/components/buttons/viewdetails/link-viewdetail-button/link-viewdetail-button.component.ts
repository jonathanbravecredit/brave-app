import { Component, Input } from "@angular/core";
import { ViewdetailButtonComponent } from "@shared/components/buttons/viewdetails/viewdetail-button/viewdetail-button.component";
import { BroadcastService } from "../../../../services/broadcast/broadcast.service";
import { EventKeys } from "../../../../services/broadcast/broadcast.model";

@Component({
  selector: "brave-link-viewdetail-button",
  templateUrl: "./link-viewdetail-button.component.html",
})
export class LinkViewdetailButtonComponent extends ViewdetailButtonComponent {
  @Input() route: string = "";

  constructor(public broadcastService: BroadcastService) {
    super();
  }

  navigate() {
    this.broadcastService.broadcast(EventKeys.NAVIGATION, this.route);
  }
}
