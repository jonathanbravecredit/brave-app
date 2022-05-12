import { Pipe, PipeTransform } from "@angular/core";
import { IPersonalItemsDetailsConfig } from "@views/dashboard/reports/credit-report/personalitems/components/personalitems-details/interfaces";

@Pipe({
  name: "filterArray",
})
export class FilterArrayPipe implements PipeTransform {
  transform(array: any[] | undefined, filter: (arg0: any) => any): any {
    if (!array) return [];
    return array.filter((item) => {
      return filter(item);
    });
  }
}
