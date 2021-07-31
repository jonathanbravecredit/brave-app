import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

export interface IBaseModalSmallConfig {
  openButtonText: string;
  title: string;
  body: string;
  actionButtonOneText: string;
  actionButtonTwoText: string;
}

@Component({
  selector: 'brave-base-modal-small',
  templateUrl: './base-modal-small.component.html',
})
export class BaseModalSmallComponent implements OnInit {
  @Input() config: IBaseModalSmallConfig = {
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
