import { TransunionDisputeParsers } from '@shared/utils/transunion/parsers/transunion-dispute-parsers';
import { TransunionOnboardingParsers } from '@shared/utils/transunion/parsers/transunion-onboarding-parsers';
import { TransunionReportParsers } from '@shared/utils/transunion/parsers/transunion-report-parsers';
import { TransunionBase } from '@shared/utils/transunion/transunion-base';

export class TransunionParsers extends TransunionBase {
  static dispute = TransunionDisputeParsers;
  static report = TransunionReportParsers;
  static onboarding = TransunionOnboardingParsers;

  constructor() {
    super();
  }
}
