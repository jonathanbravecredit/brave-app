import { Component, EventEmitter, Input, Output, OnInit, ViewChild } from '@angular/core';
import { ConfirmationModalComponent } from '@shared/components/modals/confirmation-modal/confirmation-modal.component';

@Component({
  selector: 'brave-reason-card',
  templateUrl: './reason-card.component.html',
  styleUrls: ['./reason-card.component.css']
})
export class ReasonCardComponent implements OnInit {
  @ViewChild(ConfirmationModalComponent) confirmationModal: ConfirmationModalComponent | undefined;
  // Allows the user to write the reason of the selection of the current card.
  @Input() allowUserInput = false;
  // If the card is it will be selected
  @Input() isSelected = false;
  // Text that the card will hold inside.
  @Input() text = '';
  // Text that the card will hold inside.
  @Input() userInputDescriptionText: string | undefined = '';
  // Input provided by the user. This is the user's custom "reason".
  customUserInput = '';

  @Output() clicked: EventEmitter<void> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  requestClick(): void {
    if (this.allowUserInput) {
      if (!this.isSelected) {
        this.confirmationModal?.open();
      }
    } else {
      this.clicked.emit();
    }
  }

  modalActionHandler(isConfirmed: boolean): void {
    if (isConfirmed) {
      this.clicked.emit();
    }
  }
}
