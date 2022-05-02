import { TransunionBase } from '@shared/utils/transunion/transunion-base';
import { Nested as _nest } from '@bravecredit/brave-sdk';
import { AppDataStateModel } from '@store/app-data';

export class TransunionScrubbers extends TransunionBase {
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
    clean = _nest.delete(data, 'isFresh');
    delete clean.__typename;
    delete clean.createdAt; // this is a graphql managed field
    delete clean.updatedAt; // this is a graphql managed field
    delete clean.owner; // this is a graphql managed field
    return clean;
  }

  static scrubAddressStreets(str: string): string {
    return str.replace(/[^a-zA-Z0-9\@\' \.\,\#\-\:\;]/gim, '');
  }

  static scrubCities(str: string): string {
    const scrubbed = str.replace(/[^A-Za-z ]/gm, '');
    return `${scrubbed[0].toUpperCase()}${scrubbed.substring(1).toLowerCase()}`;
  }

  static scrubName(str: string): string {
    const scrubbed = str.replace(/[A-Za-z' -]/gm, '');
    return `${scrubbed[0].toUpperCase()}${scrubbed.substring(1).toLowerCase()}`;
  }
}
