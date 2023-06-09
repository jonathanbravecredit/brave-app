import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { OutlineInputComponent } from '@shared/components/inputs/outline-input/outline-input.component';

@Component({
  selector: 'brave-outline-input-phone',
  templateUrl: './outline-input-phone.component.html',
})
export class OutlineInputPhoneComponent extends OutlineInputComponent {
  constructor(private formBuilder: FormBuilder) {
    super(formBuilder);
  }
}
