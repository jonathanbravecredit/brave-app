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

export class UpdateLastActive {
  static readonly type = '[Onboarding] UpdateLastActive';
  constructor(public payload: number) {}
}

export class UpdateLastComplete {
  static readonly type = '[Onboarding] UpdateLastComplete';
  constructor(public payload: number) {}
}
