import { Component, Input, OnInit } from "@angular/core";
import { FindingsConfigurations } from "@shared/pipes/findingsTransformer/findings-transformer.pipe";
import { CreditBureauFindingsType } from "@shared/utils/transunion/constants";
import { TransunionUtil } from "@shared/utils/transunion/transunion";
import { IDisputeToDisputeFindingOutput } from "../dispute-findings/dispute-findings.view";
import {
  IPersonalInfoCreditBureauConfig,
  IPublicRecordCreditBureauConfig,
  ITradelineCreditBureauConfig,
} from "./interfaces";

@Component({
  selector: "brave-dispute-findings-pure",
  templateUrl: "./dispute-findings-pure.view.html",
})
export class DisputeFindingsPureView implements OnInit {
  // TODO these configs and results will have to allow for arrays
  @Input() findings: IDisputeToDisputeFindingOutput | undefined;
  @Input() reportCreatedAt: string = "";
  @Input() fileIdentificationNumber: string = "";
  @Input() tradelineAccountConfig: ITradelineCreditBureauConfig[] = [];
  @Input() publicRecordConfig: IPublicRecordCreditBureauConfig[] = [];
  @Input() personalInfoConfig: IPersonalInfoCreditBureauConfig[] = [];
  // @Input() personalInfoConfig: IPersonalInfoCreditBureauConfig | undefined;
  @Input() stateOfResidence: string = "";

  findingsConfig = FindingsConfigurations;
  findingTypes = CreditBureauFindingsType;
  bcMissing = TransunionUtil.bcMissing;

  constructor() {}

  ngOnInit(): void {}
}
