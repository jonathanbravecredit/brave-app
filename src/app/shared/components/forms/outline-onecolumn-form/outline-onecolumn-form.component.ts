import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { BaseFormComponent } from '@shared/components/forms/base-form/base-form.component';
import { IOutlineInputeConfig } from '@shared/components/inputs/outline-input/outline-input.component';

@Component({
  selector: 'brave-outline-onecolumn-form',
  templateUrl: './outline-onecolumn-form.component.html',
})
export class OutlineOnecolumnFormComponent extends BaseFormComponent {
  @Input() buttonOneText: string = '';
  @Input() buttonTwoText: string = '';
  @Input() configs: IOutlineInputeConfig[] = [];
  @Output() buttonOneClick: EventEmitter<void> = new EventEmitter();
  @Output() buttonTwoClick: EventEmitter<void> = new EventEmitter();

  constructor(fb: FormBuilder) {
    super(fb, 'outline-onecolumn-form');
  }

  updateErrorMessage(message: string): void {
    this.haveError$.next(true);
    this.haveError = true;
    this.errorMessage = message;
  }
}
