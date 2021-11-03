import { Pipe, PipeTransform } from '@angular/core';
import { IDispute } from '@shared/interfaces/disputes';
import { TransunionUtil } from '@shared/utils/transunion/transunion';
import { IDisputeCurrent } from '@views/dashboard/disputes/components/cards/interfaces';
import { IDisputesOverview } from '@views/dashboard/disputes/disputes-overview/disputes-overview-initial-pure/disputes-overview-initial-pure.view';
import { IProcessDisputePersonalResult } from '@views/dashboard/disputes/disputes-personal/disputes-personal-pure/disputes-personal-pure.view';
import { IProcessDisputePublicResult } from '@views/dashboard/disputes/disputes-public/disputes-public-pure/disputes-public-pure.view';
import { IProcessDisputeTradelineResult } from '@views/dashboard/disputes/disputes-tradeline/disputes-tradeline-pure/disputes-tradeline-pure.view';

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
    console.log('sorted dispute ===> ', sorted);
    const current = sorted[0];
    const currentItems = current ? JSON.parse(current.disputeItems || '') : null;
    if (!currentItems) return dummy;
    const currentDisputeArr = this.parseCurrentDisputeItems(current, currentItems);
    const historicalDisputeArr = sorted.slice(1);
    console.log('historical dispute ===> ', historicalDisputeArr);
    const mapped = {
      currentDispute: currentDisputeArr,
      hasHistorical: historicalDisputeArr?.length > 0,
    };
    return mapped;
  }

  private parseCurrentDisputeItems(
    dispute: IDispute | undefined | null,
    disputeItems: any | any[] | undefined | null,
  ): IDisputeCurrent | null {
    if (!disputeItems) return null;
    if (disputeItems['tradeline'] !== undefined) {
      return TransunionUtil.mappers.mapTradelineDispute(disputeItems as IProcessDisputeTradelineResult, dispute);
    }
    if (disputeItems['personalItem'] !== undefined) {
      return TransunionUtil.mappers.mapPersonalDispute(disputeItems as IProcessDisputePersonalResult, dispute);
    }
    if (disputeItems['publicItem'] !== undefined) {
      return TransunionUtil.mappers.mapPublicDispute(disputeItems as IProcessDisputePublicResult, dispute);
    }
    return TransunionUtil.mappers.mapTradelineDispute(disputeItems as IProcessDisputeTradelineResult, dispute);
  }

  // private parseHistoricalDisputeItems(
  //   dispute: IDispute | undefined | null,
  //   disputeItems: any | any[] | undefined | null,
  // ): IDisputeHistorical[] {
  //   if (!disputeItems) return [];
  //   if (disputeItems instanceof Array) {
  //     return disputeItems.map((item: any) => {
  //       if (item['tradeline'] !== undefined) {
  //         return TransunionUtil.mappers.mapHistoricalTradelineDispute(item as IProcessDisputeTradelineResult, dispute);
  //       }
  //       if (item['personalItem'] !== undefined) {
  //         return TransunionUtil.mappers.mapHistoricalPersonalDispute(item as IProcessDisputePersonalResult, dispute);
  //       }
  //       if (item['publicItem'] !== undefined) {
  //         return TransunionUtil.mappers.mapHistoricalPublicDispute(item as IProcessDisputePublicResult, dispute);
  //       }
  //       return TransunionUtil.mappers.mapHistoricalTradelineDispute(item as IProcessDisputeTradelineResult, dispute);
  //     });
  //   } else {
  //     if (disputeItems['tradeline'] !== undefined) {
  //       return [
  //         TransunionUtil.mappers.mapHistoricalTradelineDispute(disputeItems as IProcessDisputeTradelineResult, dispute),
  //       ];
  //     }
  //     if (disputeItems['personalItem'] !== undefined) {
  //       return [
  //         TransunionUtil.mappers.mapHistoricalPersonalDispute(disputeItems as IProcessDisputePersonalResult, dispute),
  //       ];
  //     }
  //     if (disputeItems['publicItem'] !== undefined) {
  //       return [
  //         TransunionUtil.mappers.mapHistoricalPublicDispute(disputeItems as IProcessDisputePublicResult, dispute),
  //       ];
  //     }
  //     return [
  //       TransunionUtil.mappers.mapHistoricalTradelineDispute(disputeItems as IProcessDisputeTradelineResult, dispute),
  //     ];
  //   }
  // }
}
