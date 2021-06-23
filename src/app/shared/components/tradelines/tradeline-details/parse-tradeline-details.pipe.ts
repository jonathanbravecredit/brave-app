import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'parseTradelineDetails',
})
export class ParseTradelineDetailsPipe implements PipeTransform {
  transform(input: Record<string, any>): { label: string; value: string }[] {
    if (!input) return [];
    if (!Object.keys(input).length) return [];
    return Object.keys(input).map((k) => {
      return {
        label: labelMapping[k],
        value: input[k].toString(),
      };
    });
  }
}

const labelMapping: Record<string, any> = {
  originalCreditor: 'Original Creditor:',
  creditType: 'Type of Account:',
  dateOpened: 'Opened:',
  accountDesignator: 'Responsibility:',
  termMonths: 'Term:',
  late30Count: 'Times 30/60/90 Days Late:',
  late60Count: 'Times 30/60/90 Days Late:',
  late90Count: 'Times 30/60/90 Days Late:',
  amountPastDue: 'Amount Past Due:',
  disputeFlag: 'Disputed:',
};
