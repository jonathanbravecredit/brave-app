import { ITradeLinePartition } from '@shared/interfaces';
import { TransunionBase } from '@shared/utils/transunion/transunion-base';

export class TransunionFilters extends TransunionBase {
  constructor() {
    super();
  }

  /**
   * Filters by a set of provided pay statuses
   * @param tradelines
   * @param codes
   * @returns
   */
  static filterTradelinesByStatusCodes(
    tradelines: ITradeLinePartition[],
    codes: Record<string, any>,
  ): ITradeLinePartition[] {
    return tradelines.filter((item) => {
      let status = codes[`${item.Tradeline?.PayStatus?.symbol}`];
      return !!status;
    });
  }
}
