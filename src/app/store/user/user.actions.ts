import { IUserAttributes, User } from '@store/user';

export class Add {
  static readonly type = '[User] Add';
  constructor(public payload: User) {}
}

export class Edit {
  static readonly type = '[User] Edit';
  constructor(public payload: User | Partial<User>) {}
}

export class Delete {
  static readonly type = '[User] Delete';
  constructor() {}
}
