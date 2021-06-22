import { Pipe, PipeTransform } from '@angular/core';
export enum CreditReportStatus {
  Critical = 'critical',
  Danger = 'danger',
  Safe = 'safe',
  Default = 'default',
};

const enumStrColorCLassIndicator = {
  [CreditReportStatus.Danger]: 'brave-danger',
  [CreditReportStatus.Safe]: 'brave-safe',
  [CreditReportStatus.Critical]: 'brave-critical',
  [CreditReportStatus.Default]: 'lt-gray'
};

@Pipe({
  name: 'creditReportGraphic'
})
export class CreditReportGraphicPipe implements PipeTransform {
  private possibleStatusFromValue = [
    { 
      percentage: 25,
      status: CreditReportStatus.Safe,
    },
    {
      percentage: 50,
      status: CreditReportStatus.Danger
    },
    {
      percentage: 75,
      status: CreditReportStatus.Critical
    }
  ];

  private getPossibeStatusFromPercentage(value: number): string {
    let result = CreditReportStatus.Default;
    this.possibleStatusFromValue.reverse().forEach((possibleValue) => {
       if (value <= possibleValue.percentage) { result = possibleValue.status}
    });

    return result;
  }

  private possibleValues = [
    0, 1, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100
  ];

  private getAverageThresholdFromValue(value: number): number {
    let result: number = 0;
    this.possibleValues.forEach((possibleValue) => {
      if (value >= possibleValue) { result = possibleValue }
    });
    return result;
  }

  transform(value: number, ...args: string[]): string {
    const outputType: string = args[0]
    let result= '';
    if (outputType === 'css-class') {
      result = enumStrColorCLassIndicator[this.getPossibeStatusFromPercentage(value) as CreditReportStatus];
    } else if (outputType === 'margin-placement') {
      result = 'ml-' + this.getAverageThresholdFromValue(value).toString() + 'percent';
    } else if (outputType === 'status') {
      result = this.getPossibeStatusFromPercentage(value);
    }

    return result;
  }
}
