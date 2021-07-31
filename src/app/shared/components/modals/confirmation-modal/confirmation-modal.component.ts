import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { BaseModalComponent } from '../base-modal/base-modal.component';

@Component({
  selector: 'brave-confirmation-modal',
  templateUrl: './confirmation-modal.component.html',
  styleUrls: ['./confirmation-modal.component.css']
})
export class ConfirmationModalComponent extends BaseModalComponent implements OnInit {
  @Output() confirmed: EventEmitter<boolean> = new EventEmitter();
  @Input() btnTextConfirm: string = 'Confirm';
  @Input() btnTextCancel: string = 'Cancel';
  @ViewChild(BaseModalComponent) baseModal: BaseModalComponent | undefined;

  constructor() { super(); }

  ngOnInit(): void {
  }

  confirm(val: boolean): void {
    this.confirmed.emit(val);
    this.baseModal?.close();
  }

  open(): void {
    this.baseModal?.open();
  }
}
