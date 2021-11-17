import { Pipe, PipeTransform } from '@angular/core';
import { IDispute } from '@shared/interfaces/disputes';
import { IDisputeHistorical } from '@views/dashboard/disputes/components/cards/interfaces';
import { TransunionUtil as tu } from '@shared/utils/transunion/transunion';

const enum ParserTypes {
  Tradeline = 'tradeline',
  PersonalItem = 'personalItem',
  PublicItem = 'publicItem',
}

const parsers = {
  [ParserTypes.Tradeline]: tu.mappers.mapHistoricalTradelineDispute,
  [ParserTypes.PersonalItem]: tu.mappers.mapHistoricalPersonalDispute,
  [ParserTypes.PublicItem]: tu.mappers.mapHistoricalPublicDispute,
};

@Pipe({
  name: 'disputesToDisputesHistorical',
})
export class DisputesToDisputesHistoricalPipe implements PipeTransform {
  transform(disputes: (IDispute | undefined | null)[] | null | undefined): (IDisputeHistorical | undefined)[] {
    if (!disputes || !disputes.length || !disputes.filter(Boolean).length) return [];
    // go through the dispute input arrays
    const sorted = [...disputes].sort((a, b) => {
      const openedA = new Date(a?.openedOn || 0);
      const openedB = new Date(b?.openedOn || 0);
      return +openedB - +openedA;
    });
    const historical = sorted
      .slice(1)
      .map((dispute) => {
        const items = dispute ? JSON.parse(dispute.disputeItems) : null;
        return this.parseHistoricalDisputeItems(items, dispute);
      })
      .filter(Boolean);
    return historical;
  }

  private parseHistoricalDisputeItems(
    items: any | any[] | undefined | null,
    dispute: IDispute | undefined | null,
  ): IDisputeHistorical | undefined {
    // Currently only allowing one item to dispute, but this could change in future
    if (!items) return;
    return items instanceof Array
      ? this.mapHistoricalDisputeItem(items[0], dispute)
      : this.mapHistoricalDisputeItem(items, dispute);
  }

  private mapHistoricalDisputeItem(item: any, dispute: IDispute | null | undefined): IDisputeHistorical {
    const cases = [ParserTypes.Tradeline, ParserTypes.PersonalItem, ParserTypes.PublicItem];
    for (let i = 0; i < cases.length; i++) {
      if (item[cases[i]] !== undefined) {
        return parsers[cases[i]](item, dispute);
      }
    }
    return parsers[ParserTypes.Tradeline](item, dispute); // fallback
  }
}
