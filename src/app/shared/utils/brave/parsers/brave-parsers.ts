import { IMergeReport } from '@shared/interfaces';
import { IGetTrendingData, IProductTrendingData } from '@shared/interfaces/get-trending-data.interface';
import { TransunionInput } from '@shared/services/aws/api.service';
import { BraveBase } from '@shared/utils/brave/brave-base';

export class BraveParsers extends BraveBase {
  constructor() {
    super();
  }

  static parseTransunionMergeReport(transunion: TransunionInput | null | undefined): IMergeReport {
    if (!transunion) return JSON.parse('{}');
    const fulfillMergeReport = transunion.fulfillMergeReport;
    const enrollMergeReport = transunion.enrollMergeReport;
    const serviceProductString: string | IMergeReport = (fulfillMergeReport
      ? fulfillMergeReport?.serviceProductObject || '{}'
      : enrollMergeReport?.serviceProductObject || '{}') as string | IMergeReport;
    const spo1: IMergeReport | string =
      typeof serviceProductString === 'string'
        ? JSON.parse(serviceProductString)
        : serviceProductString.TrueLinkCreditReportType
        ? serviceProductString
        : {};
    const spo2: IMergeReport = typeof spo1 === 'string' ? JSON.parse(spo1) : spo1.TrueLinkCreditReportType ? spo1 : {};
    return spo2 ? spo2 : ({} as IMergeReport);
  }

  /**
   * Parses the transunion trending data removing
   * - returns only the VantageScore3Vx
   * - Sorts it on return
   * @param data
   * @returns
   */
  static parseTransunionTrendingData(data: IGetTrendingData | null | undefined): IProductTrendingData[] {
    if (!data) return [];
    // if not array transform to array
    const trendAttrs = Array.isArray(data.ProductAttributes?.ProductTrendingAttribute)
      ? data.ProductAttributes?.ProductTrendingAttribute
      : [data.ProductAttributes?.ProductTrendingAttribute];

    const scores = trendAttrs.filter((a) => {
      return a.AttributeName.indexOf('VantageScore3') >= 0;
    })[0];

    return (Array.isArray(scores?.ProductAttributeData?.ProductTrendingData)
      ? scores?.ProductAttributeData?.ProductTrendingData
      : [scores?.ProductAttributeData?.ProductTrendingData]
    ).sort((a, b) => {
      return a.AttributeDate < b.AttributeDate ? -1 : 1;
    });
  }
}
