import { Pipe, PipeTransform } from '@angular/core';
import { DisputeInput } from '@shared/services/aws/api.service';
import { TransunionUtil } from '@shared/utils/transunion/transunion';
import { IDisputeCurrent, IDisputeHistorical } from '@views/dashboard/disputes/components/cards/interfaces';
import { IProcessDisputePersonalResult } from '@views/dashboard/disputes/disputes-personal/disputes-personal-pure/disputes-personal-pure.view';
import { IProcessDisputePublicResult } from '@views/dashboard/disputes/disputes-public/disputes-public-pure/disputes-public-pure.view';
import { IProcessDisputeTradelineResult } from '@views/dashboard/disputes/disputes-tradeline/disputes-tradeline-pure/disputes-tradeline-pure.view';

export interface IDisputesToOverview {
  currentDisputeArr: IDisputeCurrent[];
  historicalDisputeArr: IDisputeHistorical[];
}

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
    const sorted = [...disputes].sort((a, b) => {
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
    return mapped;
  }

  private parseCurrentDisputeItems(
    dispute: DisputeInput | undefined | null,
    disputeItems: any | any[] | undefined | null,
  ): IDisputeCurrent[] {
    if (!disputeItems) return [];
    if (disputeItems instanceof Array) {
      return disputeItems.map((item: any) => {
        if (item['tradeline'] !== undefined) {
          return TransunionUtil.mappers.mapTradelineDispute(item as IProcessDisputeTradelineResult, dispute);
        }
        if (item['personalItem'] !== undefined) {
          return TransunionUtil.mappers.mapPersonalDispute(item as IProcessDisputePersonalResult, dispute);
        }
        if (item['publicItem'] !== undefined) {
          return TransunionUtil.mappers.mapPublicDispute(item as IProcessDisputePublicResult, dispute);
        }
        return TransunionUtil.mappers.mapTradelineDispute(item as IProcessDisputeTradelineResult, dispute); // use as default
      });
    } else {
      if (disputeItems['tradeline'] !== undefined) {
        return [TransunionUtil.mappers.mapTradelineDispute(disputeItems as IProcessDisputeTradelineResult, dispute)];
      }
      if (disputeItems['personalItem'] !== undefined) {
        return [TransunionUtil.mappers.mapPersonalDispute(disputeItems as IProcessDisputePersonalResult, dispute)];
      }
      if (disputeItems['publicItem'] !== undefined) {
        return [TransunionUtil.mappers.mapPublicDispute(disputeItems as IProcessDisputePublicResult, dispute)];
      }
      return [TransunionUtil.mappers.mapTradelineDispute(disputeItems as IProcessDisputeTradelineResult, dispute)];
    }
  }

  private parseHistoricalDisputeItems(
    dispute: DisputeInput | undefined | null,
    disputeItems: any | any[] | undefined | null,
  ): IDisputeHistorical[] {
    if (!disputeItems) return [];
    if (disputeItems instanceof Array) {
      return disputeItems.map((item: any) => {
        if (item['tradeline'] !== undefined) {
          return TransunionUtil.mappers.mapHistoricalTradelineDispute(item as IProcessDisputeTradelineResult, dispute);
        }
        if (item['personalItem'] !== undefined) {
          return TransunionUtil.mappers.mapHistoricalPersonalDispute(item as IProcessDisputePersonalResult, dispute);
        }
        if (item['publicItem'] !== undefined) {
          return TransunionUtil.mappers.mapHistoricalPublicDispute(item as IProcessDisputePublicResult, dispute);
        }
        return TransunionUtil.mappers.mapHistoricalTradelineDispute(item as IProcessDisputeTradelineResult, dispute);
      });
    } else {
      if (disputeItems['tradeline'] !== undefined) {
        return [
          TransunionUtil.mappers.mapHistoricalTradelineDispute(disputeItems as IProcessDisputeTradelineResult, dispute),
        ];
      }
      if (disputeItems['personalItem'] !== undefined) {
        return [
          TransunionUtil.mappers.mapHistoricalPersonalDispute(disputeItems as IProcessDisputePersonalResult, dispute),
        ];
      }
      if (disputeItems['publicItem'] !== undefined) {
        return [
          TransunionUtil.mappers.mapHistoricalPublicDispute(disputeItems as IProcessDisputePublicResult, dispute),
        ];
      }
      return [
        TransunionUtil.mappers.mapHistoricalTradelineDispute(disputeItems as IProcessDisputeTradelineResult, dispute),
      ];
    }
  }
}
