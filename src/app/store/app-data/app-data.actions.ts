import { AppDataStateModel } from '@store/app-data/app-data.model';

export class Fetch {
  static readonly type = '[AppData] Fetch';
  constructor() {}
}

export class Add {
  static readonly type = '[AppData] Add';
  constructor(public payload: AppDataStateModel) {}
}

export class Edit {
  static readonly type = '[AppData] Edit';
  constructor(public payload: AppDataStateModel) {}
}

export class Delete {
  static readonly type = '[AppData] Delete';
  constructor() {}
}
