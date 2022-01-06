import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '@shared/services/auth/auth.service';
import { InterstitialService } from '@shared/services/interstitial/interstitial.service';
import { DisputeService } from '@shared/services/dispute/dispute.service';
import { TransunionService } from '@shared/services/transunion/transunion.service';
import { ROUTE_NAMES as routes } from '@shared/routes/routes.names';
import * as _ from 'lodash';
import * as moment from 'moment';

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
        if (!data || !data.length) throw 'no disputes';
        // if they have an open dispute, cannot close
        const open = data.find((d) => d.disputeStatus.toLowerCase() === 'opendispute');
        if (open) throw 'an open dispute';
        // no open disputes...compolete or inprogress
        const complete = data.filter((d) => d.disputeStatus.toLowerCase() === 'completedispute');
        if (!complete.length) {
          this.transunion.sendTransunionAPICall('CancelEnrollment', JSON.stringify({}));
          this.auth.deactivateAccount();
        } else {
          const youngest = _.orderBy(complete, ['closedOn'], ['desc'])[0]; // youngest disputes
          const thirtDaysAgo = moment(new Date().toISOString()).add(-30, 'days');
          const test = moment(youngest.closedOn).isBefore(thirtDaysAgo);
          if (test) {
            this.transunion.sendTransunionAPICall('CancelEnrollment', JSON.stringify({}));
            this.auth.deactivateAccount();
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
}
