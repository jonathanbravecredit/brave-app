import { UserAttributesInput } from '@shared/services/aws/api.service';
import { UserStateModel } from '@store/user/user.model';

export class Add {
  static readonly type = '[User] Add';
  constructor(public payload: UserStateModel) {}
}

export class Edit {
  static readonly type = '[User] Edit';
  constructor(public payload: UserStateModel | Partial<UserStateModel>) {}
}

export class Delete {
  static readonly type = '[User] Delete';
  constructor() {}
}

export class UpdateAttributes {
  static readonly type = '[UserAttributes] Edit';
  constructor(public payload: UserAttributesInput) {}
}
