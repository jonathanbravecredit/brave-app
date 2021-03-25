import { AppData } from 'src/app/shared/models/app-data.model';

export class Add {
  static readonly type = '[AppData] Add';
  constructor(public payload: AppData) {}
}

export class Edit {
  static readonly type = '[AppData] Edit';
  constructor(public payload: AppData) {}
}

export class Fetch {
  static readonly type = '[AppData] Fetch';
  constructor(public payload: AppData) {}
}

export class Delete {
  static readonly type = '[AppData] Delete';
  constructor() {}
}
