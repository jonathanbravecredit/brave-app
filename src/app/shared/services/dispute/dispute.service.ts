import { Injectable } from '@angular/core';
import { IEnrollResult, IEnrollServiceProductResponse } from '@shared/interfaces/enroll.interface';
import { IFulfillResult } from '@shared/interfaces/fulfill.interface';
import { APIService, UpdateAppDataInput } from '@shared/services/aws/api.service';
import { returnNestedObject } from '@shared/utils/utils';
import { AppDataStateModel } from '@store/app-data';

@Injectable({
  providedIn: 'root'
})
export class DisputeService {

  constructor(api: APIService) { }

  refreshReport(): void {}
  sendFulfillRequest(data: UpdateAppDataInput | AppDataStateModel): void {

  }

  /**
   * This method parses and enriches the state data
   * @param {AppDataStateModel | UpdateAppDataInput} state
   * @param {IEnrollResponse} enroll
   * @returns
   */
   enrichFulfillData(
    state: UpdateAppDataInput | undefined,
    fulfill: IFulfillResult
  ): AppDataStateModel | UpdateAppDataInput | undefined {
    if (!state) return;
     let fulfillReport;
    let fulfillMergeReport;
    let fulfillVantageScore;
    console.log('enroll in enrich', fulfill, state);
    const prodResponse = returnNestedObject(fulfill, 'ServiceProductResponse');
    if (!prodResponse) return;
    if (prodResponse instanceof Array) {
      fulfillReport = prodResponse.find(
        (item: TUReportResponse) => {
          return item['ServiceProduct'] === 'TUCReport';
        }
      );
      fulfillMergeReport = prodResponse.find(
        (item: TUReportResponse) => {
          return item['ServiceProduct'] === 'MergeCreditReports';
        }
      );
      fulfillVantageScore = prodResponse.find(
        (item: TUReportResponse) => {
          return item['ServiceProduct'] === 'TUCVantageScore3';
        }
      );
    } else {
      switch (prodResponse['ServiceProduct']) {
        case 'TUCReport':
          fulfillReport = prodResponse || null;
          break;
        case 'MergeCreditReports':
          fulfillMergeReport = prodResponse || null;
          break;
        case 'TUCVantageScore3':
          fulfillVantageScore = prodResponse || null;
          break;
        default:
          break;
      }
    }
    return {
      ...state,
      agencies: {
        ...state.agencies,
        transunion: {
          ...state.agencies?.transunion,
          fulfillReport: mapFulfillResponse(fulfillReport),
          fulfillMergeReport: mapFulfillResponse(fulfillMergeReport),
          fulfillVantageScore: mapFulfillResponse(fulfillVatnageScore),
        },
      },
    };
  }
}


// TODO use a pascal to camel converter
const mapFulfillResponse = (res: any): TUReportResponse => {
  return {
    bureau: res['Bureau'],
    errorResponse: res['ErrorResponse'],
    serviceProduct: res['ServiceProduct'],
    serviceProductFullfillmentKey: res['ServiceProductFulfillmentKey'],
    serviceProductObject: JSON.stringify(res['ServiceProductObject']),
    serviceProductTypeId: res['ServiceProductTypeId'],
    serviceProductValue: res['ServiceProductValue'],
    status: res['Status'],
  } as TUReportResponse;
};
