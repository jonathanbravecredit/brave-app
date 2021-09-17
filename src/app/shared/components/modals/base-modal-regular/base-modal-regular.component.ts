import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

export interface IBaseModalRegularConfig {
  openButtonText: string;
  title: string;
  body: string;
  actionButtonOneText: string;
  actionButtonTwoText: string;
  hideButtons?: boolean;
}

@Component({
  selector: 'brave-base-modal-regular',
  templateUrl: './base-modal-regular.component.html',
})
export class BaseModalRegularComponent implements OnInit {
  @Input() config: IBaseModalRegularConfig = {
    openButtonText: 'Open',
    title: 'Message Title',
    body: 'Message Text',
    actionButtonOneText: 'Cancel',
    actionButtonTwoText: 'Continue',
  };
  @Output() actionOne: EventEmitter<any> = new EventEmitter();
  @Output() actionTwo: EventEmitter<any> = new EventEmitter();

  public showModal = false;
  constructor() {}

  ngOnInit(): void {}

  toggleModal() {
    this.showModal = !this.showModal;
  }
}
