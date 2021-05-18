import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { IOutlineInputeConfig } from '@shared/components/inputs/outline-input/outline-input.component';

@Component({
  selector: 'brave-outline-onecolumn-form',
  templateUrl: './outline-onecolumn-form.component.html',
})
export class OutlineOnecolumnFormComponent implements OnInit {
  parentForm: FormGroup;
  childFieldConfig: IOutlineInputeConfig = {
    size: 'sm',
    label: 'Input Label',
    placeholder: 'Input text',
    autocomplete: 'off',
  };

  constructor(private fb: FormBuilder) {
    this.parentForm = fb.group({
      name: ['outline-onecolumn-form'],
    }); // simple parent form with name of form
  }

  ngOnInit(): void {}

  addChild(childName: string, childGroup: FormGroup) {
    this.parentForm.addControl(childName, childGroup);
  }
}
