import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { BaseFormComponent } from '@shared/components/forms/base-form/base-form.component';
import { IOutlineSelectInputConfig } from '@shared/components/inputs/outline-select-input/outline-select-input.component';

@Component({
  selector: 'brave-select-dob-form',
  templateUrl: './select-dob-form.component.html',
  providers: [{ provide: 'name', useValue: 'dob-form' }],
})
export class SelectDobFormComponent extends BaseFormComponent {
  monthConfig: IOutlineSelectInputConfig = {
    size: 'sm',
    label: 'Month',
    autocomplete: 'off',
    options: months,
  };
  dayConfig: IOutlineSelectInputConfig = {
    size: 'sm',
    label: 'Day',
    autocomplete: 'off',
    options: this.addDays(31),
  };
  yearConfig: IOutlineSelectInputConfig = {
    size: 'sm',
    label: 'Year',
    autocomplete: 'off',
    options: this.addYears(new Date().getFullYear()),
  };
  constructor(fb: FormBuilder) {
    super(fb, 'dob-form');
  }

  addDays(x: number): string[] {
    let days: string[] = [];
    for (let i = x; i > 0; i--) {
      days = [i.toString(), ...days];
    }
    return days;
  }

  addYears(x: number): string[] {
    let years: string[] = [];
    for (let i = x; i > x - 100; i--) {
      years = [...years, i.toString()];
    }
    return years;
  }
}

const months: string[] = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'Jun',
  'Jul',
  'Aug',
  'Sep',
  'Oct',
  'Nov',
  'Dec',
];
