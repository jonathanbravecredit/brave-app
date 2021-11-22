import { IBreachCard } from '@views/dashboard/snapshots/data-breaches/components/data-breach-card/interfaces';

export class DashboardStateModel {
  isLoaded: boolean = false;
  negativeFlagged?: boolean;
  negativeCardCount?: number;
  negativeCardStatus?: string;
  negativeReviewed?: boolean;
  negativeStatus?: DashboardStatus;
  forbearanceFlagged?: boolean;
  forbearanceCardStatus?: string;
  forbearanceReviewed?: boolean;
  forbearanceStatus?: DashboardStatus;
  databreachFlagged?: boolean;
  databreachCards?: IBreachCard[];
  databreachCardStatus?: string;
  databreachReviewed?: boolean;
  databreachStatus?: DashboardStatus;
}

export enum DashboardStatus {
  Fresh = 'fresh',
  Stale = 'stale',
}
