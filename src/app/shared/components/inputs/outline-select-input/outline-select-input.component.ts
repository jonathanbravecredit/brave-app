import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ValidatorFn } from '@angular/forms';

export interface IOutlineSelectInputConfig {
  size: string;
  label: string;
  autocomplete: string;
  options: string[];
}

@Component({
  selector: 'brave-outline-select-input',
  templateUrl: './outline-select-input.component.html',
})
export class OutlineSelectInputComponent implements OnInit {
  private _required: boolean = false;
  private _asteriskOverride: boolean = false;
  public selected: string | undefined;
  public isOpen: boolean = false;

  /**
   * @param Config Object to pass in component params
   * @param config.size 'sm', 'base', 'lg'
   * @param config.label Label text (default: 'Input label')
   * @param config.options select options to choose from
   */
  @Input() config: IOutlineSelectInputConfig = {
    size: 'base',
    label: 'Input label',
    autocomplete: 'off',
    options: ['one', 'two', 'three'],
  };

  @Input() validators: ValidatorFn[] = [];

  /**
   * @input Flag to make the input field required for form to be valid
   */
  @Input()
  get required() {
    return this._required;
  }
  set required(value: any) {
    this._required = !!value;
  }

  /**
   * @input Flag to override the display of an asterisk but still make it required
   */
  @Input()
  get asteriskOverride() {
    return this._asteriskOverride;
  }
  set asteriskOverride(value: any) {
    this._asteriskOverride = !!value;
  }

  @Output() valueChanged: EventEmitter<any> = new EventEmitter();
  @Output()
  onComponentReady: EventEmitter<FormGroup> = new EventEmitter<FormGroup>();

  public componentFormGroup: FormGroup = new FormBuilder().group({
    input: [''],
  });
  public locked: boolean = false;
  public hidden: boolean = false;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    if (this.required) {
      this.validators.push(Validators.required);
    }
    this.componentFormGroup = this.fb.group({
      input: [this.config.label, this.validators], // default to first item in array
    });
    this.componentFormGroup.controls.input.valueChanges.subscribe((value) => {
      this.selected = value;
      this.valueChanged.emit(value);
    });
    this.onComponentReady.emit(this.componentFormGroup);
  }

  /**
   * Toggles open and close select options
   * @param e MouseEvent to stop propagation.
   */
  toggleOpen(e: MouseEvent): void {
    e.stopPropagation();
    this.isOpen = !this.isOpen;
    this.componentFormGroup.controls.input.markAsTouched();
  }

  /**
   * Updates the form with the selected option value
   * @param idx index of the select option clicked on
   */
  updateForm(idx: number): void {
    this.componentFormGroup.setValue({ input: this.config.options[idx] });
  }
}
