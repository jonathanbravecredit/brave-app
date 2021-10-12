import { Pipe, PipeTransform } from '@angular/core';
import { IBorrower } from '@shared/interfaces';
import { TransunionUtil as tu } from '@shared/utils/transunion/transunion';
import { IPersonalItemsDetailsTable } from '@views/dashboard/reports/credit-report/personalitems/components/personalitems-details/interfaces';

@Pipe({
  name: 'personalitemsToDetails',
})
export class PersonalitemsToDetailsPipe implements PipeTransform {
  transform(personalItem: IBorrower): IPersonalItemsDetailsTable | undefined {
    if (personalItem === undefined) return;
    return tu.mappers.mapBorrowerToDetails(personalItem);
  }
}
