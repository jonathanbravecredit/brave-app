import { BraveBase } from '@shared/utils/brave/brave-base';
import { deleteKeyNestedObject } from '@shared/utils/utils';
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
    let clean = deleteKeyNestedObject(data, '__typename');
    delete clean.createdAt; // this is a graphql managed field
    delete clean.updatedAt; // this is a graphql managed field
    delete clean.owner; // this is a graphql managed field
    return clean;
  }
}
