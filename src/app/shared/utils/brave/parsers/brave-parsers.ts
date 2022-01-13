import { IMergeReport } from '@shared/interfaces';
import { TransunionInput } from '@shared/services/aws/api.service';
import { BraveBase } from '@shared/utils/brave/brave-base';

export class BraveParsers extends BraveBase {
  constructor() {
    super();
  }

  static parseTransunionMergeReport(transunion: TransunionInput | null | undefined): IMergeReport {
    if (!transunion) return JSON.parse('{}');
    const fulfillMergeReport = transunion.fulfillMergeReport;
    const enrollMergeReport = transunion.enrollMergeReport;
    const serviceProductString: string | IMergeReport = (fulfillMergeReport
      ? fulfillMergeReport?.serviceProductObject || '{}'
      : enrollMergeReport?.serviceProductObject || '{}') as string | IMergeReport;
    const spo1: IMergeReport | string =
      typeof serviceProductString === 'string'
        ? JSON.parse(serviceProductString)
        : serviceProductString.TrueLinkCreditReportType
        ? serviceProductString
        : {};
    const spo2: IMergeReport = typeof spo1 === 'string' ? JSON.parse(spo1) : spo1.TrueLinkCreditReportType ? spo1 : {};
    return spo2 ? spo2 : ({} as IMergeReport);
  }
}
