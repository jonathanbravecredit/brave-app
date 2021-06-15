import { Component, Input, OnInit } from '@angular/core';
import { INegativeAccountCardInputs } from '@shared/components/cards/negative-account-card/negative-account-card.component';

@Component({
  selector: 'brave-negative-account-initial-pure',
  templateUrl: './negative-account-initial-pure.component.html',
})
export class NegativeAccountInitialPureComponent implements OnInit {
  @Input() cards: INegativeAccountCardInputs[] | undefined;

  constructor() {}

  ngOnInit(): void {}
}
