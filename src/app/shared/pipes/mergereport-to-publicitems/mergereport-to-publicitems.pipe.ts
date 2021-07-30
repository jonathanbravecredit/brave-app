import { Pipe, PipeTransform } from '@angular/core';
import { IMergeReport, IPublicPartition } from '@shared/interfaces';

@Pipe({
  name: 'mergereportToPublicitems',
})
export class MergereportToPublicitemsPipe implements PipeTransform {
  transform(report: IMergeReport): IPublicPartition[] | undefined {
    if (report === undefined) return;
    const publicrecords = report.TrueLinkCreditReportType?.PulblicRecordPartition;
    if (publicrecords === undefined) return;
    if (publicrecords instanceof Array) return publicrecords;
    if (!(publicrecords instanceof Array)) return [publicrecords];
    return;
  }
}
