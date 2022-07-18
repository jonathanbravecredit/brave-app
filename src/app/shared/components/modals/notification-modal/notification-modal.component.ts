import { Component, EventEmitter, Output } from "@angular/core";
import { NOTIFICATION_CONTENT } from "@shared/components/modals/notification-modal/notification-modal.content";
import { EventKeys } from "@shared/services/broadcast/broadcast.model";
import { BroadcastService } from "@shared/services/broadcast/broadcast.service";

@Component({
  selector: "brave-notification-modal",
  templateUrl: "./notification-modal.component.html",
})
export class NotificationModalComponent {
  @Output() closeClicked: EventEmitter<void> = new EventEmitter();
  public content = NOTIFICATION_CONTENT;

  constructor(private broadcast: BroadcastService) {}

  closeClick() {
    this.closeClicked.emit();
    const data = {
      name: "winddown-notification",
    };
    this.broadcast.broadcast(EventKeys.HIDEALERT, JSON.stringify(data));
  }
}
