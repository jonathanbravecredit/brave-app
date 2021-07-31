import { Pipe, PipeTransform } from '@angular/core';
import { IDisputeCurrent, IDisputeHistorical } from '@shared/components/cards/dispute-cards';
import { DisputeInput } from '@shared/services/aws/api.service';
import { IProcessDisputeTradelineResult } from '@views/dashboard/disputes/disputes-tradeline/disputes-tradeline-pure/disputes-tradeline-pure.view';

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
  transform(disputes: (DisputeInput | undefined | null)[] | null | undefined): IDisputesToOverview {
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
    const current = sorted[0];
    const currentItems = current ? JSON.parse(current.disputeItems || '') : null;
    if (!currentItems) return dummy;
    const currentDisputeArr = this.parseCurrentDisputeItems(current, currentItems);
    const historicalDisputeArr =
      sorted.length > 1
        ? sorted.slice(1).map((dispute) => {
            const disputeItems = current ? JSON.parse(current.disputeItems || '') : null;
            return this.parseHistoricalDisputeItems(dispute, disputeItems)[0]; // TODO should only be one account for now
          })
        : [];

    const mapped = {
      currentDisputeArr: currentDisputeArr,
      historicalDisputeArr: historicalDisputeArr,
    };
    console.log('mapped dispute ===> ', mapped);
    return mapped;
  }

  private parseCurrentDisputeItems(
    dispute: DisputeInput | undefined | null,
    disputeItems: IDisputeItem | IDisputeItem[] | undefined | null,
  ): IDisputeCurrent[] {
    return disputeItems instanceof Array
      ? disputeItems.map((item: IDisputeItem) => {
          return {
            dispute: dispute,
            creditorName: item.tradeline?.Tradeline?.creditorName || '--',
            status: dispute?.disputeStatus ? TUStatusMapping[`${dispute?.disputeStatus?.toLowerCase()}`] || '--' : '--',
            accountType: item.tradeline?.accountTypeDescription || '--',
            dateSubmitted: dispute?.openedOn || '--',
            estCompletionDate:
              dispute?.openDisputes?.estimatedCompletionDate ||
              dispute?.closedDisputes?.estimatedCompletionDate ||
              '--',
          };
        })
      : [
          {
            dispute: dispute,
            creditorName: disputeItems?.tradeline?.Tradeline?.creditorName || '--',
            status: dispute?.disputeStatus ? TUStatusMapping[`${dispute?.disputeStatus?.toLowerCase()}`] || '--' : '--',
            accountType: disputeItems?.tradeline?.accountTypeDescription || '--',
            dateSubmitted: dispute?.openedOn || '--',
            estCompletionDate:
              dispute?.openDisputes?.estimatedCompletionDate ||
              dispute?.closedDisputes?.estimatedCompletionDate ||
              '--',
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
            dispute: dispute,
            creditorName: item.tradeline?.Tradeline?.creditorName || '--',
            latestDateSubmitted: dispute?.openedOn || '--',
            decision: dispute?.disputeInvestigationResults || '--', // TODO need to get this from the actual results
            resultReceived: dispute?.disputeInvestigationResults || '--', // TODO need to get this from the actual results
          };
        })
      : [
          {
            dispute: dispute,
            creditorName: disputeItems.tradeline?.Tradeline?.creditorName || '--', // disputeItems.tradeline?.Tradeline?.creditorName || '--',
            latestDateSubmitted: dispute?.openedOn || '--',
            decision: dispute?.disputeInvestigationResults || '--', // TODO need to get this from the actual results
            resultReceived: dispute?.disputeInvestigationResults || '--', // TODO need to get this from the actual results
          },
        ];
  }
}
