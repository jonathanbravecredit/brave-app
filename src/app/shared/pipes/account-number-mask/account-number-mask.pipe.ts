import { Pipe, PipeTransform } from '@angular/core';
import { TransunionUtil as tu } from '@shared/utils/transunion/transunion';

@Pipe({
  name: 'accountNumberMask',
})
export class AccountNumberMaskPipe implements PipeTransform {
  transform(value: string | number | undefined): string | undefined {
    if (value === undefined) return tu.bcMissing;
    const isNumber = typeof value == 'number';
    let account = isNumber ? value.toString() : (value as string);
    const length = account.length;
    if (length > 7) {
      account = account.replace(/.{4}$/g, '****');
      return account;
    } else if (length > 3) {
      account = account.replace(/.{2}$/g, '**');
      return account;
    } else if (length > 0) {
      return account;
    } else {
      return tu.bcMissing;
    }
  }
}
