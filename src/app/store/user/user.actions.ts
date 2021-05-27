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

// export class AddAttributes {
//   static readonly type = '[User] Add Attributes';
//   constructor(public payload: IUserAttributes) {}
// }

// export class EditAttributes {
//   static readonly type = '[User] Edit Attributes';
//   constructor(public payload: IUserAttributes | Partial<IUserAttributes>) {}
// }

// export class DeleteAttributes {
//   static readonly type = '[User] Delete Attributes';
//   constructor() {}
// }
