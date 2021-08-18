import { Pipe, PipeTransform } from '@angular/core';
import { IPublicRecordCreditBureauConfig } from '@views/dashboard/disputes/disputes-findings/dispute-findings-pure/interfaces';
import { TransunionUtil as tu } from '@shared/utils/transunion/transunion';
import { ICreditBureau, ILineItem, IPublicRecord } from '@shared/interfaces/credit-bureau.interface';
import { ITrueLinkCreditReportType } from '@shared/interfaces';
import { CreditBureauFindingsType } from '@shared/utils/transunion/constants';

@Pipe({
  name: 'creditbureauToPublicitemdetails',
})
export class CreditbureauToPublicitemdetailsPipe implements PipeTransform {
  transform(
    creditBureau: ICreditBureau | undefined,
    mergeReport: ITrueLinkCreditReportType | undefined,
  ): IPublicRecordCreditBureauConfig[] | [] {
    if (!creditBureau || !mergeReport) return [];
    const type = CreditBureauFindingsType.PublicRecord;
    const publicRecordFindings: ILineItem[] = tu.query.lookupCreditBureauFindingsByType(creditBureau, type);
    const publicRecordResult: IPublicRecord[] = tu.query.lookupCreditBureauPublicRecords(creditBureau);
    const publicRecordUpdates = tu.query.lookupUpdatedPublicRecordFromInvestigationResults(mergeReport);
    if (!publicRecordFindings.length) return [];
    // go through each filtered finding from CB
    // find the matching public record result (alson in CB)
    // match on item key;
    // map to interface and return
    return publicRecordFindings.map((finding: ILineItem) => {
      const result = publicRecordResult.find((rec) => rec.itemKey == finding.itemKey); //
      const name = tu.parser.subscriberUnparser(result?.subscriber);
      const publicPartition = tu.query.lookupUpdatedPublicRecordFromCreditBureauKey(
        finding.itemKey,
        publicRecordUpdates,
      );
      console.log('public record findings map:updates===> ', publicRecordUpdates);
      console.log('public record findings map:result===> ', result);
      console.log('public record findings map:result===> ', name);
      console.log('public record findings map:partition===> ', publicPartition);
      return {
        publicPartition: publicPartition,
        summaryItemKey: finding.itemKey,
        summaryItemType: CreditBureauFindingsType.PublicRecord,
        summaryResult: finding.credit.result,
        summaryResultCode: tu.query.findResultCode(finding.credit.result),
        summaryReason: finding.credit.reason || 'Not Specified',
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
        courtNameArray: name,
        amount: '', // TODO follow up on this missing field
      } as IPublicRecordCreditBureauConfig;
    });
  }
}
