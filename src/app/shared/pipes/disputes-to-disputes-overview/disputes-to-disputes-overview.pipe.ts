import { Pipe, PipeTransform } from '@angular/core';
import { IDisputeCurrent, IDisputeHistorical } from '@shared/components/cards/dispute-cards';
import { DisputeInput } from '@shared/services/aws/api.service';
import { IProcessDisputeTradelineResult } from '@views/disputes-tradeline/disputes-tradeline-pure/disputes-tradeline-pure.view';

interface IDisputesToOverview {
  currentDisputeArr: IDisputeCurrent[];
  historicalDisputeArr: IDisputeHistorical[];
}

interface IDisputeItem extends IProcessDisputeTradelineResult {}
// export interface IProcessDisputeTradelineResult {
//   result: IDisputeTradelineProcessResult;
//   tradeline: ITradeLinePartition | undefined;
// }

const TUStatusMapping: Record<string, any> = {
  opendispute: 'processing',
  completedispute: 'decision',
  cancelleddispute: 'cancelled',
};

@Pipe({
  name: 'disputesToDisputesOverview',
})
export class DisputesToDisputesOverviewPipe implements PipeTransform {
  transform(disputes: (DisputeInput | undefined | null)[] | null, ...args: unknown[]): IDisputesToOverview {
    const dummy = {
      currentDisputeArr: [],
      historicalDisputeArr: [],
    };
    if (!disputes || !disputes.length || !disputes.filter(Boolean).length) return dummy;
    // go through the dispute input arrays
    const sorted = disputes.sort((a, b) => {
      const openedA = new Date(a?.openedOn || 0);
      const openedB = new Date(b?.openedOn || 0);
      return +openedB - +openedA;
    });
    const current = sorted.shift();
    const currentItems = current ? JSON.parse(current.disputeItems || '') : null;
    if (!currentItems) return dummy;
    if (currentItems instanceof Array) {
      const currentDisputeArr = currentItems.map((item: IDisputeItem) => {
        return {
          creditorName: item.tradeline?.Tradeline?.creditorName || '#N/A',
          status: current?.disputeStatus
            ? TUStatusMapping[`${current?.disputeStatus?.toLowerCase()}`] || '#N/A'
            : '#N/A',
          accountType: item.tradeline?.accountTypeDescription || '#N/A',
          dateSubmitted: current?.openedOn || '#N/A',
          estCompletionDate: current?.openDisputes?.estimatedCompletionDate,
        };
      });
    } else {
    }

    const historical = sorted.length ? [...sorted] : [];
    return {
      currentDisputeArr: current,
      historicalDisputeArr: historical,
    };
  }
}
