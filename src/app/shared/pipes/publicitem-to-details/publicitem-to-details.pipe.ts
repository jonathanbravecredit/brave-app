import { Pipe, PipeTransform } from '@angular/core';
import { IPublicItemsDetailsConfig } from '@views/dashboard/reports/credit-report/publicitems/publicitems-details/interfaces';
import { IPublicPartition } from '@shared/interfaces';

@Pipe({
  name: 'publicitemToDetails',
})
export class PublicitemToDetailsPipe implements PipeTransform {
  transform(publicItem: IPublicPartition): IPublicItemsDetailsConfig | undefined {
    if (publicItem === undefined) return;
    return this.mapping(publicItem);
  }

  mapping(item: IPublicPartition): IPublicItemsDetailsConfig {
    const publicRecord = item.PublicRecord instanceof Array ? item.PublicRecord[0] : item.PublicRecord; // schema says array but should not be;
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
}
