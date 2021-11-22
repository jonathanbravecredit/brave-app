import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import {
  IOutlineInputeConfig,
  OutlineInputComponent,
} from '@shared/components/inputs/outline-input/outline-input.component';

@Component({
  selector: 'brave-outline-input-hidden',
  templateUrl: './outline-input-hidden.component.html',
})
export class OutlineInputHiddenComponent extends OutlineInputComponent implements OnInit {
  hide: boolean = true;
  constructor(fb: FormBuilder) {
    super(fb);
  }
}
