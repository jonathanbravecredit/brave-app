import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { ICreditReportCardInputs } from '@shared/components/cards/credit-report-card/credit-report-card.component';
import { IPersonalItemsDetailsConfig } from '@views/dashboard/reports/credit-report/personalitems/personalitems-details/interfaces';
import { IPublicItemsDetailsConfig } from '@views/dashboard/reports/credit-report/publicitems/publicitems-details/interfaces';
import { CreditReportGroups } from '@shared/constants/credit-report';
import { IBorrower, IPublicPartition, ITradeLinePartition } from '@shared/interfaces/merge-report.interface';
import { PreferencesStateModel } from '@store/preferences';
import { FeatureFlagsService } from '@shared/services/featureflags/feature-flags.service';

export interface ICreditReportTradelinesCardGroup {
  title: string;
  group: CreditReportGroups;
  cards: ICreditReportCardInputs[];
  hidden: boolean;
}

@Component({
  selector: 'brave-credit-report-pure',
  templateUrl: './credit-report-pure.component.html',
})
export class CreditReportPureComponent implements OnInit {
  @Input() tradelines: ICreditReportTradelinesCardGroup[] = [];
  @Input() publicItems: IPublicItemsDetailsConfig[] = [];
  @Input() personalItems: IPersonalItemsDetailsConfig[] = [];
  @Input() creditReportScore: number = 0;
  @Input() preferences: PreferencesStateModel = {} as PreferencesStateModel;
  @Output() hide: EventEmitter<ICreditReportTradelinesCardGroup> = new EventEmitter();
  @Output() viewDetailClick: EventEmitter<ITradeLinePartition> = new EventEmitter();
  @Output() viewPublicItemDetailClick: EventEmitter<IPublicPartition> = new EventEmitter();
  @Output() viewPersonalItemDetailClick: EventEmitter<IPersonalItemsDetailsConfig> = new EventEmitter();
  constructor(public featureFlags: FeatureFlagsService) {}

  ngOnInit(): void {}
}
