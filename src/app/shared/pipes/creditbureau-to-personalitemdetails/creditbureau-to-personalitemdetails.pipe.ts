import { Pipe, PipeTransform } from '@angular/core';
import { IPersonalInfoCreditBureauConfig } from '@views/dashboard/disputes/disputes-findings/dispute-findings-pure/interfaces';
import { TransunionUtil as tu } from '@shared/utils/transunion/transunion';
import { ICreditBureau, ILineItem } from '@shared/interfaces/credit-bureau.interface';
import { IBorrower, ITrueLinkCreditReportType } from '@shared/interfaces';
import { CreditBureauFindingsType } from '@shared/utils/transunion/constants';

@Pipe({
  name: 'creditbureauToPersonalitemdetails',
})
export class CreditbureauToPersonalitemdetailsPipe implements PipeTransform {
  transform(
    creditBureau: ICreditBureau | undefined,
    mergeReport: ITrueLinkCreditReportType | undefined,
  ): IPersonalInfoCreditBureauConfig[] | [] {
    if (!creditBureau || !mergeReport || !mergeReport.Borrower) return [];
    const allLineItems: ILineItem[] = tu.queries.dispute.getLineItems(creditBureau);
    const personalLineItems = allLineItems.filter((item) => {
      return item.handle.substring(0, 2).toLowerCase() !== 'tr' && item.handle.substring(0, 2).toLowerCase() !== 'pr';
    });
    return personalLineItems.map((item: ILineItem) => {
      return {
        personalItem: mergeReport.Borrower || ({} as IBorrower),
        summaryItemType: CreditBureauFindingsType.PersonalInfo,
        summaryResult: item.credit.result,
        summaryResultCode: 'personal_item', //tu.queries.dispute.getResultCode(item.credit.result),
        summaryReason: item.credit.reason || '',
      };
    });
  }
}
