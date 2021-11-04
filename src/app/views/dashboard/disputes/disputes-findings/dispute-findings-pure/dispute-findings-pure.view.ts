import { Component, Input, OnInit } from '@angular/core';
import { IDisputeToDisputeFindingOutput } from '@shared/pipes/dispute-to-dispute-finding/dispute-to-dispute-finding.pipe';
import { CreditBureauFindingsType } from '@shared/utils/transunion/constants';
import { TransunionUtil } from '@shared/utils/transunion/transunion';
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
  @Input() findings: IDisputeToDisputeFindingOutput | undefined;
  @Input() reportCreatedAt: string = '';
  @Input() fileIdentificationNumber: string = '';
  @Input() tradelineAccountConfig: ITradelineCreditBureauConfig[] = [];
  @Input() publicRecordConfig: IPublicRecordCreditBureauConfig[] = [];
  @Input() personalInfoConfig: IPersonalInfoCreditBureauConfig[] = [];
  // @Input() personalInfoConfig: IPersonalInfoCreditBureauConfig | undefined;
  @Input() stateOfResidence: string = '';

  findingTypes = CreditBureauFindingsType;
  bcMissing = TransunionUtil.bcMissing;

  constructor() {}

  ngOnInit(): void {}
}
