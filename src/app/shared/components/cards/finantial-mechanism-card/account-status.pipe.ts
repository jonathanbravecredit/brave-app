import { Pipe, PipeTransform } from '@angular/core';
import { TFinantialMechanismStatus } from './interfaces';

@Pipe({
  name: 'accountStatus',
})
export class AccountStatusPipe implements PipeTransform {
  transform(value: TFinantialMechanismStatus): string {
    return statuses[value];
  }
}

const statuses: Record<TFinantialMechanismStatus, any> = {
  excellent: 'bg-teal-500',
  good: 'bg-amber-300',
  okay: 'bg-orange-500',
  poor: 'bg-rose-800',
};
