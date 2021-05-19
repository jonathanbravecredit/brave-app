import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { IOutlineSelectInputConfig } from '@shared/components/inputs/outline-select-input/outline-select-input.component';

@Component({
  selector: 'brave-dateofbirth-form',
  templateUrl: './dateofbirth-form.component.html',
})
export class DateofbirthFormComponent implements OnInit {
  parentForm: FormGroup;
  monthConfig: IOutlineSelectInputConfig = {
    size: 'sm',
    label: 'Month',
    options: months,
  };
  dayConfig: IOutlineSelectInputConfig = {
    size: 'sm',
    label: 'Day',
    options: this.addDays(31),
  };
  yearConfig: IOutlineSelectInputConfig = {
    size: 'sm',
    label: 'Year',
    options: this.addYears(new Date().getFullYear()),
  };

  constructor(private fb: FormBuilder) {
    this.parentForm = fb.group({
      name: ['dateofbirth-form'],
    }); // simple parent form with name of form
  }

  ngOnInit(): void {}

  addChild(childName: string, childGroup: FormGroup) {
    this.parentForm.addControl(childName, childGroup);
  }

  addDays(x: number): string[] {
    let days: string[] = [];
    for (let i = x; i > 0; i--) {
      days = [i.toString(), ...days];
    }
    return days;
  }

  addYears(x: number): string[] {
    let years: string[] = [];
    for (let i = x; i > x - 100; i--) {
      years = [...years, i.toString()];
    }
    return years;
  }
}

const months: string[] = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'Jun',
  'Jul',
  'Aug',
  'Sep',
  'Oct',
  'Nov',
  'Dec',
];
