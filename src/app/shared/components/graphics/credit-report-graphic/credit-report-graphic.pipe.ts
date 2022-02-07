import { Pipe, PipeTransform } from '@angular/core';
export enum CreditReportStatus {
  VeryPoor = 'Very Poor',
  Poor = 'Poor',
  Fair = 'Fair',
  Good = 'Good',
  Excellent = 'Excellent',
  Default = 'no score',
}

@Pipe({
  name: 'creditReportGraphic',
})
export class CreditReportGraphicPipe implements PipeTransform {
  private possibleStatusFromValue = [
    {
      percentage: 1,
      status: CreditReportStatus.VeryPoor,
    },
    {
      percentage: 300,
      status: CreditReportStatus.VeryPoor,
    },
    {
      percentage: 500,
      status: CreditReportStatus.Poor,
    },
    {
      percentage: 601,
      status: CreditReportStatus.Fair,
    },
    {
      percentage: 661,
      status: CreditReportStatus.Good,
    },
    {
      percentage: 781,
      status: CreditReportStatus.Excellent,
    },
  ];

  private possibleValues = [0, 1, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100];

  private getStatusFromCurrentValue(value: number | undefined): string {
    if (value === undefined) return CreditReportStatus.Default;
    let result = CreditReportStatus.Default;
    this.possibleStatusFromValue.forEach((possibleValue) => {
      if (value >= possibleValue.percentage) {
        result = possibleValue.status;
      }
    });

    return result;
  }

  private getAverageThresholdFromValue(value: number | undefined): number {
    if (value === undefined) return 50;
    let result = 0;
    this.possibleValues.forEach((possibleValue) => {
      if (value >= possibleValue) {
        result = possibleValue;
      }
    });
    return result;
  }

  transform(value: number | undefined, ...args: string[]): string {
    const outputType: string = args[0];
    let result = '';
    if (outputType === 'margin-placement') {
      result = 'ml-' + this.getAverageThresholdFromValue(value).toString() + 'percent';
    } else if (outputType === 'status') {
      result = this.getStatusFromCurrentValue(value);
    }

    return result;
  }
}
