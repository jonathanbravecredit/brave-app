import { ITransunionErrorCode } from '@shared/interfaces/tu-error-codes.interface';
import { TRANSUNION_ERROR_CODES } from '@shared/utils/transunion/constants';
import { TransunionBase } from '@shared/utils/transunion/transunion-base';

export class TransunionExceptionQueries extends TransunionBase {
  constructor() {
    super();
  }

  static getErrorCodeDetails(code: string): ITransunionErrorCode {
    const detail = TRANSUNION_ERROR_CODES[code];
    return !detail
      ? TRANSUNION_ERROR_CODES['11'] // non-specific error
      : detail;
  }
}
