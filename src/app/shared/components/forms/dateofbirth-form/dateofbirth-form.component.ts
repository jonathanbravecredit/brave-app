import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormGroup, FormBuilder, ValidationErrors } from '@angular/forms';
import { IOutlineSelectInputConfig } from '@shared/components/inputs/outline-select-input/outline-select-input.component';
import { Subscription } from 'rxjs';

@Component({
  selector: 'brave-dateofbirth-form',
  templateUrl: './dateofbirth-form.component.html',
})
export class DateofbirthFormComponent implements OnInit {
  @Output() onChanges: EventEmitter<any> = new EventEmitter();
  @Output() onSubmit: EventEmitter<FormGroup> = new EventEmitter();
  @Output()
  onSubmitError: EventEmitter<ValidationErrors | null> = new EventEmitter();

  changesSub$: Subscription;
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
    this.changesSub$ = this.parentForm.valueChanges.subscribe((values) => {
      this.onChanges.emit(values);
    });
  }

  ngOnInit(): void {}
  ngOnDestroy(): void {
    if (this.changesSub$) this.changesSub$.unsubscribe();
  }

  submitForm(): void {
    this.parentForm.valid
      ? this.onSubmit.emit(this.parentForm)
      : this.onSubmitError.emit(this.parentForm.errors);
  }

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
