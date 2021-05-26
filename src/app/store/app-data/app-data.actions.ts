import { AppData } from '@store/app-data/app-data.model';

export class Add {
  static readonly type = '[AppData] Add';
  constructor(public payload: AppData) {}
}

export class Edit {
  static readonly type = '[AppData] Edit';
  constructor(public payload: AppData) {}
}

export class Delete {
  static readonly type = '[AppData] Delete';
  constructor() {}
}
