import { Component, EventEmitter, OnInit, Input, Output, OnChanges } from '@angular/core';

@Component({
  selector: 'brave-base-modal',
  templateUrl: './base-modal.component.html',
})
export class BaseModalComponent implements OnInit {
  @Output() buttonClicked: EventEmitter<string> = new EventEmitter();
  @Output() closed: EventEmitter<void> = new EventEmitter();
  @Input() hideCloseButton: boolean = false;
  @Input() isModalActive: boolean = false;

  constructor() {}

  ngOnInit(): void {}

  close(): void {
    this.closed.emit();
    this.isModalActive = false;
  }

  open(): void {
    this.isModalActive = true;
  }
}
