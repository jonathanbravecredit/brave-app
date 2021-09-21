import { ITUServiceResponse } from '@shared/interfaces/common-tu.interface';
import { TUStatusRefInput } from '@shared/services/aws/api.service';
import { TUStatusRefStatuses } from '@shared/utils/transunion/constants';
import { TransunionBase } from '@shared/utils/transunion/transunion-base';
import * as uuid from 'uuid';

export class TransunionGenerators extends TransunionBase {
  constructor() {
    super();
  }

  /**
   * Helper method to generate the failed onboarding flow status
   * @param error
   * @returns
   */
  static createOnboardingStatus(
    process: string,
    successful: boolean,
    resp?: ITUServiceResponse<any | undefined>,
  ): TUStatusRefInput {
    const now = new Date();
    const code = resp ? resp.error?.Code || '-1' : successful ? '1' : '-1';
    const description = resp
      ? resp.error?.Message ||
        `${process} status: ${successful ? TUStatusRefStatuses.Success : TUStatusRefStatuses.Failed}`
      : `${process} status: ${successful ? TUStatusRefStatuses.Success : TUStatusRefStatuses.Failed}`;
    return {
      id: uuid.v4(),
      status: successful ? TUStatusRefStatuses.Success : TUStatusRefStatuses.Failed,
      statusDescription: description,
      statusModifiedOn: now.toISOString(),
      statusCode: `${code}`,
    };
  }
}
