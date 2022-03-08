import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'CircleChecktextProgressbar'
})
export class CircleChecktextProgressbarPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
