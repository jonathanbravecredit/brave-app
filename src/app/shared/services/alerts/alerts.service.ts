import { Injectable, ComponentRef } from "@angular/core";
import { BroadcastService } from "../broadcast/broadcast.service";
import { Subscription } from "rxjs";
import { EventKeys } from "../broadcast/broadcast.model";
import * as _ from "lodash";
import { IAlertModel } from "./alerts.model";
import { ModalService } from "../modal/modal.service";
import { FilledClosingAlertComponent } from "../../components/alerts/filled-closing-alert/filled-closing-alert.component";

@Injectable({
  providedIn: "root",
})
export class AlertsService {
  private eventShowSub$: Subscription;
  private eventHideSub$: Subscription;
  alertStack: { [key: string]: ComponentRef<any> }[] = [];

  constructor(private broadcastService: BroadcastService, public modalService: ModalService) {
    _.bindAll(this, ["onShowAlertEvent", "onHideAlertEvent"]);
    this.eventShowSub$ = this.broadcastService.on(EventKeys.SHOWALERT).subscribe(this.onShowAlertEvent);
    this.eventHideSub$ = this.broadcastService.on(EventKeys.HIDEALERT).subscribe(this.onHideAlertEvent);
  }

  onShowAlertEvent<T>(data: string) {
    const { name, position, text, timed, timeout, component } = JSON.parse(data) as IAlertModel;
    let comp = component || FilledClosingAlertComponent;
    let ref = this.modalService.appendModalToBody(comp || FilledClosingAlertComponent);
    this.registerAlert(name, ref);
    this.modalService.bindData(ref, { name, position, text, timed, timeout });
  }

  onHideAlertEvent(data: string) {
    this.unregisterAlert(data);
  }

  registerAlert(alertName: string, ref: ComponentRef<any>) {
    this.alertStack.push({ [alertName]: ref });
  }

  unregisterAlert(alertName: string) {
    this.alertStack = this.alertStack.filter((obj) => {
      if (obj[alertName]) {
        const componentRef: ComponentRef<any> = Object.values(obj)[0];
        this.modalService.removeModalFromBody(componentRef);
      }
      return !obj[alertName];
    });
  }

  unregigisterAllAlerts() {
    this.alertStack = [];
  }

  ngOnDestroy(): void {
    this.eventShowSub$.unsubscribe();
    this.eventHideSub$.unsubscribe();
  }
}
