import { Pipe, PipeTransform } from '@angular/core';
import * as he from 'he';
@Pipe({
  name: 'decode',
})
export class DecodePipe implements PipeTransform {
  transform(value: string, ...args: unknown[]): string {
    return he.decode(he.decode(value));
  }
}
