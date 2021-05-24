import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { IOutlineInputeConfig } from 'src/app/components/inputs/outline-input/outline-input.component';

@Component({
  selector: 'brave-outline-phone-form',
  templateUrl: './outline-phone-form.component.html',
})
export class OutlinePhoneFormComponent implements OnInit {
  public parentForm: FormGroup;
  public phoneConfig: IOutlineInputeConfig = {
    size: 'sm',
    label: 'Phone Number',
    placeholder: 'Phone Number',
    autocomplete: 'phone',
  };

  /**
   * @param hideHint flag to show 'required' hint or not
   */
  @Input() hideHint: boolean = false;

  constructor(private fb: FormBuilder) {
    this.parentForm = this.fb.group({
      name: ['phone-form'],
    }); // simple parent form with name of form
  }

  ngOnInit(): void {}

  /**
   * Method to create the parent form from the child inputs
   * @param childName
   * @param childGroup
   */
  addChild(childName: string, childGroup: FormGroup) {
    this.parentForm.addControl(childName, childGroup);
  }
}
