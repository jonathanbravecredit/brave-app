import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { BaseFormComponent } from '@shared/components/forms/base-form/base-form.component';
import { IOutlineInputeConfig } from '@shared/components/inputs/outline-input/outline-input.component';
import { IOutlineSelectInputConfig } from '@shared/components/inputs/outline-select-input/outline-select-input.component';

@Component({
  selector: 'brave-outline-namedob-form',
  templateUrl: './outline-namedob-form.component.html',
  providers: [{ provide: 'name', useValue: 'namedob-form' }],
})
export class OutlineNamedobFormComponent
  extends BaseFormComponent
  implements OnInit {
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
  firstNameConfig: IOutlineInputeConfig = {
    size: 'sm',
    label: 'First Name',
    type: 'text',
    placeholder: 'First Name',
    autocomplete: 'give-name',
  };
  middleNameConfig: IOutlineInputeConfig = {
    size: 'sm',
    label: 'Middle Name',
    type: 'text',
    placeholder: 'Middle',
    autocomplete: 'additional-name',
  };
  lastNameConfig: IOutlineInputeConfig = {
    size: 'sm',
    label: 'Last Name',
    type: 'text',
    placeholder: 'Last Name',
    autocomplete: 'family-name',
  };

  constructor(fb: FormBuilder) {
    super(fb, 'namedob-form');
  }

  ngOnInit(): void {}
  ngOnDestroy(): void {}

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
