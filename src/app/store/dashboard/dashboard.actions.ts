import { DashboardStateModel } from '@store/dashboard/dashboard.model';

export class Add {
  static readonly type = '[Dashboard] Add';
  constructor(public payload: DashboardStateModel) {}
}

export class Edit {
  static readonly type = '[Dashboard] Edit';
  constructor(public payload: DashboardStateModel | Partial<DashboardStateModel>) {}
}

export class Delete {
  static readonly type = '[Dashboard] Delete';
  constructor() {}
}

export class IncrementNegativeCardCount {
  static readonly type = '[Dashboard] IncrementNegativeCardCount';
  constructor() {}
}

export class DecrementNegativeCardCount {
  static readonly type = '[Dashboard] DecrementNegativeCardCount';
  constructor() {}
}

export class IncrementForbearanceCardCount {
  static readonly type = '[Dashboard] IncrementForbearanceCardCount';
  constructor() {}
}

export class DecrementForbearanceCardCount {
  static readonly type = '[Dashboard] DecrementForbearanceCardCount';
  constructor() {}
}

export class IncrementDatabreachCardCount {
  static readonly type = '[Dashboard] IncrementDatabreachCardCount';
  constructor() {}
}

export class DecrementDatabreachCardCount {
  static readonly type = '[Dashboard] DecrementDatabreachCardCount';
  constructor() {}
}
