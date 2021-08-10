import { Pipe, PipeTransform } from '@angular/core';
import { IPublicItemsDetailsConfig } from '@shared/components/publicitems/publicitems-details/interfaces';
import { IMergeReport, IPublicPartition } from '@shared/interfaces';

@Pipe({
  name: 'mergereportToPublicitems',
})
export class MergereportToPublicitemsPipe implements PipeTransform {
  transform(report: IMergeReport): IPublicItemsDetailsConfig[] | undefined {
    if (report === undefined) return;
    const publicrecords = report.TrueLinkCreditReportType?.PulblicRecordPartition;
    if (publicrecords === undefined) return;
    if (publicrecords instanceof Array) return publicrecords.map((item) => this.mapping(item));
    if (!(publicrecords instanceof Array)) return [this.mapping(publicrecords)];
    return;
  }

  mapping(item: IPublicPartition): IPublicItemsDetailsConfig {
    const publicRecord = item.PublicRecord instanceof Array ? item.PublicRecord[0] : item.PublicRecord; // schema says array but should not be;
    return {
      publicPartition: item,
      docketNumber: publicRecord?.referenceNumber || '--',
      courtName: publicRecord?.courtName || '--',
      courtLocation: publicRecord?.LegalItem?.CourtLocation?.description || '--',
      dateFiled: publicRecord?.dateFiled || '--',
      dateUpdated: publicRecord?.dateUpdated || '--',
      publicItemType: publicRecord?.Type?.description || '--',
      expirationDate: publicRecord?.ExpirationDate || '--',
    };
  }
}
