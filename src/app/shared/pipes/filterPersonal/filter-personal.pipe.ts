import { Pipe, PipeTransform } from '@angular/core';
import { IPersonalItemsDetailsConfig } from '@views/dashboard/reports/credit-report/personalitems/components/personalitems-details/interfaces';

@Pipe({
  name: 'filterPersonal',
})
export class FilterPersonalPipe implements PipeTransform {
  transform(
    personal: IPersonalItemsDetailsConfig[] | undefined,
    filter: (arg0: any) => any,
  ): IPersonalItemsDetailsConfig[] {
    if (!personal) return [];
    return personal.filter((item) => {
      return filter(item);
    });
  }
}
