import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'brave-reason-card',
  templateUrl: './reason-card.component.html',
  styleUrls: ['./reason-card.component.css']
})
export class ReasonCardComponent implements OnInit {
  // Allows the user to write the reason of the selection of the current card.
  @Input() allowUserInput = false;
  // If the card is it will be selected
  @Input() isSelected = false;
  // Text that the card will hold inside.
  @Input() text = '';
  // Text that the card will hold inside.
  @Input() userInputDescriptionText = '';
  // Input provided by the user. This is the user's custom "reason".
  customUserInput = '';

  constructor() { }

  ngOnInit(): void {
  }
}
