import { Component, Input, OnInit } from '@angular/core';
import { ICreditBureau } from '@shared/interfaces/credit-bureau.interface';
import { ITradelineDetailsConfig } from '@views/dashboard/reports/credit-report/tradelines/tradeline-details/interfaces';
import { IPersonalInfoCreditBureauConfig, IPublicRecordCreditBureauConfig } from './interfaces';

@Component({
  selector: 'brave-dispute-findings-pure',
  templateUrl: './dispute-findings-pure.view.html',
})
export class DisputeFindingsPureView implements OnInit {
  @Input() reportCreatedAt: string = '';
  @Input() fileIdentificationNumber: string = '';
  @Input() resultCode: string = '';
  @Input() creditBureau: ICreditBureau | undefined;
  @Input() tradelineAccountConfig: ITradelineDetailsConfig | undefined;
  @Input() publicRecordConfig: IPublicRecordCreditBureauConfig | undefined;
  @Input() personalInfoConfig: IPersonalInfoCreditBureauConfig | undefined;
  @Input() updatedValues: string[] = [];
  @Input() type: 'tradeline' | 'public-record' | 'personal-info' = 'tradeline';
  constructor() {}

  ngOnInit(): void {}
}
