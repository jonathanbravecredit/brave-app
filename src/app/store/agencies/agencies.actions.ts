import { TransunionInput, TUStatusRefInput } from '@shared/services/aws/api.service';
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

export class EditTransunion {
  static readonly type = '[Agencies] EditTransunion';
  constructor(public payload: TransunionInput | Partial<TransunionInput>) {}
}

export class IncrementTransunionAuthAttempts {
  static readonly type = '[Agencies] IncrementTransunionAuthAttempts';
  constructor() {}
}

export class InitiateTransunionPinDetails {
  static readonly type = '[Agencies] InitiateTransunionPinDetails';
  constructor() {}
}

export class IncrementTransunionPinRequest {
  static readonly type = '[Agencies] IncrementTransunionPinRequest';
  constructor() {}
}

export class IncrementTransunionPinAttempts {
  static readonly type = '[Agencies] IncrementTransunionPinRequest';
  constructor() {}
}

export class InitiateTransunionKBADetails {
  static readonly type = '[Agencies] InitiateTransunionKBADetails';
  constructor() {}
}
