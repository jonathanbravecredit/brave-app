import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { ICreditReportCardInputs } from '@shared/components/cards/credit-report-card/credit-report-card.component';
import { CreditReportGroups } from '@shared/data/credit-report';
import { PreferencesStateModel } from '@store/preferences';

export interface ICreditReportCardGroup {
  title: string;
  group: CreditReportGroups;
  cards: ICreditReportCardInputs[];
}

@Component({
  selector: 'brave-credit-report-pure',
  templateUrl: './credit-report-pure.component.html',
  styleUrls: ['./credit-report-pure.component.css'],
})
export class CreditReportPureComponent implements OnInit {
  @Input() creditReports: ICreditReportCardGroup[] = [];
  @Input() preferences: PreferencesStateModel = {} as PreferencesStateModel;
  @Output() hide: EventEmitter<ICreditReportCardGroup> = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}
}
