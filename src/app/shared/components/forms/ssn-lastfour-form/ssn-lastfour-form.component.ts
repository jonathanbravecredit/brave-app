import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  QueryList,
  ViewChildren,
} from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Subscription } from 'rxjs';
import { HiddenAsteriskInputComponent } from 'src/app/components/inputs/hidden-asterisk-input/hidden-asterisk-input.component';

@Component({
  selector: 'brave-ssn-lastfour-form',
  templateUrl: './ssn-lastfour-form.component.html',
})
export class SsnLastfourFormComponent implements OnInit {
  @ViewChildren(HiddenAsteriskInputComponent)
  hiddenFields: QueryList<HiddenAsteriskInputComponent>;

  parentFormGroup: FormGroup;
  childName: string = 'input';
  private _slots: number[] = [];
  private formSub$: Subscription;

  @Input()
  get slots() {
    return this._slots;
  }
  set slots(slots: number[]) {
    this._slots = slots;
  }

  @Output() valueChanged: EventEmitter<any> = new EventEmitter();
  @Output()
  onComponentReady: EventEmitter<FormGroup> = new EventEmitter<FormGroup>();

  constructor(private fb: FormBuilder) {
    this.parentFormGroup = fb.group({
      code: [''],
    }); // simple parent form with name of form
  }

  ngOnInit(): void {
    this.formSub$ = this.parentFormGroup.valueChanges.subscribe((values) => {
      this.valueChanged.emit(values);
    });
    this.onComponentReady.emit(this.parentFormGroup);
  }

  ngOnDestroy(): void {
    if (this.formSub$) this.formSub$.unsubscribe();
  }

  /**
   * Adds the digits to the parent form
   * @param childName
   * @param childGroup
   * @param digit
   */
  addChild(childName: string, childGroup: FormGroup, digit: number): void {
    this.parentFormGroup.addControl(`${childName}-${digit}`, childGroup);
  }

  /**
   * Moves to the component located at the index
   * @param idx
   */
  moveNext(idx: number): void {
    const comp = this.hiddenFields.find((c) => c.index === idx + 1);
    if (comp) {
      setTimeout(() => {
        comp.focusMe();
      }, 500);
    }
  }

  /**
   * Clears out all the values from the form
   */
  clearForm(): void {
    this.hiddenFields.forEach((c) => {
      c.clearMe();
    });
    this.hiddenFields.first.focusMe(); // set the cursor to the first one
  }
}
