import * as _ from 'lodash';
import { ValidatorFn, AbstractControl, ValidationErrors } from '@angular/forms';
import { DAY_CONFIG, MONTH_CONFIG, YEAR_CONFIG } from '@shared/components/forms/base-form/base-form.constants';

export const dobValidator: ValidatorFn = (control: AbstractControl): ValidationErrors | null => {
  const day = control.get('day');
  const month = control.get('month');
  const year = control.get('year');
  if (!day) return { dayMissing: true };
  if (!month) return { monthMissing: true };
  if (!year) return { yearMissing: true };
  if (day.value.input === DAY_CONFIG.label) return { dayDefault: true };
  if (month.value.input === MONTH_CONFIG.label) return { monthDefault: true };
  if (year.value.input === YEAR_CONFIG.label) return { yearDefault: true };
  return null;
};
