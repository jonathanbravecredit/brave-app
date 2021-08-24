import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'accountNumberMask',
})
export class AccountNumberMaskPipe implements PipeTransform {
  transform(value: string | number | undefined): string | undefined {
    if (value === undefined) return value;
    const isNumber = typeof value == 'number';
    let account = isNumber ? value.toString() : (value as string);
    const length = account.length;
    if (length > 7) {
      account = account.replace(/.{4}$/g, '****');
      return account;
    } else if (length > 3) {
      account = account.replace(/.{2}$/g, '**');
      return account;
    } else {
      return account;
    }
  }
}
