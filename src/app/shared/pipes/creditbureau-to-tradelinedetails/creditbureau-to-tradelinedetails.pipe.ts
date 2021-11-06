import { Pipe, PipeTransform } from '@angular/core';
import { ITradeLinePartition, ITrueLinkCreditReportType } from '@shared/interfaces';
import { TransunionUtil as tu } from '@shared/utils/transunion/transunion';
import { ICreditBureau, ILineItem, ITrade } from '@shared/interfaces/credit-bureau.interface';
import { ITradelineCreditBureauConfig } from '@views/dashboard/disputes/disputes-findings/dispute-findings-pure/interfaces';
import { CreditBureauFindingsType } from '@shared/utils/transunion/constants';

@Pipe({
  name: 'creditbureauToTradelinedetails',
})
export class CreditbureauToTradelinedetailsPipe implements PipeTransform {
  transform(
    creditBureau: ICreditBureau | undefined,
    mergeReport: ITrueLinkCreditReportType | undefined,
  ): ITradelineCreditBureauConfig[] | [] {
    if (!creditBureau || !mergeReport) return [];
    const type = CreditBureauFindingsType.Trade;
    const tradelineFindings: ILineItem[] = tu.queries.dispute.listFindingsByType(creditBureau, type);
    const tradelineResult: ITrade[] = tu.queries.dispute.listTrades(creditBureau);
    const tradelineUpdates = tu.queries.dispute.listUpdatedTradelines(mergeReport);
    if (!tradelineFindings.length) return [];
    return tradelineFindings.map((finding: ILineItem) => {
      if (finding.credit.result.toLowerCase() === 'deleted') {
        const result = tradelineResult.find((rec) => rec.itemKey == finding.itemKey); //
        const subscriber = tu.parsers.dispute.unparseSubscriber(finding?.credit?.item?.subscriber);
        // use the updated True link report to grab the subscribe and tradeline data
        return {
          tradeline: {} as ITradeLinePartition,
          subscriber: subscriber,
          summaryItemKey: finding.itemKey,
          summaryItemType: CreditBureauFindingsType.Trade,
          summaryResult: finding.credit.result,
          summaryResultCode: tu.queries.dispute.getResultCode(finding.credit.result),
          summaryReason: finding.credit.reason || 'Not Specified',
          itemKey: finding.itemKey,
          contactDetails: subscriber,
        } as ITradelineCreditBureauConfig;
      } else {
        const result = tradelineResult.find((rec) => rec.itemKey == finding.itemKey); //
        const subscriber = tu.parsers.dispute.unparseSubscriber(finding?.credit?.item?.subscriber);
        // use the updated True link report to grab the subscribe and tradeline data
        const tradeline = tu.queries.dispute.getUpdatedTradelineByKey(finding.itemKey, tradelineUpdates);
        const reportSubscriber = tu.queries.report.getTradelineSubscriberByKey(tradeline);

        return {
          tradeline: tradeline,
          subscriber: reportSubscriber,
          summaryItemKey: finding.itemKey,
          summaryItemType: CreditBureauFindingsType.Trade,
          summaryResult: finding.credit.result,
          summaryResultCode: tu.queries.dispute.getResultCode(finding.credit.result),
          summaryReason: finding.credit.reason || 'Not Specified',
          itemKey: result?.itemKey,
          accountType: result?.portfolioTypeDescription,
          contactDetails: subscriber,
        } as ITradelineCreditBureauConfig;
      }
    });
  }
}
