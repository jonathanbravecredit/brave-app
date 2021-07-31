import { Pipe, PipeTransform } from '@angular/core';
import { IPublicPartition } from '@shared/interfaces';
import { IDisputeItem, IDisputePublicItem } from '@shared/services/dispute/dispute.interfaces';

@Pipe({
  name: 'publicitemToDispute'
})
export class PublicitemToDisputePipe implements PipeTransform {

  transform(publicItem: IPublicPartition | null): IDisputePublicItem | undefined {
    if (!publicItem) return;
    return this.mapTradeLineToAccount(publicItem);
  }


  /**
   * Map the tradeline object to the negative account object
   * @param {ITradeLinePartition} tradeLines
   * @returns
   */
  private mapTradeLineToAccount(item: IPublicPartition): IDisputePublicItem {
    return {} as IDisputePublicItem;
    // const mapped = {
    //   publicItem: item,
    //   docketNumber: item.PublicRecord?.,
    //   userName: string;
    //   dateFiled: string;
    //   datePaid: string;
    //   dateUpdated: string;
    //   accountTypeDescription?: string;
    //   accountTypeDescriptionValue?: string;
    //   originalCreditor?: string;
    //   originalCreditorValue?: string;
    //   accountDesignator: string;
    //   amount: string | number;
    //   courtType: string;
    //   disputeFlag?: string;
    //   disputeFlagValue?: string;
    // };
    // return mapped;
   }

}
