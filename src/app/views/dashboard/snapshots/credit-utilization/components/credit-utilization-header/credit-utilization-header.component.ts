import { Component, Input, OnInit } from '@angular/core';
import { INegativeAccountCardInputs } from '@views/dashboard/snapshots/negative-account/negative-account-card/interfaces';

@Component({
  selector: 'brave-credit-utilization-header',
  templateUrl: './credit-utilization-header.component.html',
})
export class CreditUtilizationHeaderComponent implements OnInit {
  @Input() data: INegativeAccountCardInputs | undefined;
  constructor() {}

  ngOnInit(): void {}
}
