import { Pipe, PipeTransform } from '@angular/core';
import { IPersonalItemsDetailsTable } from '@views/dashboard/reports/credit-report/personalitems/personalitems-details/interfaces';
import { IBorrower } from '@shared/interfaces';
import { TransunionUtil as tu } from '@shared/utils/transunion/transunion';

@Pipe({
  name: 'personalitemsToDetails',
})
export class PersonalitemsToDetailsPipe implements PipeTransform {
  transform(personalItem: IBorrower): IPersonalItemsDetailsTable | undefined {
    if (personalItem === undefined) return;
    return tu.mapper.mapBorrowerToDetails(personalItem);
  }
}
