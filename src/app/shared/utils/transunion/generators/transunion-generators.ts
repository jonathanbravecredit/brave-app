import { TUStatusRefInput } from '@shared/services/aws/api.service';
import { TUStatusRefStatuses } from '@shared/utils/transunion/constants';
import { TransunionBase } from '@shared/utils/transunion/transunion-base';

export class TransunionGenerators extends TransunionBase {
  constructor() {
    super();
  }

  /**
   * Helper method to generate the failed onboarding flow status
   * @param error
   * @returns
   */
  static createOnboardingStatus(process: string, successful: boolean): TUStatusRefInput {
    const now = new Date();
    return {
      id: successful ? 1 : 0,
      status: successful ? TUStatusRefStatuses.Success : TUStatusRefStatuses.Failed,
      statusDescription: `${process} status: ${successful ? TUStatusRefStatuses.Success : TUStatusRefStatuses.Failed}`,
      statusModifiedOn: now.toISOString(),
      statusCode: successful ? '1' : '0',
    };
  }
}
