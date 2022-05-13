import { ValidatorFn, AbstractControl, ValidationErrors } from '@angular/forms';

export const autocompleteValidator: ValidatorFn = (control: AbstractControl): ValidationErrors | null => {
  const state = control.get('state');
  if (!state) return { missingState: true };
  const { value } = state;
  if (!value) return { missingStateValue: true };
  if (value.input == 'State') return { defaultSelected: true };
  return null;
};
