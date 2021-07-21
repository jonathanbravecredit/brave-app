import { AgenciesStateModel } from '@store/agencies';

export class Add {
  static readonly type = '[Agencies] Add';
  constructor(public payload: AgenciesStateModel) {}
}

export class Edit {
  static readonly type = '[Agencies] Edit';
  constructor(public payload: AgenciesStateModel | Partial<AgenciesStateModel>) {}
}

export class Delete {
  static readonly type = '[Agencies] Delete';
  constructor() {}
}

export class EditTransunionQuestions {
  static readonly type = '[Agencies] EditTransunionQuestions';
  constructor(public payload: { currentRawQuestions: string }) {}
}

export class EditTransunionAuthDetails {
  static readonly type = '[Agencies] EditTransunionAuthDetails';
  constructor(public payload: { currentRawAuthDetails: string }) {}
}

export class EditTransunionReports {
  static readonly type = '[Agencies] EditTransunionReports';
  constructor(public payload: AgenciesStateModel | Partial<AgenciesStateModel>) {}
}
