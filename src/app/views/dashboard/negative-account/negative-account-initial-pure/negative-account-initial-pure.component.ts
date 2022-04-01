import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ISubscriber } from '@shared/interfaces';
import { AccountService } from '@shared/services/account/account.service';
import { noNegativeAccountInitialContent } from '@views/dashboard/negative-account/negative-account-initial-pure/content';

@Component({
  selector: 'brave-negative-account-initial-pure',
  templateUrl: './negative-account-initial-pure.component.html',
})
export class NegativeAccountInitialPureComponent implements OnInit {
  @Input() subscribers: ISubscriber[] = [];
  @Output() goToReportClick: EventEmitter<void> = new EventEmitter();
  @Output() goToDashboardClick: EventEmitter<void> = new EventEmitter();

  content = noNegativeAccountInitialContent;
  constructor(
    public account: AccountService
  ) { }

  ngOnInit(): void {}
}
