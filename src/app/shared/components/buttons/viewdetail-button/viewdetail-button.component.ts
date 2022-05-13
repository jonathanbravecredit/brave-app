import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { Subject } from "rxjs";
import { BroadcastService } from "../../../services/broadcast/broadcast.service";
import { EventKeys } from "../../../services/broadcast/broadcast.model";

@Component({
  selector: "brave-viewdetail-button",
  templateUrl: "./viewdetail-button.component.html",
})
export class ViewdetailButtonComponent implements OnInit {
  @Input() size = "";
  @Input() orientation:
    | "horizontal-left"
    | "horizontal-right"
    | "vertical-top"
    | "vertical-bottom"
    | "static" = "vertical-bottom";
  @Input() route: string = "";
  @Output() viewDetailClick: EventEmitter<void> = new EventEmitter();
  open: boolean = false;
  open$: Subject<boolean> = new Subject();

  constructor(public broadcastService: BroadcastService) {}

  ngOnInit(): void {}

  navigate() {
    if (this.orientation === "static") {
      this.broadcastService.broadcast(EventKeys.NAVIGATION, this.route);
    }
  }
}
