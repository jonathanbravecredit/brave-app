import { Component, OnInit } from '@angular/core';
import { Store } from '@ngxs/store';
import { INegativeAccountCardInputs } from '@shared/components/cards/negative-account-card/interfaces';
import { IFulfillResult, IFulfillServiceProductResponse } from '@shared/interfaces/fulfill.interface';
import { IMergeReport } from '@shared/interfaces/merge-report.interface';
import { TUReportResponseInput, UpdateAppDataInput } from '@shared/services/aws/api.service';
import { CreditreportService } from '@shared/services/creditreport/creditreport.service';
import { TransunionService } from '@shared/services/transunion/transunion.service';
import { returnNestedObject } from '@shared/utils/utils';
import { AppDataStateModel } from '@store/app-data';
import { Observable } from 'rxjs';

@Component({
  selector: 'brave-negative-account-initial',
  templateUrl: './negative-account-initial.component.html',
})
export class NegativeAccountInitialComponent {
  creditReport$: Observable<IMergeReport>;

  constructor(
    private store: Store,
    private transunion: TransunionService,
    private creditReportService: CreditreportService,
  ) {
    this.creditReport$ = this.creditReportService.tuReport$.asObservable();
  }

  /**
   * Listens for the Dispute confirmation and refreshes the report
   * @param card
   */
  async onConfirmed(card: INegativeAccountCardInputs): Promise<void> {
    const state = this.store.snapshot()['appData'];
    console.log('onConfirmed state', state);
    try {
      const res = await this.transunion.getCreditReport(state);
      if (!res) throw new Error(`Failed to refresh report; response:${res}`);
      const parsed = res ? JSON.parse(res) : undefined;
      const fulfillResult = returnNestedObject(JSON.parse(parsed.Fulfill), 'FulfillResult');
      const enrich = this.enrichFulfillData(state, fulfillResult);
      if (!enrich?.agencies) throw new Error('Fufill failed');
      const data = await this.creditReportService.updateReportAsync(enrich.agencies);
      console.log('updated state', data);
      if (!data) throw new Error('Failed to update state with refreshed report');
      const disputeStatus = await this.transunion.getDisputeStatus(data as AppDataStateModel);
      console.log('status back', disputeStatus);
    } catch (err) {
      throw new Error(err);
    }
  }

  /**
   * This method parses and enriches the state data
   * @param {AppDataStateModel | UpdateAppDataInput} state
   * @param {IFulfillResult} enroll
   * @returns {AppDataStateModel | UpdateAppDataInput | undefined }
   */
  enrichFulfillData(
    state: UpdateAppDataInput | undefined,
    fulfill: IFulfillResult, // IFulfillResult
  ): AppDataStateModel | UpdateAppDataInput | undefined {
    if (!state) return;
    let fulfillReport;
    let fulfillMergeReport;
    let fulfillVantageScore;
    const prodResponse = returnNestedObject(fulfill, 'ServiceProductResponse');
    if (!prodResponse) return;
    if (prodResponse instanceof Array) {
      fulfillReport = prodResponse.find((item: IFulfillServiceProductResponse) => {
        return item['ServiceProduct'] === 'TUCReport';
      });
      fulfillMergeReport = prodResponse.find((item: IFulfillServiceProductResponse) => {
        return item['ServiceProduct'] === 'MergeCreditReports';
      });
      fulfillVantageScore = prodResponse.find((item: IFulfillServiceProductResponse) => {
        return item['ServiceProduct'] === 'TUCVantageScore3';
      });
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
    const mapped = {
      ...state,
      agencies: {
        ...state.agencies,
        transunion: {
          ...state.agencies?.transunion,
          fulfillReport: mapFulfillResponse(fulfillReport),
          fulfillMergeReport: mapFulfillResponse(fulfillMergeReport),
          fulfillVantageScore: mapFulfillResponse(fulfillVantageScore),
        },
      },
    };
    console.log('mapped', mapped);
    return mapped;
  }
}

// TODO use a pascal to camel converter
const mapFulfillResponse = (res: any): TUReportResponseInput => {
  return {
    bureau: res['Bureau'],
    errorResponse: res['ErrorResponse'],
    serviceProduct: res['ServiceProduct'],
    serviceProductFullfillmentKey: res['ServiceProductFulfillmentKey'],
    serviceProductObject: JSON.stringify(res['ServiceProductObject']),
    serviceProductTypeId: res['ServiceProductTypeId'],
    serviceProductValue: res['ServiceProductValue'],
    status: res['Status'],
  } as TUReportResponseInput;
};
