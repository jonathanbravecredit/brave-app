import { Injectable } from '@angular/core';
import { AuthService } from '@shared/services/auth/auth.service';

@Injectable({
  providedIn: 'root',
})
export class SettingsService {
  constructor(private auth: AuthService) {}

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

  /**
   * Submit old and new password to change, if accepted returns true
   * @param oldPassword
   * @param newPassword
   * @returns
   */
  async resetPassword(oldPassword: string, newPassword: string): Promise<boolean> {
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
      return await this.auth.deactivateAccount();
    } catch (err) {
      throw `settingService:deactivateAccount=${err}`;
    }
  }

  /**
   * Sign current user out
   * @returns
   */
  async signOut(): Promise<any> {
    try {
      return await this.auth.signOut();
    } catch (err) {
      throw `settingService:signOut=${err}`;
    }
  }
}
