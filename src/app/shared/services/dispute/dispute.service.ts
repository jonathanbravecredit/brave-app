import { Injectable, OnDestroy } from '@angular/core';
import { ITUServiceResponse } from '@shared/interfaces/common-tu.interface';
import { IPublicPartition, ISubscriber, ITradeLinePartition } from '@shared/interfaces/merge-report.interface';
import { StateService } from '@shared/services/state/state.service';
import { TransunionService } from '@shared/services/transunion/transunion.service';
import { AgenciesStateModel } from '@store/agencies';
import { AppDataStateModel } from '@store/app-data';
import { IProcessDisputePersonalResult } from '@views/dashboard/disputes/disputes-personal/disputes-personal-pure/disputes-personal-pure.view';
import { IProcessDisputePublicResult } from '@views/dashboard/disputes/disputes-public/disputes-public-pure/disputes-public-pure.view';
import { IProcessDisputeTradelineResult } from '@views/dashboard/disputes/disputes-tradeline/disputes-tradeline-pure/disputes-tradeline-pure.view';
import { BehaviorSubject, Subscription } from 'rxjs';
import { TransunionUtil as tu } from '@shared/utils/transunion/transunion';
import { IPersonalItemsDetailsConfig } from '@views/dashboard/reports/credit-report/personalitems/components/personalitems-details/interfaces';
import { IDispute } from '@shared/interfaces/disputes';
import { IErrorResponse } from '@shared/interfaces';
import { AnalyticsService } from '@shared/services/analytics/analytics/analytics.service';
import { AnalyticClickEvents } from '@shared/services/analytics/analytics/constants';
import { SafeListMonitoringService } from '@shared/services/safeListMonitoring/safe-list-monitoring.service';
import { MonitorClickEvents } from '@shared/services/safeListMonitoring/constants';
import { Creditreportv2Service } from '@shared/services/creditreportv2/creditreportv2.service';
import { ILineItem, ITrade, ICreditBureau } from '../../interfaces/credit-bureau.interface';
import { CreditBureauFindingsType } from '../../utils/transunion/constants';
import {
  ITradelineCreditBureauConfig,
  IPublicRecordCreditBureauConfig,
} from '../../../views/dashboard/disputes/disputes-findings/dispute-findings-pure/interfaces';
import { IDisputeToDisputeFindingOutput } from '../../../views/dashboard/disputes/disputes-findings/dispute-findings/dispute-findings.view';
import { ITrueLinkCreditReportType, IBorrower } from '../../interfaces/merge-report.interface';
import { IPublicRecord } from '../../interfaces/credit-bureau.interface';
import { IPersonalInfoCreditBureauConfig } from '../../../views/dashboard/disputes/disputes-findings/dispute-findings-pure/interfaces';

@Injectable({
  providedIn: 'root',
})
export class DisputeService implements OnDestroy {
  /*===========================================================================*/
  // these behavior subjects help track which are the current items
  //   being disputed. Can be either account, personal, public
  /*===========================================================================*/
  tradeline: ITradeLinePartition | undefined;
  tradeline$: BehaviorSubject<ITradeLinePartition> = new BehaviorSubject({} as ITradeLinePartition);
  tradelineSub$!: Subscription | undefined;

  publicItem: IPublicPartition | undefined;
  publicItem$: BehaviorSubject<IPublicPartition> = new BehaviorSubject({} as IPublicPartition);
  publicItemSub$!: Subscription | undefined;

  personalItem: IPersonalItemsDetailsConfig | undefined;
  personalItem$ = new BehaviorSubject<IPersonalItemsDetailsConfig>({} as IPersonalItemsDetailsConfig);
  personalItemSub$!: Subscription | undefined;

  stateSub$!: Subscription | undefined;
  _state: AppDataStateModel = {} as AppDataStateModel;

  /*=========================================================================================*/
  // The Subscriber (for tradeline, publicitem) Behavior Subjects are to track the current
  //   items matching credit subscriber data for the current item selected
  //   - subscriber is irrelevant for personal
  /*=========================================================================================*/
  // the currently selected tradeline's subscriber (financial accounts, etc..)
  tuTradelineSubscriber: ISubscriber | undefined;
  tuTradelineSubscriber$: BehaviorSubject<ISubscriber> = new BehaviorSubject({} as ISubscriber);
  // the currently selected public item (bankruptcies, etc...)
  tuPublicItemSubscriber: ISubscriber | undefined;
  tuPublicItemSubscriber$: BehaviorSubject<ISubscriber> = new BehaviorSubject({} as ISubscriber);

  /*===========================================================================*/
  // These help track the responses
  /*===========================================================================*/
  currentDisputeSub$: Subscription | undefined;
  currentDispute$: BehaviorSubject<IDispute> = new BehaviorSubject<IDispute>({} as IDispute);
  currentDispute: IDispute = {} as IDispute;
  disputeStack = new Array<
    IProcessDisputeTradelineResult | IProcessDisputePublicResult | IProcessDisputePersonalResult
  >();

  _acknowledged: boolean = false;

  constructor(
    private statesvc: StateService,
    private analytics: AnalyticsService,
    private transunion: TransunionService,
    private safeMonitor: SafeListMonitoringService,
    private creditReportService: Creditreportv2Service,
  ) {
    this.subscribeToTradeline();
    this.subscribeToPublicItems();
    this.subscribeToPersonalItems();
    this.subscribeToState();
    this.subscribeToCurrentDispute();
  }

  set acknowledged(value: boolean) {
    this._acknowledged = value;
  }
  get acknowledged(): boolean {
    return this._acknowledged;
  }

  set state(value: AppDataStateModel) {
    this._state = value;
  }
  get state(): AppDataStateModel {
    return this._state;
  }

  subscribeToTradeline(): void {
    this.tradelineSub$ = this.tradeline$.subscribe((tradeline) => {
      this.tradeline = tradeline;
    });
  }

  subscribeToPublicItems(): void {
    this.publicItemSub$ = this.publicItem$.subscribe((publicItem) => {
      this.publicItem = publicItem;
    });
  }

  subscribeToPersonalItems(): void {
    this.personalItemSub$ = this.personalItem$.subscribe((personalItem) => {
      this.personalItem = personalItem;
    });
  }

  subscribeToState(): void {
    this.stateSub$ = this.statesvc.state$.subscribe((state: { appData: AppDataStateModel }) => {
      this.state = state.appData;
      this.acknowledged = state.appData.agencies?.transunion?.acknowledgedDisputeTerms || false;
    });
  }

  subscribeToCurrentDispute(): void {
    this.currentDisputeSub$ = this.currentDispute$.subscribe((dispute) => {
      this.currentDispute = dispute;
    });
  }

  ngOnDestroy(): void {
    if (this.tradelineSub$) this.tradelineSub$.unsubscribe();
    if (this.publicItemSub$) this.publicItemSub$.unsubscribe();
    if (this.personalItemSub$) this.personalItemSub$.unsubscribe();
    if (this.stateSub$) this.stateSub$.unsubscribe();
    if (this.currentDisputeSub$) this.currentDisputeSub$.unsubscribe();
  }

  getCurrentDispute(): IDispute {
    return this.currentDispute$.getValue();
  }

  getUserStateOfResidence(): string {
    return this.statesvc.state?.appData.user?.userAttributes?.address?.state || '';
  }

  setTradelineItem(tradeline: ITradeLinePartition): void {
    this.tradeline$.next(tradeline);
    const subscriber = tu.queries.report.getTradelineSubscriberByKey(tradeline) || ({} as ISubscriber);
    this.tuTradelineSubscriber = subscriber;
    this.tuTradelineSubscriber$.next(subscriber);
  }

  setPublicItem(publicItem: IPublicPartition): void {
    this.publicItem$.next(publicItem);
    const subscriber = tu.queries.report.getPublicSubscriberByKey(publicItem) || ({} as ISubscriber);
    this.tuPublicItemSubscriber = subscriber;
    this.tuPublicItemSubscriber$.next(subscriber);
  }

  // cannot directly use the partition because of data structure.
  setPersonalItem(name: IPersonalItemsDetailsConfig): void {
    this.personalItem$.next(name);
  }

  pushDispute(
    item: IProcessDisputeTradelineResult | IProcessDisputePublicResult | IProcessDisputePersonalResult,
  ): void {
    this.disputeStack = [...this.disputeStack, item];
  }

  popDispute():
    | IProcessDisputeTradelineResult
    | IProcessDisputePublicResult
    | IProcessDisputePersonalResult
    | undefined {
    const item = this.disputeStack.pop();
    this.disputeStack = [...this.disputeStack];
    return item;
  }

  clearDisputes(): void {
    this.disputeStack = [];
  }

  /**
   * Update the users acknowledge and then gets dispute preflight check
   * @returns
   */
  async onUserConfirmed(): Promise<ITUServiceResponse<any>> {
    try {
      await this.acknowledgeDisputeTerms();
      const preflight = await this.sendDisputePreflightCheck();
      if (preflight?.success) {
        this.analytics.fireClickEvent(AnalyticClickEvents.DisputeEnrollment, {
          google: true,
          brave: true,
        });
        this.safeMonitor.fireClickEvent(MonitorClickEvents.DisputesEnroll);
      }
      return preflight;
    } catch (err) {
      throw `disputeService:onUserConfirmed=${err}`;
    }
  }
  /**
   * Updates the state and db to reflect the users acknowledgement
   * - do not need to sync back to db as already in sync
   * @param state
   */
  async acknowledgeDisputeTerms(): Promise<ITUServiceResponse<null | undefined>> {
    try {
      const results = await this.transunion.sendTransunionAPICall<null>('AcknowledgeDisputeTerms', JSON.stringify({}));
      if (results.success) {
        await this.statesvc.updateAcknowledgeDisputeTerms({
          acknowledgedDisputeTerms: true,
          acknowledgedDisputeTermsOn: new Date().toISOString(),
        });
      }
      return results;
    } catch (err) {
      return { success: false, error: err as IErrorResponse, data: null };
    }
  }

  /**
   * dispute preflight checks user eligibility to enroll and start disputes
   * @returns
   * ITUServiceResponse and a refreshed report if refresh was required.
   */
  async sendDisputePreflightCheck(): Promise<ITUServiceResponse<any>> {
    try {
      const res = await this.transunion.sendDisputePreflightCheck();
      if (!res?.data || !res?.data?.report) return res; // no data to sync
      await this.creditReportService.updateCreditReportStateAsync(res.data.report);
      return res;
    } catch (err) {
      return { success: false, error: err as IErrorResponse };
    }
  }

  /**
   * Initiate a new dispute. Cannot have one in progress.
   *  - need to refresh the report because it is likely we had to call fulfill again
   */
  async sendStartDispute(): Promise<ITUServiceResponse<any>> {
    const res = await this.transunion.sendStartDispute(this.disputeStack);
    const report = await this.creditReportService.getCurrentCreditReport();
    await this.creditReportService.updateCreditReportStateAsync(report);
    return res;
  }

  /**
   * Query the TU service for any investigation results by report id
   * @returns
   */
  async getInvestigationResultsById(id: string): Promise<ITUServiceResponse<string | undefined>> {
    return await this.transunion.getInvestigationResultsById(id);
  }

  /**
   * Query the TU service for any investigation results by report id
   * @returns
   */
  async getCreditBureauResultsById(id: string): Promise<ITUServiceResponse<string | undefined>> {
    return await this.transunion.getCreditBureauResultsById(id);
  }

  /**
   * Query to return all the users disputes
   * @returns
   */
  async getDisputesByUser(): Promise<ITUServiceResponse<IDispute[] | undefined>> {
    try {
      return await this.transunion.sendTransunionAPICall('ListDisputesByUser', JSON.stringify({}));
    } catch (err) {
      return {
        success: false,
        error: err as IErrorResponse,
        data: [],
      };
    }
  }

  transformDisputeToFindings(
    dispute: IDispute | null,
    creditBureau: ICreditBureau | undefined,
  ): IDisputeToDisputeFindingOutput | undefined {
    if (!dispute) return;
    const status = dispute.disputeStatus;
    if (!status) return {} as IDisputeToDisputeFindingOutput;
    if (status.toLowerCase() === 'opendispute') {
      return {
        status: 'open',
        reportCreatedAt: dispute.openDisputes?.openDate || '--',
        fileIdentificationNumber: dispute.disputeLetterCode || '--',
        estimatedCompletionDate: dispute.openDisputes?.estimatedCompletionDate || '--',
        totalDisputedItems: `${dispute.openDisputes?.totalDisputedItems || '--'}`,
      } as IDisputeToDisputeFindingOutput;
    } else {
      return {
        status: 'closed',
        reportCreatedAt: creditBureau?.transactionControl?.tracking?.transactionTimeStamp || '--',
        fileIdentificationNumber: `${creditBureau?.transactionControl?.tracking?.identifier?.fin}-${creditBureau?.transactionControl?.tracking?.identifier?.activityNumber}`,
      };
    }
  }

  transformCreditbureauToTradelineDetails(
    creditBureau: ICreditBureau | undefined,
    investigationReport: ITrueLinkCreditReportType | undefined,
  ): ITradelineCreditBureauConfig[] | [] {
    if (!creditBureau || !investigationReport) return [];
    const type = CreditBureauFindingsType.Trade;
    const tradelineFindings: ILineItem[] = tu.queries.dispute.listFindingsByType(creditBureau, type);
    const tradelineResult: ITrade[] = tu.queries.dispute.listTrades(creditBureau);
    const tradelineUpdates = tu.queries.dispute.listUpdatedTradelines(investigationReport);
    if (!tradelineFindings.length) return [];
    return tradelineFindings.map((finding: ILineItem) => {
      let returnObject = {
        tradeline: {} as ITradeLinePartition,
        trade: {} as ITrade,
        subscriber: finding?.credit?.item?.subscriber,
        summaryItemKey: finding.itemKey,
        summaryItemType: CreditBureauFindingsType.Trade,
        summaryResult: finding.credit.result,
        summaryResultCode: tu.queries.dispute.getResultCode(finding.credit.result),
        summaryReason: finding.credit.reason || 'Not Specified',
        itemKey: finding.itemKey,
      } as ITradelineCreditBureauConfig;

      if (finding.credit.result.toLowerCase() === 'deleted') {
        const subscriber = tu.parsers.dispute.unparseSubscriber(finding?.credit?.item?.subscriber);
        returnObject.contactDetails = subscriber;
        // use the updated True link report to grab the subscribe and tradeline data
        return returnObject;
      } else {
        const subscriber = tu.parsers.dispute.unparseSubscriber(finding?.credit?.item?.subscriber);
        const result = tradelineResult.find((rec) => rec.itemKey == finding.itemKey); //
        // use the updated True link report to grab the subscribe and tradeline data
        const tradeline = tu.queries.dispute.getUpdatedTradelineByKey(finding.itemKey, tradelineUpdates);

        if (tradeline) returnObject.tradeline = tradeline;
        if (result) returnObject.trade = result;
        returnObject.contactDetails = subscriber;

        return returnObject;
      }
    });
  }

  transformCreditbureauToPublicItemDetails(
    creditBureau: ICreditBureau | undefined,
    investigationReport: ITrueLinkCreditReportType | undefined,
  ): IPublicRecordCreditBureauConfig[] | [] {
    if (!creditBureau || !investigationReport) return [];
    const type = CreditBureauFindingsType.PublicRecord;
    const publicRecordFindings: ILineItem[] = tu.queries.dispute.listFindingsByType(creditBureau, type);
    const publicRecordResult: IPublicRecord[] = tu.queries.dispute.listPublicRecords(creditBureau);
    const publicRecordUpdates = tu.queries.dispute.listUpdatedPublicRecords(investigationReport);

    if (!publicRecordFindings.length) return []; // deleted record so need to return the line item summary section
    return publicRecordFindings.map((finding: ILineItem) => {
      if (finding.credit?.result?.toLowerCase() === 'deleted') {
        const subscriber = tu.parsers.dispute.unparseSubscriber(finding.credit.item.subscriber);
        return {
          publicPartition: {} as IPublicPartition,
          summaryItemKey: finding.itemKey,
          summaryItemType: CreditBureauFindingsType.PublicRecord,
          summaryResult: finding.credit.result,
          summaryResultCode: tu.queries.dispute.getResultCode(finding.credit.result),
          summaryReason: finding.credit.reason || '',
          itemKey: finding.itemKey,
          publicItemType: finding.itemType,
          courtNameArray: subscriber,
        } as IPublicRecordCreditBureauConfig;
      } else {
        const result = publicRecordResult.find((rec) => rec.itemKey == finding.itemKey); //
        const subscriber = tu.parsers.dispute.unparseSubscriber(result?.subscriber);
        const publicPartition = tu.queries.dispute.getUpdatedPublicRecordByKey(finding.itemKey, publicRecordUpdates);
        return {
          publicPartition: publicPartition,
          summaryItemKey: finding.itemKey,
          summaryItemType: CreditBureauFindingsType.PublicRecord,
          summaryResult: finding.credit?.result,
          summaryResultCode: tu.queries.dispute.getResultCode(finding.credit?.result),
          summaryReason: finding.credit?.reason || '',
          itemKey: result?.itemKey,
          publicItemType: result?.source?.description,
          // courtType: result?.source?.description,
          // courtName: result?.subscriber?.name?.unparsed,
          courtLocation: result?.subscriber?.address?.location?.unparsed,
          docketNumber: result?.docketNumber,
          responsibility: result?.ECOADescription,
          expirationDate: result?.estimatedDateOfDeletion,
          dateUpdated: result?.dateEffective,
          dateFiled: result?.dateFiled,
          datePaid: result?.datePaid,
          courtNameArray: subscriber,
          amount: '', // TODO follow up on this missing field
        } as IPublicRecordCreditBureauConfig;
      }
    });
  }

  transformCreditbureauToPersonalItemDetails(
    creditBureau: ICreditBureau | undefined,
    investigationReport: ITrueLinkCreditReportType | undefined,
  ): IPersonalInfoCreditBureauConfig[] | [] {
    if (!creditBureau || !investigationReport || !investigationReport.Borrower) return [];
    const allLineItems: ILineItem[] = tu.queries.dispute.getLineItems(creditBureau);
    const personalLineItems = allLineItems.filter((item) => {
      return item.handle.substring(0, 2).toLowerCase() !== 'tr' && item.handle.substring(0, 2).toLowerCase() !== 'pr';
    });
    return personalLineItems.map((item: ILineItem) => {
      return {
        personalItem: investigationReport.Borrower || ({} as IBorrower),
        summaryItemType: CreditBureauFindingsType.PersonalInfo,
        summaryResult: item.credit.result,
        summaryResultCode: 'personal_item', //tu.queries.dispute.getResultCode(item.credit.result),
        summaryReason: item.credit.reason || '',
      };
    });
  }
}
