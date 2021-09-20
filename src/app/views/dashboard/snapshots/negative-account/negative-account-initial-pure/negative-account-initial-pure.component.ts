import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ISubscriber, ITradeLinePartition } from '@shared/interfaces';
import { noNegativeAccountInitialContent } from '@views/dashboard/snapshots/negative-account/negative-account-initial-pure/content';

@Component({
  selector: 'brave-negative-account-initial-pure',
  templateUrl: './negative-account-initial-pure.component.html',
})
export class NegativeAccountInitialPureComponent implements OnInit {
  @Input() tradelines: ITradeLinePartition[] = [];
  @Input() subscribers: ISubscriber[] = [];
  @Input() acknowledged: boolean = false;
  @Output() confirmed: EventEmitter<ITradeLinePartition> = new EventEmitter();
  @Output() goToReportClick: EventEmitter<void> = new EventEmitter();
  @Output() goToDashboardClick: EventEmitter<void> = new EventEmitter();

  content = noNegativeAccountInitialContent;
  constructor() {}

  ngOnInit(): void {}
}
