import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
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
