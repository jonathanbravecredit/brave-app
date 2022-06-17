import {
  Component,
  EventEmitter,
  Inject,
  Input,
  Output,
  OnInit,
  HostListener,
} from "@angular/core";
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  ValidatorFn,
} from "@angular/forms";
import { BehaviorSubject } from "rxjs";
import { IOutlineInputeConfig } from "../../inputs/outline-input/outline-input.component";
import { IOutlineSelectInputConfig } from "../../inputs/outline-select-input/outline-select-input.component";
import { IKbaMultipleChoiceConfig } from "../../inputs/kba-multiplechoice-input/kba-multiplechoice-input.component";
import { ViewChild } from "@angular/core";
import { FilledSpinningButtonComponent } from "../../buttons/filled-spinning-button/filled-spinning-button.component";
import * as configs from "@shared/components/forms/base-form/base-form.constants";

interface ISubmitError {
  [key: string]: AbstractControl;
}

@Component({
  selector: "brave-base-form",
  template: "",
})
export class BaseFormComponent {
  @ViewChild(FilledSpinningButtonComponent) spinner:
    | FilledSpinningButtonComponent
    | undefined;

  @Input() hideHint: boolean = false;

  @Output() onChanges: EventEmitter<any> = new EventEmitter();
  @Output() onSubmit: EventEmitter<FormGroup> = new EventEmitter();
  @Output() onSubmitError: EventEmitter<ISubmitError> = new EventEmitter();

  @HostListener("document:keydown.enter", ["$event"]) onKeydownHandler(
    event: KeyboardEvent
  ) {
    this.submitForm();
    if (this.parentForm.valid && this.spinner) {
      this.spinner.clicked = true;
      this.spinner.spinning = true;
      this.spinner.refreshClass();
    }
  }

  public addressOneConfig: IOutlineInputeConfig = configs.ADDRESS_ONE_CONFIG;
  public addressTwoConfig: IOutlineInputeConfig = configs.ADDRESS_TWO_CONFIG;
  public cityConfig: IOutlineInputeConfig = configs.CITY_CONFIG;
  public stateConfig: IOutlineSelectInputConfig = configs.STATE_CONFIG;
  public zipConfig: IOutlineInputeConfig = configs.ZIP_CONFIG;
  public firstNameConfig: IOutlineInputeConfig = configs.FIRST_NAME_CONFIG;
  public middleNameConfig: IOutlineInputeConfig = configs.MIDDLE_NAME_CONFIG;
  public lastNameConfig: IOutlineInputeConfig = configs.LAST_NAME_CONFIG;
  public monthConfig: IOutlineSelectInputConfig = configs.MONTH_CONFIG;
  public dayConfig: IOutlineSelectInputConfig = configs.DAY_CONFIG;
  public yearConfig: IOutlineSelectInputConfig = configs.YEAR_CONFIG;
  public kbaConfig: IKbaMultipleChoiceConfig = configs.KBA_CONFIG;
  public phoneConfig: IOutlineInputeConfig = configs.PHONE_CONFIG;
  public full: IOutlineInputeConfig = configs.FULL_SSN;
  public lastfour: IOutlineInputeConfig = configs.LAST_FOUR_SSN;
  public codeConfig: IOutlineInputeConfig = configs.CODE_CONFIG;
  public passwordConfig: IOutlineInputeConfig = configs.PASSWORD_CONFIG;
  public newPasswordConfig: IOutlineInputeConfig = configs.NEW_PASSWORD_CONFIG;
  public confirmPasswordConfig: IOutlineInputeConfig =
    configs.CONFIRM_PASSWORD_CONFIG;
  public emailConfig: IOutlineInputeConfig = configs.EMAIL_CONFIG;

  haveError$ = new BehaviorSubject<boolean>(false);
  haveError: boolean = false;
  errorMessage: string = "";

  get formValues(): any {
    return this.parentForm.value;
  }

  parentForm: FormGroup = new FormGroup({});
  constructor(
    fb: FormBuilder,
    @Inject("name") private name: string,
    @Inject("validators") validators: ValidatorFn[] = []
  ) {
    this.parentForm = fb.group({ name: [name] }, { validators });
    this.parentForm?.valueChanges.subscribe((value) => {
      this.onChanges.emit(value);
    });
  }

  addChild(childName: string, childGroup: FormGroup) {
    this.parentForm.addControl(childName, childGroup);
  }

  removeChild(childName: string): void {
    this.parentForm.removeControl(childName);
  }

  submitForm(): void {
    this.parentForm.markAllAsTouched();
    this.parentForm.valid
      ? this.onSubmit.emit(this.parentForm)
      : this.onSubmitError.emit(this.parentForm.controls);
  }

  formatInputName(idx: number): string {
    return `input-${idx}`;
  }
}
