import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { IPublicPartition } from '@shared/interfaces';
import { IDisputePublicItem } from '@shared/interfaces/dispute.interfaces';
import { IDisputeProcessResult } from '@views/dashboard/disputes/components/dispute-base/interfaces';
import {
  DEFAULT_TRADELINE_DISPUTE_PROCESS_PUBLIC_RECORDS_REASONS,
  PUBLIC_REASONS_INACCURATE,
  PUBLIC_REASONS_NOTMINE,
} from '@views/dashboard/disputes/disputes-public/disputes-public-pure/constants';

type viewDisplay = 'sent' | 'not-sent';
export interface IProcessDisputePublicResult {
  result: IDisputeProcessResult;
  publicItem: IPublicPartition | undefined;
}

@Component({
  selector: 'brave-disputes-public-pure-view',
  templateUrl: './disputes-public-pure.view.html',
})
export class DisputesPublicPureView implements OnInit {
  @Input() viewDisplay: viewDisplay = 'not-sent';
  @Input() dispute: IDisputePublicItem | undefined;
  @Output() processResult: EventEmitter<IProcessDisputePublicResult> = new EventEmitter();

  reasons = DEFAULT_TRADELINE_DISPUTE_PROCESS_PUBLIC_RECORDS_REASONS;
  pageOne = PUBLIC_REASONS_NOTMINE;
  pageTwo = PUBLIC_REASONS_INACCURATE;

  constructor() {}

  ngOnInit(): void {}
}
