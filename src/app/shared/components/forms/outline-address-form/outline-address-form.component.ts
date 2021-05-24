import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { IOutlineInputeConfig } from '@shared/components/inputs/outline-input/outline-input.component';
import { IOutlineSelectInputConfig } from '@shared/components/inputs/outline-select-input/outline-select-input.component';

@Component({
  selector: 'brave-outline-address-form',
  templateUrl: './outline-address-form.component.html',
})
export class OutlineAddressFormComponent implements OnInit {
  public parentForm: FormGroup;
  public addressOneConfig: IOutlineInputeConfig = {
    size: 'sm',
    type: 'text',
    label: 'Street Address',
    placeholder: 'Street Address',
    autocomplete: 'address',
  };
  public addressTwoConfig: IOutlineInputeConfig = {
    size: 'sm',
    type: 'text',
    label: '',
    placeholder: 'Apt, Suite, Building, etc.',
    autocomplete: 'address',
  };
  public cityConfig: IOutlineInputeConfig = {
    size: 'sm',
    type: 'text',
    label: 'City',
    placeholder: 'City',
    autocomplete: 'address',
  };
  public stateConfig: IOutlineSelectInputConfig = {
    size: 'sm',
    label: 'State',
    options: states,
  };
  public zipConfig: IOutlineInputeConfig = {
    size: 'sm',
    type: 'text',
    label: 'Zip',
    placeholder: 'Zip',
    autocomplete: 'address',
  };

  /**
   * @param hideHint flag to show 'required' hint or not
   */
  @Input() hideHint: boolean = false;

  constructor(private fb: FormBuilder) {
    this.parentForm = this.fb.group({
      name: ['address-form'],
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

// TODO ensure you have all states
const states = ['AL', 'AK', 'AR', '...etc'];
