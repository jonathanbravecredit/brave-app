import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

export interface IOutlineInputeConfig {
  size: string;
  label: string;
  name?: string;
  type: string;
  placeholder: string;
  autocomplete: string;
  value?: string;
  required?: boolean;
  hidden?: boolean;
  mask?: string;
  maxLength?: number;
}

@Component({
  selector: 'brave-outline-input',
  templateUrl: './outline-input.component.html',
})
export class OutlineInputComponent implements OnInit {
  private _required: boolean = false;
  private _asteriskOverride: boolean = false;
  private _minLength: number | undefined;

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
    type: 'text',
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

  /**
   * @input Flag to override the display of an asterisk but still make it required
   */
  @Input()
  get minLength() {
    return this._minLength;
  }
  set minLength(value: number | undefined) {
    this._minLength = value;
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
    const validators = [];
    if (this.required) {
      validators.push(Validators.required);
    }
    if (this.minLength) {
      validators.push(Validators.minLength(this.minLength));
    }
    this.componentFormGroup = this.fb.group({
      input: [this.config.value, validators],
    });
    this.componentFormGroup.controls.input.valueChanges.subscribe((value) => {
      this.valueChanged.emit(value);
    });
    this.onComponentReady.emit(this.componentFormGroup);
  }
}
