import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

export interface IOutlineInputeConfig {
  size: string;
  label: string;
  placeholder: string;
  autocomplete: string;
  value?: string;
}

@Component({
  selector: 'brave-outline-input',
  templateUrl: './outline-input.component.html',
})
export class OutlineInputComponent {
  private _required: boolean = false;

  /**
   * @param Config Object to pass in component params
   * @param config.size 'sm', 'base', 'lg'
   * @param config.label Label text (default: 'Input label')
   * @param config.placeholder Placeholder text (default: 'Input text')
   * @param config.autocomplete Any HTML Input autocomplete value
   * @param config.value (optional) Pre-load the input with a value
   */
  @Input() config: IOutlineInputeConfig = {
    size: 'base',
    label: 'Input label',
    placeholder: 'Input text',
    autocomplete: 'off',
    value: '',
  };

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

  @Output() valueChanged: EventEmitter<any> = new EventEmitter();
  @Output()
  onComponentReady: EventEmitter<FormGroup> = new EventEmitter<FormGroup>();

  public componentFormGroup: FormGroup;
  public locked: boolean = false;
  public hidden: boolean = false;

  constructor(private fb: FormBuilder) {
    const validators = [];
    if (this.required) {
      validators.push(Validators.required);
    }
    this.componentFormGroup = this.fb.group({
      input: [this.config.value, validators],
    });
    this.componentFormGroup.controls.input.valueChanges.subscribe((value) =>
      this.valueChanged.emit(value)
    );
    this.onComponentReady.emit(this.componentFormGroup);
  }
}
