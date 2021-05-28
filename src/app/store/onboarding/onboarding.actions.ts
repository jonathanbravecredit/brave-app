import { Onboarding } from '@store/onboarding';

export class Add {
  static readonly type = '[Onboarding] Add';
  constructor(public payload: Onboarding) {}
}

export class Edit {
  static readonly type = '[Onboarding] Edit';
  constructor(public payload: Onboarding) {}
}

export class Delete {
  static readonly type = '[Onboarding] Delete';
  constructor() {}
}
