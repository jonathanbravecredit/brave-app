import { TransunionDisputeQueries } from '@shared/utils/transunion/queries/transunion-dispute-queries';
import { TransunionExceptionQueries } from '@shared/utils/transunion/queries/transunion-exception-queries';
import { TransunionReportQueries } from '@shared/utils/transunion/queries/transunion-report-queries';
import { TransunionBase } from '@shared/utils/transunion/transunion-base';

export class TransunionQueries extends TransunionBase {
  static dispute = TransunionDisputeQueries;
  static report = TransunionReportQueries;
  static exceptions = TransunionExceptionQueries;

  constructor() {
    super();
  }
}
