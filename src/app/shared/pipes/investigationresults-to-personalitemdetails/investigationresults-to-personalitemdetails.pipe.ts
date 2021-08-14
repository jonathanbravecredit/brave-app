import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'investigationresultsToPersonalitemdetails'
})
export class InvestigationresultsToPersonalitemdetailsPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
