import { CreateAppDataInput } from '@shared/services/aws/api.service';
import { BraveUtil } from '@shared/utils/brave/brave';
import { BraveBase } from '@shared/utils/brave/brave-base';
import {
  AppStatus,
  AppStatusReason,
  AppStatusReasonDescriptions,
  INIT_DATA,
  INIT_ONBOARDING_STATE,
} from '@shared/utils/brave/constants';
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
   * Generate the initial onboarding state
   * @returns
   */
  static createInitOnboardingState(): {
    lastActive: number;
    lastComplete: number;
    started: boolean;
  } {
    return INIT_ONBOARDING_STATE;
  }

  /**
   * Generic Method to generate the state for an account suspended due to a provided reasons
   * - duration is in hours
   * @param { status, reason, duration}
   * @returns
   */
  static createSuspendedStatus({
    status,
    reason,
    duration,
  }: {
    status: AppStatus;
    reason: AppStatusReason;
    duration: number;
  }): IAppStatus {
    const now = new Date();
    return {
      status: status,
      statusReason: reason,
      statusReasonDescription: AppStatusReasonDescriptions[reason],
      lastStatusModifiedOn: now.toISOString(),
      nextStatusModifiedOn: addHoursToDate(now, duration).toISOString(),
    };
  }
}
