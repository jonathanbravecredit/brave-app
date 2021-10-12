import { SnapshotStatus } from '@shared/components/cards/snapshot-display-card/snapshot-display-card.component';

export const PAY_STATUS_CODES: Record<string, any> = {
  U: `No Data / Unknown`,
  C: `Current`,
  '0': `Too New to Rate`,
  '1': `Late 30 Days`,
  '2': `Late 60 Days`,
  '3': `Late 90 Days`,
  '4': `Late 120 Days`,
  '7': `Wage Earner Plan`,
  '8R': `Repossesion`,
  '9': `Collection Chargeoff`,
};

export const NEGATIVE_PAY_STATUS_CODES: Record<string, string> = {
  '1': `Late 30 Days`,
  '2': `Late 60 Days`,
  '3': `Late 90 Days`,
  '4': `Late 120 Days`,
  '8R': `Repossesion`,
  '9': `Collection Chargeoff`,
};

export const POSITIVE_PAY_STATUS_CODES: Record<string, string> = {
  U: `No Data / Unknown`,
  C: `Current`,
  '0': `Too New to Rate`,
  '7': `Wage Earner Plan`,
};

export const BRAVE_ACCOUNT_TYPE: Record<string, any> = {
  '1': `30-Day Late Payment`,
  '2': `60-Day Late Payment`,
  '3': `90-Day Late Payment`,
  '4': `120-Day Late Payment`,
  '7': `Wage Earner Plan`,
  '8R': `Repossesion Account`,
  '9': `Collection Chargeoff Account`,
};

export const LATE_PAY_STATUS_CODES: Record<string, any> = {
  '1': `Late 30 Days`,
  '2': `Late 60 Days`,
  '3': `Late 90 Days`,
  '4': `Late 120 Days`,
};

export const ONTIME_PAY_STATUS_CODES: Record<string, any> = {
  C: `Current`,
};

export const UNKNOWN_PAY_STATUS_CODES: Record<string, any> = {
  U: `No Data / Unknown`,
};

export const TOO_NEW_STATUS_CODE: Record<string, any> = {
  '0': 'Too New to Rate',
};

export const LATE_30_STATUS_CODE: Record<string, any> = {
  '1': 'Late 30 Days',
};

export const LATE_60_STATUS_CODE: Record<string, any> = {
  '2': 'Late 60 Days',
};

export const LATE_90_STATUS_CODE: Record<string, any> = {
  '3': 'Late 90 Days',
};

export const LATE_120_STATUS_CODE: Record<string, any> = {
  '4': 'Late 120 Days',
};

export const COLLECTION_PAY_STATUS_CODES: Record<string, any> = {
  '9': `Collection Chargeoff Account`,
};

export const WAGE_EARNER_PAY_STATUS_CODES: Record<string, any> = {
  '7': `Wage Earner Plan`,
};

export const REPOSSESSION_PAY_STATUS_CODE: Record<string, any> = {
  '8R': `Repossession Account`,
};
