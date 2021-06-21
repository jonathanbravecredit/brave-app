import { isNull } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit, Input } from '@angular/core';
import { Store } from '@ngxs/store';
import { POSITIVE_PAY_STATUS_CODES } from '@shared/data';
import {
  CreditReportGroups,
  CREDIT_REPORT_GROUPS,
} from '@shared/data/credit-report';
import {
  IMergeReport,
  ITradeLinePartition,
} from '@shared/interfaces/merge-report.interface';
import { CreditreportService } from '@shared/services/creditreport/creditreport.service';
import { PreferencesStateModel } from '@store/preferences';
import * as PreferenceActions from '@store/preferences/preferences.actions';
import { ICreditReportCardGroup } from '@views/credit-report/credit-report-pure/credit-report-pure.component';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';

@Component({
  selector: 'brave-credit-report',
  templateUrl: './credit-report.component.html',
})
export class CreditReportComponent implements OnInit {
  preferences$: Observable<PreferencesStateModel>;
  creditReport$: Observable<IMergeReport>;
  filters = {
    [CreditReportGroups.CreditCards]: false,
    [CreditReportGroups.CollectionsAccounts]: false,
    [CreditReportGroups.InstallmentLoans]: false,
    [CreditReportGroups.Mortgages]: false,
  };

  constructor(
    private creditReportService: CreditreportService,
    private store: Store
  ) {
    this.creditReport$ = this.creditReportService.tuReport$.pipe(
      map((report: IMergeReport) => {
        return this.filterReport(report);
      })
    );
    // if the preferences change than update the report
    this.preferences$ = this.creditReportService.preferences$.pipe();
  }

  ngOnInit(): void {}

  /**
   * Method to filter the tradelins by group and if they are positive
   * @param {IMergeReport} report
   * @returns
   */
  filterReport(report: IMergeReport): IMergeReport {
    let partition = report.TrueLinkCreditReportType.TradeLinePartition;
    if (!partition) return report;
    return {
      ...report,
      TrueLinkCreditReportType: {
        TradeLinePartition: this.filterGroup(partition),
      },
    };
  }

  /**
   * Method to help filter the tradelines by group and if they are positive
   * @param {ITradeLinePartition | ITradeLinePartition[]} partition
   * @returns
   */
  filterGroup(
    partition: ITradeLinePartition | ITradeLinePartition[]
  ): ITradeLinePartition[] {
    if (partition instanceof Array) {
      return partition.filter((item) => {
        const sym = item.accountTypeSymbol || '';
        const group: CreditReportGroups = CREDIT_REPORT_GROUPS[sym].group;
        const pos =
          POSITIVE_PAY_STATUS_CODES[`${item.Tradeline?.PayStatus?.symbol}`] ||
          null;
        return !(this.filters[group] && pos);
      });
    } else {
      const sym = partition.accountTypeSymbol || '';
      const group: CreditReportGroups = CREDIT_REPORT_GROUPS[sym].group;
      const pos =
        POSITIVE_PAY_STATUS_CODES[
          `${partition.Tradeline?.PayStatus?.symbol}`
        ] || null;
      return !(this.filters[group] && pos) ? [partition] : [];
    }
  }

  /**
   * Handle hide event emitter from pure...hides positive accounts
   * @param {ICreditReportCardGroup} report
   */
  onHide(report: ICreditReportCardGroup): any {
    // I need to update the state
    const prefs = this.creditReportService.tuPreferences;
    const updated: PreferencesStateModel = {
      ...prefs,
      hidePositiveAccounts: {
        ...prefs.hidePositiveAccounts,
        [report.group]: true,
      },
    };
    // update filters
    this.filters = {
      ...this.filters,
      [report.group]: true,
    };
    this.store.dispatch(new PreferenceActions.Edit(updated));
  }
}
