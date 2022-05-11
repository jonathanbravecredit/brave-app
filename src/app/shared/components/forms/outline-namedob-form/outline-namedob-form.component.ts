import { Component, OnInit } from '@angular/core';
import { FormBuilder, AbstractControl } from '@angular/forms';
import { BaseFormComponent } from '@shared/components/forms/base-form/base-form.component';

@Component({
  selector: 'brave-outline-namedob-form',
  templateUrl: './outline-namedob-form.component.html',
  providers: [{ provide: 'name', useValue: 'namedob-form' }],
})
export class OutlineNamedobFormComponent
  extends BaseFormComponent
  implements OnInit {

  constructor(fb: FormBuilder) {
    super(fb, 'namedob-form');
  }

  dayValidator(control: AbstractControl) {
    console.log("here2");
    if (control.value.input === "Day") {
      return { invalidDay: true };
    }
    return null;
  }

  monthValidator(control: AbstractControl) {
    if (control.value.input === "Month") {
      return { invalidMonth: true };
    }
    return null;
  }

  yearValidator(control: AbstractControl) {
    if (control.value.input === "Year") {
      return { invalidYear: true };
    }
    return null;
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
