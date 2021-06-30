import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'parseTradelineDetails',
})
export class ParseTradelineDetailsPipe implements PipeTransform {
  transform(input: Record<string, any>, arg: string = ''): { label: string; value: string }[] {
    console.log('tradeline details pipe input', input);
    let mapper: Record<string, any>;
    switch (arg.toLowerCase()) {
      case 'c':
      case 'o':
      case 'r':
      case 'u':
        mapper = revolvingAccountMapping;
        break;
      case 'i':
      case 'm':
        mapper = installmentAccountMapping;
        break;
      case 'y':
        mapper = collectionAccountMapping;
        break;
      default:
        mapper = revolvingAccountMapping;
        break;
    }
    if (!input) return [];
    if (!Object.keys(input).length) return [];
    return Object.keys(input)
      .filter((k) => mapper[k])
      .map((k) => {
        return {
          label: mapper[k],
          value: input[k].toString(),
        };
      });
  }
}

const revolvingAccountMapping: Record<string, any> = {
  dateOpened: 'Opened:',
  accountDesignator: 'Responsibility:',
  late30Count: 'Times 30/60/90 Days Late:',
  late60Count: 'Times 30/60/90 Days Late:',
  late90Count: 'Times 30/60/90 Days Late:',
  amountPastDue: 'Amount Past Due:',
  disputeFlag: 'Disputed:',
};

const installmentAccountMapping: Record<string, any> = {
  dateOpened: 'Opened:',
  accountDesignator: 'Responsibility:',
  late30Count: 'Times 30/60/90 Days Late:',
  late60Count: 'Times 30/60/90 Days Late:',
  late90Count: 'Times 30/60/90 Days Late:',
  amountPastDue: 'Amount Past Due:',
  disputeFlag: 'Disputed:',
};

const collectionAccountMapping: Record<string, any> = {
  dateOpened: 'Opened:',
  accountDesignator: 'Responsibility:',
  late30Count: 'Times 30/60/90 Days Late:',
  late60Count: 'Times 30/60/90 Days Late:',
  late90Count: 'Times 30/60/90 Days Late:',
  amountPastDue: 'Amount Past Due:',
  disputeFlag: 'Disputed:',
};

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
