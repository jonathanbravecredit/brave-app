import { Component, Input, OnInit } from "@angular/core";
import { LabelOfSnapshot } from "./snapshot-label.pipe";
export type Status = "excellent" | "good" | "okay" | "poor";
export type TypeOfSnapshot = "date" | "percentage" | "digit" | "tag" | "time";
export type TypeOfDate = "Years" | "Months" | "Days";
export type SnapshotTendency = "up" | "down" | "no-tendency";

export enum SnapshotStatus {
  Critical = "critical",
  SemiCritical = "semicritical",
  Danger = "danger",
  Safe = "safe",
  Default = "default",
  Normal = "normal",
}

@Component({
  selector: "brave-snapshot-display-card",
  templateUrl: "./snapshot-display-card.component.html",
})
export class SnapshotDisplayCardComponent implements OnInit {
  @Input() status: SnapshotStatus | string = SnapshotStatus.Default;
  @Input() title = "";
  @Input() tendency: SnapshotTendency = "no-tendency";
  @Input() typeOfSnapshot: TypeOfSnapshot = "tag";
  @Input() value: string | number = "";
  @Input() typeOfDate: TypeOfDate = "Years";
  @Input() label: LabelOfSnapshot | string = LabelOfSnapshot.NoLabel;
  @Input() preview: boolean = false;
  @Input() rating: string | undefined;
  @Input() color: string | undefined;

  constructor() {}

  ngOnInit(): void {}
}
