import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { OutlineInputComponent } from '@shared/components/inputs/outline-input/outline-input.component';

@Component({
  selector: 'brave-outline-input-ssn',
  templateUrl: './outline-input-ssn.component.html',
  styleUrls: ['./outline-input-ssn.component.css'],
})
export class OutlineInputSsnComponent extends OutlineInputComponent {
  hide: boolean = true;
  constructor(private formBuilder: FormBuilder) {
    super(formBuilder);
  }
}
