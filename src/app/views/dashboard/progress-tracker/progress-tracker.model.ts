import { ICircleProgressStep } from "@shared/components/progressbars/circle-checktext-progressbar/circle-checktext-progressbar";
import {
  Initiative,
  InitiativeTask,
} from "@shared/interfaces/progress-tracker.interface";

export interface IProgressTrackerView {
  initiative: Initiative | null;
  goalId: string;
  steps: ICircleProgressStep[];
  initiativeTasks: InitiativeTask[];
  futureScore: number;
  enrolledScore: string | null | undefined;
  dashScore: number | null;
  dashDelta: number | null;
  enrolledOn: string | null | undefined;
  hasSelfLoan: boolean;
}
