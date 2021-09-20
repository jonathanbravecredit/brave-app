import { CreateAppDataInput } from '@shared/services/aws/api.service';
import { BraveBase } from '@shared/utils/brave/brave-base';
import { AppStatus, AppStatusReason, AppStatusReasonDescriptions, INIT_DATA } from '@shared/utils/brave/constants';
import { IAppStatus } from '@shared/utils/brave/interfaces';
import { addHoursToDate } from '@shared/utils/dates';

export class BraveGenerators extends BraveBase {
  constructor() {
    super();
  }

  /**
   * Method to generate the initial state in the database
   * @param id User sub from cognito
   * @returns
   */
  static createNewUserData(id: string): CreateAppDataInput | undefined {
    if (!id) return;
    const now = new Date();
    const ninetyDays = 24 * 90;
    return {
      ...INIT_DATA,
      id: id,
      user: {
        ...INIT_DATA.user,
        id: id,
      },
      lastStatusModifiedOn: now.toISOString(),
      nextStatusModifiedOn: addHoursToDate(now, ninetyDays).toISOString(),
    };
  }

  /**
   * Method to generate the state for an account suspended due to an age restriction
   * @returns
   */
  static createSuspendedAgeRestrictionStatus(): IAppStatus {
    const now = new Date();
    const thirtydays = 24 * 30;
    return {
      status: AppStatus.Suspended,
      statusReason: AppStatusReason.AgeRestriction,
      statusReasonDescription: AppStatusReasonDescriptions[AppStatusReason.AgeRestriction],
      lastStatusModifiedOn: now.toISOString(),
      nextStatusModifiedOn: addHoursToDate(now, thirtydays).toISOString(),
    };
  }
}
