import { BraveBase } from '@shared/utils/brave/brave-base';

export class BraveQueries extends BraveBase {
  constructor() {
    super();
  }

  static isUserValidAge(dob: string): boolean {
    const now = new Date();
    const nowYear = now.getFullYear();
    const nowMonth = now.getMonth();
    const nowDay = now.getDate();

    const dobDate = new Date(dob);
    const dobYear = dobDate.getFullYear();
    const dobMonth = dobDate.getMonth();
    const dobDay = dobDate.getDate();

    if (nowYear - dobYear > 18) return true;
    if (nowYear - dobYear === 18) {
      return nowMonth > dobMonth ? true : nowMonth === dobMonth ? (nowDay > dobDay ? true : false) : false;
    } else {
      return false;
    }
  }
}
