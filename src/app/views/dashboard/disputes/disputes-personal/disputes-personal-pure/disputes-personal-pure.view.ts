import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { IDisputePersonalItem } from '@shared/interfaces/dispute.interfaces';
import { IDisputeReasonCard } from '@views/dashboard/disputes/components/cards/reason-card/interfaces';
import { DisputeBaseComponent } from '@views/dashboard/disputes/components/dispute-base/dispute-base.component';
import { IDisputeProcessResult } from '@views/dashboard/disputes/components/dispute-base/interfaces';
import {
  DEFAULT_TRADELINE_DISPUTE_PROCESS_PERSONAL_INFO_REASONS,
  DISPUTES_PERSONAL_REASONS_TOBEREMOVED,
} from '@views/dashboard/disputes/disputes-personal/disputes-personal-pure/constants';

type viewDisplay = 'sent' | 'not-sent';
export interface IProcessDisputePersonalResult {
  result: IDisputeProcessResult;
  personalItem: IDisputePersonalItem | undefined;
}

@Component({
  selector: 'brave-disputes-personal-pure-view',
  templateUrl: './disputes-personal-pure.view.html',
})
export class DisputesPersonalPureView implements OnInit {
  @Input() viewDisplay: viewDisplay = 'not-sent';
  @Input() dispute: IDisputePersonalItem = {} as IDisputePersonalItem;
  @Output() processResult: EventEmitter<IProcessDisputePersonalResult> = new EventEmitter();
  @ViewChild(DisputeBaseComponent) base: DisputeBaseComponent | undefined;

  reasons = DEFAULT_TRADELINE_DISPUTE_PROCESS_PERSONAL_INFO_REASONS;
  pageOne = DISPUTES_PERSONAL_REASONS_TOBEREMOVED;
  defaultReasonCard: IDisputeReasonCard | undefined;

  constructor() {}

  ngOnInit(): void {
    this.defaultReasonCard = {
      ...this.pageOne[0],
      selected: false,
      index: 0,
    };
  }
}
