import { Component, Input, OnInit } from '@angular/core';
import { INegativeAccountCardDetails } from '@views/dashboard/snapshots/negative-account/negative-account-card/interfaces';

@Component({
  selector: 'brave-negative-account-card-detail-table',
  templateUrl: './negative-account-card-detail-table.component.html',
})
export class NegativeAccountCardDetailTableComponent implements OnInit {
  @Input() data: INegativeAccountCardDetails | undefined;
  constructor() {}

  ngOnInit(): void {}
}
