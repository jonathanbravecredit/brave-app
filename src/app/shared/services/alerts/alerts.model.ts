export type AlertPositions =
  | "top-right"
  | "top-left"
  | "top-middle"
  | "bottom-right"
  | "bottom-left"
  | "bottom-middle"
  | "middle-middle";

export interface IAlertModel {
  name: string;
  position: AlertPositions;
  text: string;
  timed: boolean;
  timeout: number;
}
