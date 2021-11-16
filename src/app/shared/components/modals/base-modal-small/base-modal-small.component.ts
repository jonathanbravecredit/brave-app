import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

export interface IBaseModalSmallConfig {
  title: string;
  body?: string;
  enableButtonOne?: boolean;
  enableButtonTwo?: boolean;
  actionButtonOneText?: string;
  actionButtonTwoText?: string;
}

@Component({
  selector: 'brave-base-modal-small',
  templateUrl: './base-modal-small.component.html',
})
export class BaseModalSmallComponent implements OnInit {
  @Input() injected: boolean = false;
  @Input() config: IBaseModalSmallConfig = {
    title: 'Message Title',
    body: 'Message Text',
    enableButtonOne: true,
    enableButtonTwo: true,
    actionButtonOneText: 'Cancel',
    actionButtonTwoText: 'Continue',
  };
  @Output() actionOne: EventEmitter<any> = new EventEmitter();
  @Output() actionTwo: EventEmitter<any> = new EventEmitter();
  @Output() closeModalClick: EventEmitter<void> = new EventEmitter();

  @Input()
  public showModal = false;
  constructor() {}

  ngOnInit(): void {}

  toggleModal() {
    this.showModal = !this.showModal;
  }
}
