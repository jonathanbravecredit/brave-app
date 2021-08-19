import { TransunionDisputeSorters } from '@shared/utils/transunion/sorters/transunion-dispute-sorters';
import { TransunionReportSorters } from '@shared/utils/transunion/sorters/transunion-report-sorters';
import { TransunionBase } from '@shared/utils/transunion/transunion-base';

export class TransunionSorters extends TransunionBase {
  static report = TransunionReportSorters;
  static dispute = TransunionDisputeSorters;
  constructor() {
    super();
  }
}
