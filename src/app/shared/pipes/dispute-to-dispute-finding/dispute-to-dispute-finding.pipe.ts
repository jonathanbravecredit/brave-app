import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'disputeToDisputeFinding'
})
export class DisputeToDisputeFindingPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
