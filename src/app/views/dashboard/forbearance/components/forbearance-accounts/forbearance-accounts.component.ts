import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { ICreditReportCardInputs } from '@shared/components/cards/credit-report-card/credit-report-card.component';
import { ITradeLinePartition } from '@shared/interfaces';
import { TransunionUtil } from '@shared/utils/transunion/transunion';
import { forbearanceAccountsContent } from '@views/dashboard/forbearance/components/forbearance-accounts/content';

@Component({
  selector: 'brave-forbearance-accounts',
  templateUrl: './forbearance-accounts.component.html',
})
export class ForbearanceAccountsComponent implements OnInit {
  @Input() accounts: any = [];
  @Output() viewDetailClick: EventEmitter<ITradeLinePartition> = new EventEmitter();
  tu = TransunionUtil;
  content = forbearanceAccountsContent;
  counter = 0;
  cards: ICreditReportCardInputs[] = [];
  constructor() {}

  ngOnInit(): void {
    this.cards = this.tu.mappers.mapTradelineToSummaryCard(this.accounts);
  }
}
