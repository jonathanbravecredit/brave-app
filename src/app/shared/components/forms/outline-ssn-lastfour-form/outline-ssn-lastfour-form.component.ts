import { Component, ViewChild } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { BaseFormComponent } from '@shared/components/forms/base-form/base-form.component';
import { Observable } from 'rxjs';
import { FilledSpinningButtonComponent } from '../../buttons/filled-spinning-button/filled-spinning-button.component';

@Component({
  selector: 'brave-outline-ssn-lastfour-form',
  templateUrl: './outline-ssn-lastfour-form.component.html',
})
export class OutlineSsnLastfourFormComponent extends BaseFormComponent {
  values$: Observable<any>;
  status$: Observable<any>;
  @ViewChild("spinner") spinner: FilledSpinningButtonComponent | undefined;

  constructor(fb: FormBuilder) {
    super(fb, 'lastfour-form');
    this.values$ = this.parentForm.valueChanges;
    this.status$ = this.parentForm.statusChanges;
  }
}
