import { Pipe, PipeTransform } from '@angular/core';
import { DEFAULT_DISPUTE_STATUS_DISPLAY_INFO as defaultDisplayInfo } from './constants';
import { DisputeStatus } from './enums';
import { TDisputeStatusDisplayInfoArg } from './interfaces';

@Pipe({
  name: 'disputeCardStatus'
})
export class DisputeCardStatusPipe implements PipeTransform {

  transform(value: DisputeStatus, ...args: string[]): unknown {
    const typeOfOutput: TDisputeStatusDisplayInfoArg = args[0] as TDisputeStatusDisplayInfoArg;

    if (!typeOfOutput) {
      throw Error('DisputeCardStatusPipe needs atleast one argument!');
    }
    
    return defaultDisplayInfo[value][typeOfOutput]
  }

}
