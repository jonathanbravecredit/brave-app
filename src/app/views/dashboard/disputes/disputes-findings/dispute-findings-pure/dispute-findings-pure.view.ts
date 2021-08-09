import { Component, Input, OnInit } from '@angular/core';
import { ITradelineDetailsConfig } from '@views/dashboard/reports/credit-report/tradelines/tradeline-details/interfaces';
import { IPersonalInfo, IPublicRecord } from './interfaces';

@Component({
  selector: 'brave-dispute-findings-pure',
  templateUrl: './dispute-findings-pure.view.html',
})
export class DisputeFindingsPureView implements OnInit {
  @Input() reportCreatedAt: string = '';
  @Input() fileIdentificationNumber: string = '';
  @Input() resultCode: string = '';
  @Input() tradelineAccountConfig: ITradelineDetailsConfig | undefined;
  @Input() publicRecordConfig: IPublicRecord | undefined;
  @Input() personalInfoConfig: IPersonalInfo | undefined;
  @Input() updatedValues: string[] = [];
  @Input() type: 'tradeline' | 'public-record' | 'personal-info' = 'tradeline';
  constructor() {}

  ngOnInit(): void {}
}
