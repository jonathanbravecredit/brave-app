import { Injectable } from '@angular/core';
import { ICreditScore } from '@shared/interfaces';
import { IResultsData } from '@shared/interfaces/common-ngx-charts.interface';
import { ICreditScoreTracking } from '@shared/interfaces/credit-score-tracking.interface';
import {
  IGetTrendingData,
  IProductAttributeData,
  IProductTrendingAttribute,
  IProductTrendingData,
} from '@shared/interfaces/get-trending-data.interface';
import { TransunionService } from '@shared/services/transunion/transunion.service';
import * as moment from 'moment';

@Injectable({
  providedIn: 'root',
})
export class CreditScoreHistoryNgxChartService {
  constructor(private transunion: TransunionService) {}

  transformTrendingData(trendingData: IGetTrendingData | null): IProductAttributeData | undefined {
    let scores;
    if (trendingData?.ProductAttributes.ProductTrendingAttribute instanceof Array) {
      scores = trendingData?.ProductAttributes.ProductTrendingAttribute.filter(
        (a: IProductTrendingAttribute) => a.AttributeName.indexOf('TUCVantageScore3V7') >= 0,
      )[0];
    }
    if (scores) {
      return scores.ProductAttributeData;
    } else {
      return undefined
    }
  }

  createChartCreditScoreData(
    productAttributeData: IProductAttributeData | null | undefined,
    currentCreditScore: number | undefined,
    lastUpdated: string | number | Date | undefined,
  ): IResultsData[] {
    const productAttribute = productAttributeData
      ? productAttributeData?.ProductTrendingData instanceof Array
        ? productAttributeData.ProductTrendingData
        : [productAttributeData?.ProductTrendingData]
      : [];

    const filteredProductAttributeDate = productAttribute.filter((data) => {
      return data?.AttributeStatus !== 'Failure';
    });
    
    if (!productAttributeData || filteredProductAttributeDate.length === 0) {
      return [
        {
          name: 'Credit Score',
          series: [
            {
              name: moment(lastUpdated).format('MMM'),
              value: currentCreditScore!,
            },
          ],
        },
      ];
    }

    let creditScoreDataObj: IResultsData = {
      name: 'Credit Score',
      series: [],
    };

    for (let productTrendingData of filteredProductAttributeDate) {
      if (productTrendingData) {
        let object = {
          name: moment(productTrendingData.AttributeDate).format('MMM'),
          value: +productTrendingData.AttributeValue,
        };
        creditScoreDataObj.series.push(object);
      }
    }

    // if (creditScoreDataObj.series.length > 8) {
    //   creditScoreDataObj.series = creditScoreDataObj.series.splice(0, 8);
    // }

    return [creditScoreDataObj];
  }
}
