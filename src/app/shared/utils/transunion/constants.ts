export const PHONE_MAP: Record<string, any> = {
  AreaCode: true,
  Number: true,
  Extension: true,
};

export const NAME_MAP: Record<string, any> = {
  prefix: true,
  first: true,
  middle: true,
  last: true,
  suffix: true,
};

export const ADDRESS_LINE_1: Record<string, any> = {
  houseNumber: true,
  streetNumber: true,
  streetName: true,
  streetType: true,
  direction: true,
  unit: true,
};

export const ADDRESS_LINE_2: Record<string, any> = {
  city: true,
  stateCode: true,
  postalCode: true,
};

export enum CreditBureauFindingsType {
  Trade = 'tradeline',
  PublicRecord = 'publicrecord',
  PersonalInfo = 'personalinfo',
}

export const INVESTIGATION_RESULTS_CODE_MAPPING: { type: string; title: string }[] = [
  {
    type: 'deleted',
    title: 'DELETED',
  },
  {
    type: 'dispute_info_updated',
    title: 'DISPUTED INFORMATION UPDATED',
  },
  {
    type: 'info_updated',
    title: 'INFORMATION UPDATED',
  },
  {
    type: 'dispute_info_other_updated',
    title: 'DISPUTED INFORMATION UPDATED AND OTHER INFORMATION UPDATED',
  },
  {
    type: 'reinserted',
    title: 'REINSERTED',
  },
  {
    type: 'verified_updated',
    title: 'VERIFIED AND UPDATED',
  },
  {
    type: 'verified_accurate',
    title: 'VERIFIED AS ACCURATE',
  },
  {
    type: 'verified_accurate_updated',
    title: 'VERIFIED AS ACCURATE AND UPDATED',
  },
];
