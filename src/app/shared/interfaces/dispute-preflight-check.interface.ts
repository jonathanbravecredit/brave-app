import { IErrorResponse } from '@shared/interfaces/errors.interface';

export interface IDisputePreflightCheck {
  DisputePreflightCheck: {
    eligible: boolean;
    error?: IErrorResponse;
  };
}
