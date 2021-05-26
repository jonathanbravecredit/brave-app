import { Onboarding } from '@store/onboarding';

export class AppData {
  version: string;
  onboarding: Onboarding;

  constructor() {
    this.version = 'v1';
    this.onboarding = {} as Onboarding;
  }
}
