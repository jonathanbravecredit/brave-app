import { Component, Input, OnInit } from '@angular/core';
import { ICreditBureau } from '@shared/interfaces/credit-bureau.interface';
import {
  IPersonalInfoCreditBureauConfig,
  IPublicRecordCreditBureauConfig,
  ITradelineCreditBureauConfig,
} from './interfaces';

@Component({
  selector: 'brave-dispute-findings-pure',
  templateUrl: './dispute-findings-pure.view.html',
})
export class DisputeFindingsPureView implements OnInit {
  // TODO these configs and results will have to allow for arrays
  @Input() reportCreatedAt: string = '';
  @Input() fileIdentificationNumber: string = '';
  @Input() resultCode: string = '';
  @Input() creditBureau: ICreditBureau | undefined;
  @Input() tradelineAccountConfig: ITradelineCreditBureauConfig[] = [];
  @Input() publicRecordConfig: IPublicRecordCreditBureauConfig[] = [];
  @Input() personalInfoConfig: IPersonalInfoCreditBureauConfig[] = [];
  @Input() type: 'tradeline' | 'public-record' | 'personal-info' = 'tradeline';
  constructor() {}

  ngOnInit(): void {}
}
