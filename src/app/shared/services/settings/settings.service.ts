import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '@shared/services/auth/auth.service';
import { InterstitialService } from '@shared/services/interstitial/interstitial.service';
import { DisputeService } from '@shared/services/dispute/dispute.service';
import { TransunionService } from '@shared/services/transunion/transunion.service';
import { ROUTE_NAMES as routes } from '@shared/routes/routes.names';
import * as _ from 'lodash';
const dayjs = require('dayjs');

@Injectable({
  providedIn: 'root',
})
export class SettingsService {
  constructor(
    private router: Router,
    private auth: AuthService,
    private dispute: DisputeService,
    private transunion: TransunionService,
    private interstitial: InterstitialService,
  ) {}

  /**
   * Submit email to cognito for change, if accepted returns true
   * @param email
   * @returns
   */
  async updateUserEmail(email: string): Promise<boolean> {
    try {
      return await this.auth.updateUserEmail(email);
    } catch (err) {
      throw `settingsService:updateUserEmail=${err}`;
    }
  }

  /**
   * Submit code sent by cognito for email change, if accepted returns true
   * @param code
   * @returns
   */
  async verifyUserEmail(code: string): Promise<boolean> {
    try {
      return await this.auth.verifyUserEmail(code);
    } catch (err) {
      throw `settingsService:verifyUserEmail=${err}`;
    }
  }

  async getUserEmail(): Promise<string> {
    try {
      return await this.auth.getUserEmail();
    } catch (err) {
      throw `settingsService:getUserEmail=${err}`;
    }
  }
  /**
   * Submit email to reset it...requires log out and log back in.
   * @param email
   * @returns
   */
  async forgotPassword(email: string): Promise<string> {
    try {
      return await this.auth.forgotPassword(email);
    } catch (err) {
      throw `settingService:forgotPassword=${err}`;
    }
  }

  /**
   * Submit the code and credentials to change the password
   * @param email
   * @param code
   * @param password
   * @returns
   */
  async forgotPasswordSubmit(email: string, code: string, password: string): Promise<any> {
    try {
      return await this.auth.forgotPasswordSubmit(email, code, password);
    } catch (err) {
      throw `settingService:forgotPasswordSubmit=${err}`;
    }
  }
  /**
   * Submit old and new password to change, if accepted returns true
   * @param oldPassword
   * @param newPassword
   * @returns
   */
  async resetPassword(oldPassword: string, newPassword: string): Promise<string> {
    try {
      return await this.auth.resetPassword(oldPassword, newPassword);
    } catch (err) {
      throw `settingService:resetPassword=${err}`;
    }
  }

  /**
   * Submit user for deletion, disables in cognito
   * @returns
   */
  async deactivateAccount(): Promise<string> {
    try {
      const disputes = await this.dispute.getDisputesByUser();
      if (disputes.success) {
        const { data } = disputes;
        if (!data) throw 'disputes confirmation failed';
        if (!data.length) {
          await this.handleDeactivation();
          return 'success';
        }
        const open = data.find((d) => d.disputeStatus.toLowerCase() === 'opendispute'); // if they have an open dispute, cannot close
        if (open) throw 'an open dispute';
        const complete = data.filter((d) => d.disputeStatus.toLowerCase() === 'completedispute'); // no open disputes...compolete or inprogress
        if (!complete.length) {
          await this.handleDeactivation();
        } else {
          const youngest = _.orderBy(complete, ['closedOn'], ['desc'])[0]; // youngest disputes
          const thirtDaysAgo = dayjs(new Date().toISOString()).add(-30, 'days');
          const test = dayjs(youngest.closedOn).isBefore(thirtDaysAgo);
          if (test) {
            await this.handleDeactivation();
          } else {
            throw 'younger than 30 days';
          }
        }
        return 'success';
      } else {
        throw 'no disputes';
      }
    } catch (err) {
      throw err;
    }
  }

  /**
   * Sign current user out
   * @returns
   */
  async signOut(): Promise<any> {
    try {
      await this.auth.signOut();
      this.interstitial.fetching$.next(false);
      this.router.navigate([routes.root.full]);
    } catch (err) {
      this.interstitial.fetching$.next(false);
      throw `settingService:signOut=${err}`;
    }
  }

  async handleDeactivation(): Promise<void> {
    try {
      const turesp = await this.transunion.sendTransunionAPICall('CancelEnrollment', JSON.stringify({}));
      if (turesp.success) {
        this.auth.deactivateAccount();
      } else {
        throw 'cancel enroll failed';
      }
    } catch (err) {
      throw err;
    }
  }
}
