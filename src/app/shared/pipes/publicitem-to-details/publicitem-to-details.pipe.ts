import { Pipe, PipeTransform } from '@angular/core';
import { IPublicPartition, IPublicRecord } from '@shared/interfaces';
import { IPublicRecord as ICreditBureauPublicRecord } from '@shared/interfaces/credit-bureau.interface';
import { IPublicItemsDetailsConfig } from '@views/dashboard/reports/credit-report/publicitems/components/publicitems-details/interfaces';
import { TransunionUtil as tu } from '@shared/utils/transunion/transunion';

@Pipe({
  name: 'publicitemToDetails',
})
export class PublicitemToDetailsPipe implements PipeTransform {
  transform(publicItem: IPublicPartition, creditBureau: boolean = false): IPublicItemsDetailsConfig | undefined {
    if (publicItem === undefined) return;
    return creditBureau ? this.mappingCreditBureau(publicItem) : this.mapping(publicItem);
  }

  mapping(item: IPublicPartition): IPublicItemsDetailsConfig {
    const publicRecord: IPublicRecord = item.PublicRecord instanceof Array ? item.PublicRecord[0] : item.PublicRecord; // schema says array but should not be;
    return {
      publicPartition: item,
      docketNumber: publicRecord?.referenceNumber || '--',
      courtName: publicRecord?.courtName || '--',
      courtLocation: publicRecord?.LegalItem?.CourtLocation?.description || '--',
      dateFiled: publicRecord?.dateFiled || '--',
      dateUpdated: publicRecord?.dateUpdated || '--',
      publicItemType: publicRecord?.Type?.description || '--',
      expirationDate: publicRecord?.ExpirationDate || '--',
    };
  }

  mappingCreditBureau(item: IPublicPartition): IPublicItemsDetailsConfig {
    const publicRecord: ICreditBureauPublicRecord =
      item.PublicRecord instanceof Array ? item.PublicRecord[0] : item.PublicRecord; // schema says array but should not be;
    const subscriber = tu.parsers.dispute.unparseSubscriber(publicRecord.subscriber);
    return {
      publicPartition: item,
      docketNumber: publicRecord?.docketNumber,
      courtName: subscriber[0],
      courtLocation: subscriber[1],
      courtType: publicRecord?.source.description || '--',
      dateFiled: publicRecord?.dateFiled || '--',
      dateUpdated: publicRecord?.dateEffective || '--',
      publicItemType: publicRecord?.ECOADescription || '--',
      expirationDate: publicRecord?.estimatedDateOfDeletion || '--',
      amount: publicRecord?.originalBalance || '--',
    };
  }
}
