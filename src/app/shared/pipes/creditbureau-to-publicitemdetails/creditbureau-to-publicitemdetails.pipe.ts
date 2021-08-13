import { Pipe, PipeTransform } from '@angular/core';
import { IPublicRecordCreditBureauConfig } from '@views/dashboard/disputes/disputes-findings/dispute-findings-pure/interfaces';
import { TransunionUtil as tu } from '@shared/utils/transunion/transunion';
import { ICreditBureau, IPublicRecord } from '@shared/interfaces/credit-bureau.interface';

@Pipe({
  name: 'creditbureauToPublicitemdetails',
})
export class CreditbureauToPublicitemdetailsPipe implements PipeTransform {
  transform(creditBureau: ICreditBureau | undefined): IPublicRecordCreditBureauConfig | undefined {
    const record = creditBureau ? tu.parser.parseCreditBureauToPublicRecord(creditBureau) : ({} as IPublicRecord);
    const name = tu.parser.publicRecordSubscriberUnparser(record?.subscriber);
    return {
      docketNumber: record?.docketNumber,
      name: name,
      dateFiled: record?.dateFiled,
      datePaid: record?.datePaid,
      dateUpdated: record?.dateEffective,
      type: record?.publicRecordTypeDescription,
      responsibility: record?.ECOADescription,
      amount: '', // TODO follow up on this missing field
      courtType: record?.source?.description,
      estMonthToBeRemoved: record?.estimatedDateOfDeletion,
    } as IPublicRecordCreditBureauConfig;
  }
}
