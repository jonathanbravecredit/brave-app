import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { IOutlineInputeConfig } from '@shared/components/inputs/outline-input/outline-input.component';

@Component({
  selector: 'brave-know-you-form',
  templateUrl: './know-you-form.component.html',
})
export class KnowYouFormComponent implements OnInit {
  parentForm: FormGroup;
  firstNameConfig: IOutlineInputeConfig = {
    size: 'sm',
    label: 'First Name',
    placeholder: 'First Name',
    autocomplete: 'give-name',
  };
  middleNameConfig: IOutlineInputeConfig = {
    size: 'sm',
    label: 'Middle Name',
    placeholder: 'Middle',
    autocomplete: 'additional-name',
  };
  lastNameConfig: IOutlineInputeConfig = {
    size: 'sm',
    label: 'Last Name',
    placeholder: 'Last Name',
    autocomplete: 'family-name',
  };

  /**
   * @param hideHint flag to show 'required' hint or not
   */
  @Input() hideHint: boolean = false;

  constructor(private fb: FormBuilder) {
    this.parentForm = fb.group({
      name: ['know-you-form'],
    }); // simple parent form with name of form
  }

  ngOnInit(): void {}

  addChild(childName: string, childGroup: FormGroup) {
    this.parentForm.addControl(childName, childGroup);
  }
}
