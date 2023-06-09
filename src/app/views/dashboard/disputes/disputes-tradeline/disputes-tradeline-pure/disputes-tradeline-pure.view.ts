import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ITradeLinePartition } from '@shared/interfaces/merge-report.interface';
import { IDisputeTradelineItem } from '@shared/interfaces/dispute.interfaces';
import { disputeViewState } from '@views/dashboard/disputes/components/dispute-base/dispute-base.component';
import { IDisputeProcessResult } from '@views/dashboard/disputes/components/dispute-base/interfaces';
import {
  DEFAULT_TRADELINE_DISPUTE_PROCESS_REASONS,
  DISPUTE_REASONS_INACCURATE,
  DISPUTE_REASONS_NOTMINE,
} from '@views/dashboard/disputes/disputes-tradeline/disputes-tradeline-pure/constants';
import { ITradelineDetailsConfig } from '@views/dashboard/reports/credit-report/tradelines/components/tradeline-details/interfaces';

type viewDisplay = 'sent' | 'not-sent';

export interface IProcessDisputeTradelineResult {
  result: IDisputeProcessResult;
  tradeline: ITradeLinePartition | undefined;
}

@Component({
  selector: 'brave-disputes-tradeline-pure-view',
  templateUrl: './disputes-tradeline-pure.view.html',
})
export class DisputesTradelinePureView {
  @Input() viewDisplay: viewDisplay = 'not-sent';
  @Input() disputeViewState: disputeViewState = 'select';
  @Input() dispute: ITradelineDetailsConfig | null = null;
  @Output() processResult: EventEmitter<IProcessDisputeTradelineResult> = new EventEmitter();

  reasons = DEFAULT_TRADELINE_DISPUTE_PROCESS_REASONS;
  pageOne = DISPUTE_REASONS_NOTMINE;
  pageTwo = DISPUTE_REASONS_INACCURATE;
  constructor() {}
}
