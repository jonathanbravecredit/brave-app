import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'ssnMask',
})
export class SsnMaskPipe implements PipeTransform {
  transform(value: string | number | undefined): string | undefined {
    if (value === undefined) return;
    let ssn = typeof value == 'number' ? value.toString() : (value as string);
    ssn = ssn.replace(/[^0-9]/g, '');
    return `***-**-${ssn.slice(-4)}`;
  }
}
