import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

export interface IFilledClosingAlertConfig {
  size: string;
  backgroundColor: string;
  color: string;
  alertTitle?: string;
  alertBody: string;
}

@Component({
  selector: 'brave-filled-closing-alert',
  templateUrl: './filled-closing-alert.component.html',
})
export class FilledClosingAlertComponent implements OnInit {
  @Output() closeClicked: EventEmitter<void> = new EventEmitter();
  @Input() config: IFilledClosingAlertConfig = {
    size: 'base',
    backgroundColor: 'bg-indigo-800',
    color: 'text-white',
    alertTitle: 'Alert!',
    alertBody: 'Something went wrong. Please try again.',
  };
  @Input() showAlert: boolean = false;
  constructor() {}
  ngOnInit(): void {}
}
