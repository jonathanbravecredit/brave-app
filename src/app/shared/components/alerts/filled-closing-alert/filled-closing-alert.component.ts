import { Component, Input, OnInit } from '@angular/core';

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
  @Input() config: IFilledClosingAlertConfig = {
    size: 'base',
    backgroundColor: 'bg-indigo-800',
    color: 'text-white',
    alertTitle: 'Alert!',
    alertBody: 'Something went wrong. Please try again.',
  };
  constructor() {}
  public showAlert: boolean = false;
  ngOnInit(): void {}
}
