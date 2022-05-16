import { BraveBase } from '@shared/utils/brave/brave-base';
import { Nested as _nest } from '@bravecredit/brave-sdk';
import { AppDataStateModel } from '@store/app-data';

export class BraveScrubbers extends BraveBase {
  constructor() {
    super();
  }

  /**
   * Removes the '__typename' fields from query results
   * @param {GetAppDataQuery} data
   * @returns
   */
  static scrubBackendData(data: any): AppDataStateModel {
    let clean = _nest.delete(data, '__typename');
    clean = _nest.delete(clean, 'isFresh');
    delete clean.createdAt; // this is a graphql managed field
    delete clean.updatedAt; // this is a graphql managed field
    delete clean.owner; // this is a graphql managed field
    return clean;
  }
}
