import { IKbaMultipleChoiceConfig } from '@shared/components/inputs/kba-multiplechoice-input/kba-multiplechoice-input.component';
import { IOutlineInputeConfig } from '@shared/components/inputs/outline-input/outline-input.component';
import { IOutlineSelectInputConfig } from '@shared/components/inputs/outline-select-input/outline-select-input.component';

const addDays = (x: number): string[] => {
  let days: string[] = [];
  for (let i = x; i > 0; i--) {
    days = [i.toString(), ...days];
  }
  return days;
};

const addYears = (x: number): string[] => {
  let years: string[] = [];
  for (let i = x; i > x - 100; i--) {
    years = [...years, i.toString()];
  }
  return years;
};

const months: string[] = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

// TODO ensure you have all states
const states = [
  'AK',
  'AL',
  'AR',
  'AZ',
  'CA',
  'CO',
  'CT',
  'DE',
  'FL',
  'GA',
  'HI',
  'IA',
  'ID',
  'IL',
  'IN',
  'KS',
  'KY',
  'LA',
  'MA',
  'MD',
  'ME',
  'MI',
  'MN',
  'MO',
  'MS',
  'MT',
  'NC',
  'ND',
  'NE',
  'NH',
  'NJ',
  'NM',
  'NV',
  'NY',
  'OH',
  'OK',
  'OR',
  'PA',
  'RI',
  'SC',
  'SD',
  'TN',
  'TX',
  'UT',
  'VA',
  'VT',
  'WA',
  'WI',
  'WV',
  'WY',
];

export const ADDRESS_ONE_CONFIG: IOutlineInputeConfig = {
  size: 'sm',
  type: 'text',
  label: 'Street Address',
  placeholder: 'Street Address',
  autocomplete: 'address-line1',
};
export const ADDRESS_TWO_CONFIG: IOutlineInputeConfig = {
  size: 'sm',
  type: 'text',
  label: '',
  placeholder: 'Apt, Suite, Building, etc.',
  autocomplete: 'address-line2',
};
export const CITY_CONFIG: IOutlineInputeConfig = {
  size: 'sm',
  type: 'text',
  label: 'City',
  placeholder: 'City',
  autocomplete: 'address-level2',
};
export const STATE_CONFIG: IOutlineSelectInputConfig = {
  size: 'sm',
  label: 'State',
  autocomplete: 'address-level3',
  options: states,
};
export const ZIP_CONFIG: IOutlineInputeConfig = {
  size: 'sm',
  type: 'text',
  label: 'Zip',
  placeholder: 'Zip',
  autocomplete: 'postal-code',
};
export const FIRST_NAME_CONFIG: IOutlineInputeConfig = {
  size: 'sm',
  label: 'First Name',
  type: 'text',
  placeholder: 'First Name',
  autocomplete: 'give-name',
};
export const MIDDLE_NAME_CONFIG: IOutlineInputeConfig = {
  size: 'sm',
  label: 'Middle Name',
  type: 'text',
  placeholder: 'Middle',
  autocomplete: 'additional-name',
};
export const LAST_NAME_CONFIG: IOutlineInputeConfig = {
  size: 'sm',
  label: 'Last Name',
  type: 'text',
  placeholder: 'Last Name',
  autocomplete: 'family-name',
};
export const MONTH_CONFIG: IOutlineSelectInputConfig = {
  size: 'sm',
  label: 'Month',
  autocomplete: 'off',
  options: months,
};
export const DAY_CONFIG: IOutlineSelectInputConfig = {
  size: 'sm',
  label: 'Day',
  autocomplete: 'off',
  options: addDays(31),
};
export const YEAR_CONFIG: IOutlineSelectInputConfig = {
  size: 'sm',
  label: 'Year',
  autocomplete: 'off',
  options: addYears(new Date().getFullYear()),
};
export const KBA_CONFIG: IKbaMultipleChoiceConfig = {
  size: 'sm',
  type: 'text',
  label: '',
  placeholder: '',
  autocomplete: 'off',
};
export const PHONE_CONFIG: IOutlineInputeConfig = {
  size: 'sm',
  type: 'tel',
  label: 'Phone Number',
  placeholder: '(123) 456-7890',
  autocomplete: 'phone',
};
export const FULL_SSN: IOutlineInputeConfig = {
  size: 'sm',
  type: 'text',
  label: '',
  mask: 'XXX-XX-XXXX',
  unmask: '000-00-0000',
  maxLength: 11,
  minLength: 9,
  hidden: true,
  placeholder: 'XXX-XX-XXXX',
  autocomplete: 'off',
};
export const LAST_FOUR_SSN: IOutlineInputeConfig = {
  size: 'sm',
  type: 'text',
  label: '',
  mask: 'XXXX',
  unmask: '0000',
  maxLength: 4,
  minLength: 4,
  hidden: true,
  placeholder: 'XXXX',
  autocomplete: 'off',
};
export const CODE_CONFIG: IOutlineInputeConfig = {
  size: 'sm',
  type: 'text',
  label: 'Code',
  placeholder: '5-digit Code',
  autocomplete: 'off',
};
export const PASSWORD_CONFIG: IOutlineInputeConfig = {
  size: 'sm',
  label: 'Current Password',
  type: 'password',
  placeholder: 'Current Password',
  autocomplete: 'off',
};
export const NEW_PASSWORD_CONFIG: IOutlineInputeConfig = {
  size: 'sm',
  label: 'New Password',
  type: 'password',
  placeholder: 'New Password',
  autocomplete: 'off',
};
export const CONFIRM_PASSWORD_CONFIG: IOutlineInputeConfig = {
  size: 'sm',
  label: 'Confirm New Password',
  type: 'password',
  placeholder: 'Confirm New Password',
  autocomplete: 'off',
};
export const EMAIL_CONFIG: IOutlineInputeConfig = {
  size: 'sm',
  label: 'Email',
  type: 'email',
  placeholder: 'Email address',
  autocomplete: 'email',
};
