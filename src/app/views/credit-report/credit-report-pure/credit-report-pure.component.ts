import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { ICreditReportCardInputs } from '@shared/components/cards/credit-report-card/credit-report-card.component';
import { CreditReportGroups } from '@shared/constants/credit-report';
import { ITradeLinePartition } from '@shared/interfaces/merge-report.interface';
import { PreferencesStateModel } from '@store/preferences';

export interface ICreditReportCardGroup {
  title: string;
  group: CreditReportGroups;
  cards: ICreditReportCardInputs[];
}

@Component({
  selector: 'brave-credit-report-pure',
  templateUrl: './credit-report-pure.component.html',
})
export class CreditReportPureComponent implements OnInit {
  @Input() creditReports: ICreditReportCardGroup[] = [];
  @Input() creditReportScore: number = 0;
  @Input() preferences: PreferencesStateModel = {} as PreferencesStateModel;
  @Output() hide: EventEmitter<ICreditReportCardGroup> = new EventEmitter();
  @Output() viewDetailClick: EventEmitter<ITradeLinePartition> = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}
}
