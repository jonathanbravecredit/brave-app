import { Injectable } from '@angular/core';
import { IResultsData } from '@shared/interfaces/common-ngx-charts.interface';
import {
  IGetTrendingData,
  IProductTrendingAttribute,
  IProductTrendingData,
} from '@shared/interfaces/get-trending-data.interface';
const dayjs = require('dayjs');

@Injectable({
  providedIn: 'root',
})
export class CreditScoreHistoryNgxChartService {
  constructor() {}

  transformTrendingData(trendingData: IGetTrendingData | null): any | undefined {
    let scores;
    let monthlyScores: { [key: string]: IProductTrendingData } = Object.assign({});
    if (
      trendingData?.ProductAttributes.ProductTrendingAttribute &&
      trendingData?.ProductAttributes.ProductTrendingAttribute instanceof Array
    ) {
      scores = trendingData?.ProductAttributes?.ProductTrendingAttribute?.filter(
        (a: IProductTrendingAttribute) => a.AttributeName?.indexOf('TUCVantageScore3V7') >= 0,
      )[0]?.ProductAttributeData?.ProductTrendingData;
    }

    if (scores && scores instanceof Array) {
      scores.forEach((data) => {
        let date = dayjs(data.AttributeDate).format('MMYYYY');
        if (!monthlyScores[date]) {
          monthlyScores[date] = data;
        } else {
          if (monthlyScores[date].AttributeDate < data.AttributeDate) {
            monthlyScores[date] = data;
          }
        }
      });

      scores = Object.values(monthlyScores);

      scores = scores.sort((a, b) => {
        return a.AttributeDate < b.AttributeDate ? -1 : 1;
      });
    }

    return scores || undefined;
  }

  createChartCreditScoreData(
    productAttributeData: IProductTrendingData[] | IProductTrendingData | null | undefined,
    currentCreditScore: number | undefined,
    lastUpdated: string | number | Date | undefined,
  ): IResultsData[] {
    const productAttribute = productAttributeData
      ? productAttributeData instanceof Array
        ? productAttributeData
        : [productAttributeData]
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
              name: dayjs(lastUpdated).format('MMM'),
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
          name: dayjs(productTrendingData.AttributeDate).format('MMM'),
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
