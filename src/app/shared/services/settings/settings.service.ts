import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '@shared/services/auth/auth.service';

@Injectable({
  providedIn: 'root',
})
export class SettingsService {
  constructor(private router: Router, private auth: AuthService) {}

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
  async resetPassword(oldPassword: string, newPassword: string): Promise<string> {
    try {
      return await this.auth.resetPassword(oldPassword, newPassword);
    } catch (err) {
      throw `settingService:resetPassword=${err.message}`;
    }
  }

  /**
   * Submit user for deletion, disables in cognito
   * @returns
   */
  async deactivateAccount(): Promise<string> {
    try {
      const resp = this.auth.deactivateAccount();
      this.auth.signOut();
      return resp;
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
      await this.auth.signOut();
      this.router.navigate(['/']);
    } catch (err) {
      throw `settingService:signOut=${err}`;
    }
  }
}
