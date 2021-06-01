import { Pipe, PipeTransform } from '@angular/core';
import { Status } from '@shared/components/cards/creditcard-card/creditcard-card.component';

@Pipe({
  name: 'accountStatus',
})
export class AccountStatusPipe implements PipeTransform {
  transform(value: Status): string {
    return statuses[value];
  }
}

const statuses: Record<Status, any> = {
  excellent: 'bg-teal-500',
  good: 'bg-amber-300',
  okay: 'bg-orange-500',
  poor: 'bg-rose-800',
};
