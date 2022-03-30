import { Pipe, PipeTransform } from '@angular/core';
import { IPublicPartition } from '@shared/interfaces';
import { IDisputePublicItem } from '@shared/interfaces/dispute.interfaces';

@Pipe({
  name: 'publicitemToDispute'
})
export class PublicitemToDisputePipe implements PipeTransform {

  transform(publicItem: IPublicPartition | null): IDisputePublicItem | undefined {
    if (!publicItem) return;
    return this.mapping(publicItem);
  }


  /**
   * Map the tradeline object to the negative account object
   * @param {ITradeLinePartition} tradeLines
   * @returns
   */
  private mapping(item: IPublicPartition): IDisputePublicItem {
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
