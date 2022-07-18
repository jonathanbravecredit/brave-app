import { ComponentRef, Injectable } from "@angular/core";
import { NotificationModalComponent } from "@shared/components/modals/notification-modal/notification-modal.component";
import { IAlertModel } from "@shared/services/alerts/alerts.model";
import { AlertsService } from "@shared/services/alerts/alerts.service";
import { EventKeys } from "@shared/services/broadcast/broadcast.model";
import { BroadcastService } from "@shared/services/broadcast/broadcast.service";
import _ from "lodash";
import { Subscription } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class NotificationsService {
  private eventShowSub$: Subscription;
  private eventHideSub$: Subscription;

  constructor(private broadcastService: BroadcastService, private alerts: AlertsService) {
    _.bindAll(this, ["onShowNotificationEvent", "onHideNotificationEvent"]);
    this.eventShowSub$ = this.broadcastService.on(EventKeys.SHOWNOTIFICATION).subscribe(this.onShowNotificationEvent);
    this.eventHideSub$ = this.broadcastService.on(EventKeys.HIDENOTIFICATION).subscribe(this.onHideNotificationEvent);
  }

  onShowNotificationEvent(data: string) {
    const { name, position, text, timed, timeout } = JSON.parse(data) as IAlertModel;
    let ref = this.alerts.modalService.appendModalToBody(NotificationModalComponent);
    this.alerts.registerAlert(name, ref);
    this.alerts.modalService.bindData(ref, { name, position, text, timed, timeout });
  }

  onHideNotificationEvent(data: string) {
    this.alerts.onHideAlertEvent(data);
  }

  registerAlert(alertName: string, ref: ComponentRef<any>): void {
    this.alerts.registerAlert(alertName, ref);
  }

  unregisterAlert(alertName: string): void {
    this.alerts.unregisterAlert(alertName);
  }

  unregigisterAllAlerts(): void {
    this.alerts.unregigisterAllAlerts();
  }

  ngOnDestroy(): void {
    this.eventShowSub$.unsubscribe();
    this.eventHideSub$.unsubscribe();
  }
}
