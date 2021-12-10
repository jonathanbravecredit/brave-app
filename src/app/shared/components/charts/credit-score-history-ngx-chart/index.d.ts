export interface ICreditScoreHistoryNgxChart extends ICreditScoreHistoryNgxChartInputs {
  chart: any;
  multi: IResultsData[] | undefined;
  legend: boolean;
  showLabels: boolean;
  xAxis: boolean;
  yAxis: boolean;
  yAxisTicks: number[];
  yScaleMin: number;
  yScaleMax: number;
  showYAxisLabel: boolean;
  showXAxisLabel: boolean;
  tooltipDisabled: boolean;
  xAxisLabel: string;
  yAxisLabel: string;
  timeline: boolean;
  showRefLines: boolean;
  referenceLines: object[];
  showGridLines: boolean;
  trimXAxisTicks: boolean;
  data: {}[] | undefined;
  colorScheme: {
    domain: string[];
  };
}

export interface ICreditScoreHistoryNgxChartInputs {
  view?: [number, number];
  trends: IGetTrendingData | null;
  report: IMergeReport | undefined;
  lastUpdated: number | string | Date | undefined;
  currentCreditScore: number | null | undefined;
}
