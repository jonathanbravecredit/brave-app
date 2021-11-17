import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { BaseModalComponent } from '../base-modal/base-modal.component';

@Component({
  selector: 'brave-confirmation-modal',
  templateUrl: './confirmation-modal.component.html',
})
export class ConfirmationModalComponent extends BaseModalComponent implements OnInit {
  @Output() confirmed: EventEmitter<boolean> = new EventEmitter();
  @Input() btnTextConfirm: string = 'Confirm';
  @Input() btnTextCancel: string = 'Cancel';
  @ViewChild(BaseModalComponent) baseModal: BaseModalComponent | undefined;

  confirmed$ = new BehaviorSubject<boolean>(false);

  constructor() {
    super();
  }

  ngOnInit(): void {}

  confirm(val: boolean): void {
    this.confirmed$.next(val);
    this.confirmed.emit(val);
    this.baseModal?.close();
  }

  open(): void {
    this.baseModal?.open();
  }
}
