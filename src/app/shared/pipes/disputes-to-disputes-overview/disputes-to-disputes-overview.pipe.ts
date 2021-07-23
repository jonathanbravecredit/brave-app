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
    const currentDisputeArr = this.parseCurrentDisputeItems(current, currentItems);
    const historicalDisputeArr = sorted.length
      ? sorted.map((dispute) => {
          const disputeItems = current ? JSON.parse(current.disputeItems || '') : null;
          return this.parseHistoricalDisputeItems(dispute, disputeItems)[0]; // TODO should only be one account for now
        })
      : [];

    return {
      currentDisputeArr: currentDisputeArr,
      historicalDisputeArr: historicalDisputeArr,
    };
  }

  private parseCurrentDisputeItems(
    dispute: DisputeInput | undefined | null,
    disputeItems: IDisputeItem | IDisputeItem[] | undefined | null,
  ): IDisputeCurrent[] {
    return disputeItems instanceof Array
      ? disputeItems.map((item: IDisputeItem) => {
          return {
            creditorName: item.tradeline?.Tradeline?.creditorName || '#N/A',
            status: dispute?.disputeStatus
              ? TUStatusMapping[`${dispute?.disputeStatus?.toLowerCase()}`] || '#N/A'
              : '#N/A',
            accountType: item.tradeline?.accountTypeDescription || '#N/A',
            dateSubmitted: dispute?.openedOn || '#N/A',
            estCompletionDate:
              dispute?.openDisputes?.estimatedCompletionDate ||
              dispute?.closedDisputes?.estimatedCompletionDate ||
              '#N/A',
          };
        })
      : [
          {
            creditorName: disputeItems?.tradeline?.Tradeline?.creditorName || '#N/A',
            status: dispute?.disputeStatus
              ? TUStatusMapping[`${dispute?.disputeStatus?.toLowerCase()}`] || '#N/A'
              : '#N/A',
            accountType: disputeItems?.tradeline?.accountTypeDescription || '#N/A',
            dateSubmitted: dispute?.openedOn || '#N/A',
            estCompletionDate:
              dispute?.openDisputes?.estimatedCompletionDate ||
              dispute?.closedDisputes?.estimatedCompletionDate ||
              '#N/A',
          },
        ];
  }

  private parseHistoricalDisputeItems(
    dispute: DisputeInput | undefined | null,
    disputeItems: IDisputeItem | IDisputeItem[] | undefined | null,
  ): IDisputeHistorical[] {
    if (!disputeItems) return [];
    return disputeItems instanceof Array
      ? disputeItems.map((item: IDisputeItem) => {
          return {
            creditorName: item.tradeline?.Tradeline?.creditorName || '#N/A',
            latestDateSubmitted: dispute?.openedOn || '#N/A',
            decision: dispute?.disputeResults || '#N/A', // TODO need to get this from the actual results
            resultReceived: dispute?.disputeResults || '#N/A', // TODO need to get this from the actual results
          };
        })
      : [
          {
            creditorName: disputeItems.tradeline?.Tradeline?.creditorName || '#N/A', // disputeItems.tradeline?.Tradeline?.creditorName || '#N/A',
            latestDateSubmitted: dispute?.openedOn || '#N/A',
            decision: dispute?.disputeResults || '#N/A', // TODO need to get this from the actual results
            resultReceived: dispute?.disputeResults || '#N/A', // TODO need to get this from the actual results
          },
        ];
  }
}
