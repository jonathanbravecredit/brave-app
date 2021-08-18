import { Pipe, PipeTransform } from '@angular/core';
import { ITrueLinkCreditReportType } from '@shared/interfaces';
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
    const tradelineFindings: ILineItem[] = tu.query.lookupCreditBureauFindingsByType(creditBureau, type);
    const tradelineResult: ITrade[] = tu.query.lookupCreditBureauTrades(creditBureau);
    const tradelineUpdates = tu.query.lookupUpdatedTradelineFromInvestigationResults(mergeReport);
    if (!tradelineFindings.length) return [];
    // go through each filtered finding from CB
    // find the matching public record result (alson in CB)
    // match on item key;
    // map to interface and return
    return tradelineFindings.map((finding: ILineItem) => {
      const result = tradelineResult.find((rec) => rec.itemKey == finding.itemKey); //
      const name = tu.parser.subscriberUnparser(finding?.credit?.item?.subscriber);
      const tradeline = tu.query.lookupUpdatedTradelineFromCreditBureauKey(finding.itemKey, tradelineUpdates);

      return {
        tradeline: tradeline,
        summaryItemKey: finding.itemKey,
        summaryItemType: CreditBureauFindingsType.Trade,
        summaryResult: finding.credit.result,
        summaryResultCode: tu.query.findResultCode(finding.credit.result),
        summaryReason: finding.credit.reason || 'Not Specified',
        itemKey: result?.itemKey,
        accountType: result?.portfolioTypeDescription,
        dateOpened: result?.dateOpened,
        dateClosed: result?.dateClosed,
        creditLimit: result?.creditLimit,
        creditorStreet: result?.subscriber?.address?.street,
        creditorLocation: result?.subscriber?.address?.location,
        term: result?.terms,
        name: name,
      } as ITradelineCreditBureauConfig;
    });
  }
}
