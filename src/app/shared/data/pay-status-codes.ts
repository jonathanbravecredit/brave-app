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

export const NEGATIVE_PAY_STATUS_CODES: Record<string, any> = {
  '1': `Late 30 Days`,
  '2': `Late 60 Days`,
  '3': `Late 90 Days`,
  '4': `Late 120 Days`,
  '7': `Wage Earner Plan`,
  '8R': `Repossesion`,
  '9': `Collection Chargeoff`,
};

export const POSITIVE_PAY_STATUS_CODES: Record<string, any> = {
  U: `No Data / Unknown`,
  C: `Current`,
  '0': `Too New to Rate`,
};
