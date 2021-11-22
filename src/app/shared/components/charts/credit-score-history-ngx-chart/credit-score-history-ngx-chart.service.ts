import { Injectable } from '@angular/core';
import { IResultsData } from '@shared/interfaces/common-ngx-charts.interface';
import { IGetTrendingData, IProductTrendingData } from '@shared/interfaces/get-trending-data.interface';
import { TransunionService } from '@shared/services/transunion/transunion.service';

@Injectable({
  providedIn: 'root'
})
export class CreditScoreHistoryNgxChartService {
  constructor(private transunion: TransunionService) { }

  async getTrendingData() {
    const now = new Date();
    now.setMonth(now.getMonth() - 12);
    const { success, data: { ProductAttributes } } = await this.transunion.getTrendingData(now.toISOString())

    console.log('SUCCESS =>>>>>>', success)

    if (success) {
      return ProductAttributes
    } else {
      return
    }
  }

  createChartCreditScoreData(getTrendingData: IGetTrendingData): IResultsData[] {

    console.log('HEERERERERER', getTrendingData)

    // debugger

    let dataArray: IProductTrendingData[] | IProductTrendingData = getTrendingData.ProductAttributes.ProductTrendingAttribute.ProductAttributeData.ProductTrendingData;

    console.log('DATAARRAY', dataArray)

    let creditScoreDataObj: IResultsData = {
      name: "Credit Score",
      series: [],
    };
    if (dataArray instanceof Array) {
      for (let productTrendingData of dataArray) {
        let object = {
          name: this.returnMonthAbreviation(
            +productTrendingData.AttributeDate.slice(5, 7)
          ),
          value: +productTrendingData.AttributeValue,
        };
        creditScoreDataObj.series.push(object);
      }
      if (creditScoreDataObj.series.length > 8) {
        creditScoreDataObj.series = creditScoreDataObj.series.splice(0, 8);
      }
    } else {
      let object = {
        name: this.returnMonthAbreviation(+dataArray.AttributeDate.slice(5, 7)),
        value: +dataArray.AttributeValue,
      };
      creditScoreDataObj.series.push(object);
    }
    return [creditScoreDataObj]
  }



  returnMonthAbreviation(monthNum: number): string {
    switch (monthNum) {
      case 1:
        return "Jan";
      case 2:
        return "Feb";
      case 3:
        return "Mar";
      case 4:
        return "Apr";
      case 5:
        return "May";
      case 6:
        return "Jun";
      case 7:
        return "Jul";
      case 8:
        return "Aug";
      case 9:
        return "Sep";
      case 10:
        return "Oct";
      case 11:
        return "Nov";
      default:
        return "Dec";
    }
  }
}
