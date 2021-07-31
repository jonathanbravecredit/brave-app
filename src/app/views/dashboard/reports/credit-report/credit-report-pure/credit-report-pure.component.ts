import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { ICreditReportCardInputs } from '@shared/components/cards/credit-report-card/credit-report-card.component';
import { IPersonalItemsDetailsConfig } from '@shared/components/personalitems/personalitems-details/interfaces';
import { IPublicItemsDetailsConfig } from '@shared/components/publicitems/publicitems-details/interfaces';
import { CreditReportGroups } from '@shared/constants/credit-report';
import { IBorrower, IPublicPartition, ITradeLinePartition } from '@shared/interfaces/merge-report.interface';
import { PreferencesStateModel } from '@store/preferences';

export interface ICreditReportTradelinesCardGroup {
  title: string;
  group: CreditReportGroups;
  cards: ICreditReportCardInputs[];
}

@Component({
  selector: 'brave-credit-report-pure',
  templateUrl: './credit-report-pure.component.html',
})
export class CreditReportPureComponent implements OnInit {
  @Input() tradelines: ICreditReportTradelinesCardGroup[] = [];
  @Input() publicItems: IPublicItemsDetailsConfig[] | undefined = [];
  @Input() personalItems: IPersonalItemsDetailsConfig | undefined;
  @Input() creditReportScore: number = 0;
  @Input() preferences: PreferencesStateModel = {} as PreferencesStateModel;
  @Output() hide: EventEmitter<ICreditReportTradelinesCardGroup> = new EventEmitter();
  @Output() viewDetailClick: EventEmitter<ITradeLinePartition> = new EventEmitter();
  @Output() viewPublicItemDetailClick: EventEmitter<IPublicPartition> = new EventEmitter();
  @Output() viewPersonalItemDetailClick: EventEmitter<IPersonalItemsDetailsConfig> = new EventEmitter();
  constructor() {}

  ngOnInit(): void {}
}
