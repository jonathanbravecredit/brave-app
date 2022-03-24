import { Component, Input, OnInit } from '@angular/core';
import { INegativeAccountCardInputs } from '@views/dashboard/negative-account/negative-account-card/interfaces';

@Component({
  selector: 'brave-negative-account-card-header',
  templateUrl: './negative-account-card-header.component.html',
})
export class NegativeAccountCardHeaderComponent implements OnInit {
  @Input() data: INegativeAccountCardInputs | undefined;
  constructor() {}

  ngOnInit(): void {}
}
