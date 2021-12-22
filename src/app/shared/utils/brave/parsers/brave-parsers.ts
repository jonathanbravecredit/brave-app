import { IMergeReport } from '@shared/interfaces';
import { TransunionInput } from '@shared/services/aws/api.service';
import { BraveBase } from '@shared/utils/brave/brave-base';
import { deleteKeyNestedObject } from '@shared/utils/utils';
import { AppDataStateModel } from '@store/app-data';

export class BraveParsers extends BraveBase {
  constructor() {
    super();
  }

  static parseTransunionMergeReport(transunion: TransunionInput | null | undefined): IMergeReport {
    if (!transunion) return JSON.parse('{}');
    const fulfillMergeReport = transunion.fulfillMergeReport;
    const enrollMergeReport = transunion.enrollMergeReport;
    // const serviceProductString = fulfillMergeReport
    //   ? fulfillMergeReport?.serviceProductObject || '{}'
    //   : enrollMergeReport?.serviceProductObject || '{}';
    // const serviceProductObject: IMergeReport = JSON.parse(serviceProductString);
    // return serviceProductObject ? serviceProductObject : ({} as IMergeReport);
    //HOT FIX enroll report priotity for now
    const serviceProductString = enrollMergeReport
      ? enrollMergeReport?.serviceProductObject || '{}'
      : fulfillMergeReport?.serviceProductObject || '{}';
    const serviceProductObject: IMergeReport = JSON.parse(serviceProductString);
    return serviceProductObject ? serviceProductObject : ({} as IMergeReport);
  }
}
