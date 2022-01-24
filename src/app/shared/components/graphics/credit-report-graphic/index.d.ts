export interface ICreditReportGraphic extends ICreditReportGraphicInputs {}

export interface ICreditReportGraphicInputs {
  base?: number;
  limit?: number;
  currentValue: number | null | undefined;
  ptsChange: number | string | undefined;
}
