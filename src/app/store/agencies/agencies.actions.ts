import { AgenciesStateModel } from '@store/agencies';

export class Add {
  static readonly type = '[Agencies] Add';
  constructor(public payload: AgenciesStateModel) {}
}

export class Edit {
  static readonly type = '[Agencies] Edit';
  constructor(
    public payload: AgenciesStateModel | Partial<AgenciesStateModel>
  ) {}
}

export class Delete {
  static readonly type = '[Agencies] Delete';
  constructor() {}
}

export class EditQuestions {
  static readonly type = '[Agencies] EditQuestions';
  constructor(public payload: string) {}
}
