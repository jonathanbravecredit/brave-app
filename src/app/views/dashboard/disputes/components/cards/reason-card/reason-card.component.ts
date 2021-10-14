import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';
import { REASON_CARD_CONTENT } from '@views/dashboard/disputes/components/cards/reason-card/constants';

@Component({
  selector: 'brave-reason-card',
  templateUrl: './reason-card.component.html',
})
export class ReasonCardComponent implements OnInit {
  // Allows the user to write the reason of the selection of the current card.
  @Input() allowInput = false;
  // toggles the text area open...can allow user input but still not show it
  @Input() showInput = false;
  // actuall user input value
  @Input() input: string = '';
  // Text that the card will hold inside.
  @Input() label = '';
  // If the card is it will be selected
  @Input() selected = false;

  @Output() toggleClick: EventEmitter<void> = new EventEmitter();
  @Output() textChange: EventEmitter<string> = new EventEmitter();

  confirmed: boolean = false;
  content = REASON_CARD_CONTENT;

  constructor() {}

  ngOnInit(): void {}

  // requestClick(): void {
  //   this.allowInput ? (!this.confirmed ? this.confirmationModal?.open() : this.clicked.emit()) : this.clicked.emit();
  // }
}
