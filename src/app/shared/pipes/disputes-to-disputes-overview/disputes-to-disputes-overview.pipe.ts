import { Pipe, PipeTransform } from '@angular/core';
import { IDispute } from '@shared/interfaces/disputes';
import { TransunionUtil as tu } from '@shared/utils/transunion/transunion';
import { IDisputeCurrent } from '@views/dashboard/disputes/components/cards/interfaces';
import { IDisputesOverview } from '@views/dashboard/disputes/disputes-overview/disputes-overview-initial-pure/disputes-overview-initial-pure.view';

const enum ParserTypes {
  Tradeline = 'tradeline',
  PersonalItem = 'personalItem',
  PublicItem = 'publicItem',
}

const parsers = {
  [ParserTypes.Tradeline]: tu.mappers.mapTradelineDispute,
  [ParserTypes.PersonalItem]: tu.mappers.mapPersonalDispute,
  [ParserTypes.PublicItem]: tu.mappers.mapPublicDispute,
};

@Pipe({
  name: 'disputesToDisputesOverview',
})
export class DisputesToDisputesOverviewPipe implements PipeTransform {
  transform(disputes: (IDispute | undefined | null)[] | null | undefined): IDisputesOverview {
    const dummy = {
      currentDispute: null,
      hasHistorical: false,
    };

    if (!disputes || !disputes.length || !disputes.filter(Boolean).length) return dummy;
    // go through the dispute input arrays
    const sorted = [...disputes].sort((a, b) => {
      const openedA = new Date(a?.openedOn || 0);
      const openedB = new Date(b?.openedOn || 0);
      return +openedB - +openedA;
    });

    // parse the current dispute
    const dispute = sorted[0];
    const items = dispute ? JSON.parse(dispute.disputeItems) : null;
    const currentDisputeArr = this.parseCurrentDisputeItems(dispute, items);

    // check if historical disputes present
    const historicalDisputeArr = sorted.slice(1);

    return {
      currentDispute: currentDisputeArr,
      hasHistorical: historicalDisputeArr?.length > 0,
    };
  }

  private parseCurrentDisputeItems(
    dispute: IDispute | undefined | null,
    disputeItems: any | any[] | undefined | null,
  ): IDisputeCurrent | null {
    if (!disputeItems) return null;
    // Currently only allowing one item to dispute, but this could change in future
    return disputeItems instanceof Array
      ? this.mapDisputeItem(disputeItems[0], dispute)
      : this.mapDisputeItem(disputeItems, dispute);
  }

  // TODO find better interface than any here...dispute items are stored as JSON string in DB
  private mapDisputeItem(item: any, dispute: IDispute | null | undefined): IDisputeCurrent {
    const cases = [ParserTypes.Tradeline, ParserTypes.PersonalItem, ParserTypes.PublicItem];
    for (let i = 0; i < cases.length; i++) {
      if (item[cases[i]] !== undefined) {
        return parsers[cases[i]](item, dispute);
      }
    }
    return parsers[ParserTypes.Tradeline](item, dispute); // fallback
  }
}
