import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { BaseFormComponent } from '@shared/components/forms/base-form/base-form.component';
import { IOutlineInputeConfig } from '@shared/components/inputs/outline-input/outline-input.component';
import { Observable } from 'rxjs';

@Component({
  selector: 'brave-outline-ssn-lastfour-form',
  templateUrl: './outline-ssn-lastfour-form.component.html',
})
export class OutlineSsnLastfourFormComponent extends BaseFormComponent {
  values$: Observable<any>;
  status$: Observable<any>;
  public lastfour: IOutlineInputeConfig = {
    size: 'sm',
    type: 'text',
    label: '',
    mask: 'XXXX',
    maxLength: 7,
    hidden: true,
    placeholder: 'XXXX',
    autocomplete: 'off',
  };

  constructor(fb: FormBuilder) {
    super(fb, 'lastfour-form');
    this.values$ = this.parentForm.valueChanges;
    this.status$ = this.parentForm.statusChanges;
  }

  ngOnInit(): void {
    this.values$.subscribe((value) => {
      console.log('value changes ===> ', value);
    });
  }
}
