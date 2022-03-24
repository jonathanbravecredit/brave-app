import { Pipe, PipeTransform } from '@angular/core';
import { ITradeLinePartition } from '@shared/interfaces';

@Pipe({
  name: 'creditMixFilterPipe',
})
export class CreditMixFilterPipePipe implements PipeTransform {
  transform(value: ITradeLinePartition[] | undefined, filterType: string): ITradeLinePartition[] | undefined {
    if (value) {
      if (filterType === 'credit card') {
        return value.filter((tradeline) => {
          return tradeline.accountTypeSymbol?.toLowerCase() === 'r';
        });
      } else if (filterType === 'mortgage') {
        return value.filter((tradeline) => {
          return tradeline.accountTypeSymbol?.toLowerCase() === 'm';
        });
      } else if (filterType === 'student loan') {
        return value.filter((tradeline) => {
          if (
            tradeline.Tradeline?.GrantedTrade.AccountType?.symbol?.toString().toLowerCase() === 'st' ||
            tradeline.Tradeline?.GrantedTrade.AccountType?.symbol?.toString().toLowerCase() === 'educ'
          ) {
            return true;
          } else return false;
        });
      } else if (filterType === 'auto loan') {
        return value.filter((tradeline) => {
          if (
            tradeline.Tradeline?.GrantedTrade.AccountType?.symbol?.toString().toLowerCase() === 'al' ||
            tradeline.Tradeline?.GrantedTrade.AccountType?.symbol?.toString().toLowerCase() === 'ar' ||
            tradeline.Tradeline?.GrantedTrade.AccountType?.symbol?.toString().toLowerCase() === 'at' ||
            tradeline.Tradeline?.GrantedTrade.AccountType?.symbol?.toString().toLowerCase() === 'au'
          ) {
            return true;
          } else return false;
        });
      }
    }
    return;
  }
}
