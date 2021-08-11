import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { INegativeAccountCardInputs } from '@views/dashboard/snapshots/negative-account/negative-account-card/interfaces';

@Component({
  selector: 'brave-negative-account-initial-pure',
  templateUrl: './negative-account-initial-pure.component.html',
})
export class NegativeAccountInitialPureComponent implements OnInit {
  @Input() cards: INegativeAccountCardInputs[] | undefined;
  @Input() acknowledged: boolean = false;
  @Output() confirmed: EventEmitter<INegativeAccountCardInputs> = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}
}
