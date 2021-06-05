import { OnboardingStateModel } from '@store/onboarding';

export class Add {
  static readonly type = '[Onboarding] Add';
  constructor(public payload: OnboardingStateModel) {}
}

export class Edit {
  static readonly type = '[Onboarding] Edit';
  constructor(public payload: OnboardingStateModel) {}
}

export class Delete {
  static readonly type = '[Onboarding] Delete';
  constructor() {}
}
