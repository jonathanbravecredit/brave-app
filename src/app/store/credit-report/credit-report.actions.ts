import { CreditReportStateModel } from '@store/credit-report/credit-report.model';

export class Add {
  static readonly type = '[CreditReport] Add';
  constructor(public payload: CreditReportStateModel) {}
}

export class Update {
  static readonly type = '[CreditReport] Update';
  constructor(public payload: CreditReportStateModel) {}
}

export class Delete {
  static readonly type = '[CreditReport] Delete';
  constructor() {}
}
