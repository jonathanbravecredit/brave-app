import { DataBreaches } from '@shared/utils/constants';
import { DashboardStateModel } from '@store/dashboard/dashboard.model';
import { IBreachCard } from '@views/dashboard/snapshots/data-breaches/components/data-breach-card/interfaces';

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

export class FlagNegativeSnapshot {
  static readonly type = '[Dashboard] FlagNegativeSnapshot';
  constructor() {}
}

export class UnflagNegativeSnapshot {
  static readonly type = '[Dashboard] UnflagNegativeSnapshot';
  constructor() {}
}

export class FlagForbearanceSnapshot {
  static readonly type = '[Dashboard] FlagForbearanceSnapshot';
  constructor() {}
}

export class UnflagForbearanceSnapshot {
  static readonly type = '[Dashboard] UnflagForbearanceSnapshot';
  constructor() {}
}

export class FlagDatabreachSnapshot {
  static readonly type = '[Dashboard] FlagDatabreachSnapshot';
  constructor() {}
}

export class UnflagDatabreachSnapshot {
  static readonly type = '[Dashboard] UnflagDatabreachSnapshot';
  constructor() {}
}

export class AddDatabreachCards {
  static readonly type = '[Dashboard] AddDatabreachCards';
  constructor(public payload: IBreachCard[]) {}
}

export class MarkDatabreachAsReviewed {
  static readonly type = '[Dashboard] MarkDatabreachAsReviewed';
  constructor(public payload: number) {}
}
