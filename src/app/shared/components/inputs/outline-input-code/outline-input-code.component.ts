import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { OutlineInputComponent } from '@shared/components/inputs/outline-input/outline-input.component';

@Component({
  selector: 'brave-outline-input-code',
  templateUrl: './outline-input-code.component.html',
  styleUrls: ['./outline-input-code.component.css'],
})
export class OutlineInputCodeComponent extends OutlineInputComponent {
  constructor(private formBuilder: FormBuilder) {
    super(formBuilder);
  }
}
