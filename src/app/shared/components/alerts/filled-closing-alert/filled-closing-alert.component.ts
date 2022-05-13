import { animate, style, transition, trigger } from "@angular/animations";
import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  OnDestroy,
} from "@angular/core";
import { EventKeys } from "@shared/services/broadcast/broadcast.model";
import { AlertPositions } from "../../../services/alerts/alerts.model";
import { BroadcastService } from "../../../services/broadcast/broadcast.service";

export interface IFilledClosingAlertConfig {
  size: string;
  backgroundColor: string;
  color: string;
  alertTitle?: string;
  alertBody: string;
}

const fadeOutTime = 500;

@Component({
  selector: "brave-filled-closing-alert",
  templateUrl: "./filled-closing-alert.component.html",
  animations: [
    trigger("fade", [
      transition("* => void", [animate(fadeOutTime, style({ opacity: 0 }))]),
    ]),
  ],
})
export class FilledClosingAlertComponent implements OnInit {
  @Output() closeClicked: EventEmitter<void> = new EventEmitter();

  @Input() name: string = "";
  @Input() text: string = "";
  @Input() position: AlertPositions = "top-right";
  @Input() timed: boolean = false;
  @Input() timeout: number = 3000;

  @Input() config: IFilledClosingAlertConfig = {
    size: "base",
    backgroundColor: "bg-indigo-800",
    color: "text-white",
    alertTitle: "Alert!",
    alertBody: "Something went wrong. Please try again.",
  };
  @Input() showAlert: boolean = false;

  fade: boolean = false;

  constructor(private broadcaster: BroadcastService) {}

  ngOnInit(): void {
    if (this.timed) {
      setTimeout(() => {
        this.fade = true;
        setTimeout(() => {
          //* This is to wait out the fade animation before destroying
          this.closeClicked.emit();
          this.broadcaster.broadcast(EventKeys.HIDEALERT, this.name);
        }, fadeOutTime);
      }, this.timeout);
    }
  }

  closeClick() {
    this.closeClicked.emit();
    this.broadcaster.broadcast(EventKeys.HIDEALERT, this.name);
  }
}
