import { Pipe, PipeTransform } from '@angular/core';
import { INegativeAccountCardInputs } from '@shared/components/cards/negative-account-card/negative-account-card.component';
import {
  BRAVE_ACCOUNT_TYPE,
  NEGATIVE_PAY_STATUS_CODES,
} from '@shared/data/pay-status-codes';
import {
  IMergeReport,
  ITradeline,
  ITradeLinePartition,
} from '@shared/interfaces/merge-report.interface';

@Pipe({
  name: 'negativeTradelines',
})
export class NegativeTradelinesPipe implements PipeTransform {
  transform(report: IMergeReport): INegativeAccountCardInputs[] | undefined {
    console.log('report in pipe', report);
    const tradeLines = report.TrueLinkCreditReportType.TradeLinePartition;
    if (!tradeLines) return [defaultTradeline];
    // TODO convert these to look up the values from the dictionary
    if (tradeLines instanceof Array) {
      return tradeLines
        .filter((item) => {
          const status =
            NEGATIVE_PAY_STATUS_CODES[`${item.Tradeline?.PayStatus?.symbol}`];
          console.log('status in pipe', status, !!status);
          return !!status;
        })
        .sort((a, b) => {
          if (
            a.accountTypeSymbol?.toLowerCase() === 'y' &&
            b.accountTypeDescription?.toLowerCase() !== 'y'
          ) {
            return 1;
          }
          if (
            a.accountTypeSymbol?.toLowerCase() !== 'y' &&
            b.accountTypeDescription?.toLowerCase() === 'y'
          ) {
            return -1;
          }
          return 0;
        })
        .sort((a, b) => {
          if (a.Tradeline?.dateOpened !== b.Tradeline?.dateOpened) {
            return 0;
          }
          if (a.Tradeline?.dateOpened! < b.Tradeline?.dateOpened!) {
            return 1;
          }
          if (a.Tradeline?.dateOpened! > b.Tradeline?.dateOpened!) {
            return -1;
          }
          return 0;
        })
        .map((item) => {
          return {
            creditorName: item.Tradeline?.creditorName || '',
            lastReported: item.Tradeline?.dateReported || '',
            accountTypeDescription: this.lookupAccountType(item),
            accountTypeDescriptionValue:
              item.Tradeline?.OpenClosed?.description || '',
            disputeFlag: 'Previously Disputed?',
            originalCreditor: 'Original Creditor',
            originalCreditorValue: this.lookupOriginalCreditor(item),
            disputeFlagValue: this.lookupDisputeFlag(item),
            accountDetail: {
              accountNumber: item.Tradeline?.accountNumber || '',
              typeOfCollection: item.accountTypeAbbreviation || '',
              amountPastDue: item.Tradeline?.currentBalance || 0,
              dateOpened: item.Tradeline?.dateOpened || '',
              dateLastPayment:
                item.Tradeline?.GrantedTrade?.dateLastPayment || '',
              remarks: item.Tradeline?.Remark?.customRemark || '',
            },
          };
        });
    } else {
      return [
        {
          creditorName: tradeLines.Tradeline?.creditorName || '',
          lastReported: tradeLines.Tradeline?.dateReported || '',
          accountTypeDescription: this.lookupAccountType(tradeLines),
          accountTypeDescriptionValue:
            tradeLines.Tradeline?.OpenClosed?.description || '',
          disputeFlag: 'Previously Disputed?',
          originalCreditor: 'Original Creditor',
          originalCreditorValue: this.lookupOriginalCreditor(tradeLines),
          disputeFlagValue: this.lookupDisputeFlag(tradeLines),
          accountDetail: {
            accountNumber: tradeLines.Tradeline?.accountNumber || '',
            typeOfCollection: tradeLines.accountTypeAbbreviation || '',
            amountPastDue: tradeLines.Tradeline?.currentBalance || 0,
            dateOpened: tradeLines.Tradeline?.dateOpened || '',
            dateLastPayment:
              tradeLines.Tradeline?.GrantedTrade?.dateLastPayment || '',
            remarks: tradeLines.Tradeline?.Remark?.customRemark || '',
          },
        },
      ];
    }
  }

  lookupAccountType(partition: ITradeLinePartition | undefined): string {
    if (!partition) return 'unknown';
    const description = partition.accountTypeDescription;
    const status =
      BRAVE_ACCOUNT_TYPE[`${partition.Tradeline?.PayStatus?.symbol}`];
    return partition.accountTypeSymbol?.toLowerCase() === 'y'
      ? description || 'No Data / Unknown'
      : status;
  }

  lookupOriginalCreditor(partition: ITradeLinePartition | undefined): string {
    if (!partition) return 'unknown';
    const originalCreditor =
      partition.Tradeline?.CollectionTrade?.originalCreditor;
    const creditorName = partition.Tradeline?.creditorName || 'unknown';
    if (partition.accountTypeSymbol?.toLowerCase() === 'y') {
      return originalCreditor ? originalCreditor : creditorName;
    } else {
      return creditorName;
    }
  }

  lookupDisputeFlag(partition: ITradeLinePartition | undefined): string {
    if (!partition) return 'No';
    const symbol = partition.Tradeline?.DisputeFlag?.description || 'not';
    return symbol.indexOf('not') === -1 ? 'Yes' : 'No';
  }
}

const defaultTradeline = {
  creditorName: '',
  lastReported: '',
  accountTypeDescription: '',
  accountTypeDescriptionValue: 'No account type',
  disputeFlag: 'Previously Disputed?',
  originalCreditor: 'Original Creditor',
  originalCreditorValue: '',
  disputeFlagValue: '',
  accountDetail: {
    accountNumber: '',
    typeOfCollection: '',
    amountPastDue: -1,
    dateOpened: '',
    dateLastPayment: '',
    remarks: '',
  },
};
