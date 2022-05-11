import {
  Component,
  EventEmitter,
  Inject,
  Input,
  Output,
  OnInit,
  HostListener,
} from "@angular/core";
import { AbstractControl, FormBuilder, FormGroup } from "@angular/forms";
import { BehaviorSubject } from "rxjs";
import { IOutlineInputeConfig } from "../../inputs/outline-input/outline-input.component";
import { IOutlineSelectInputConfig } from "../../inputs/outline-select-input/outline-select-input.component";
import { IKbaMultipleChoiceConfig } from "../../inputs/kba-multiplechoice-input/kba-multiplechoice-input.component";
import { ViewChild } from "@angular/core";
import { FilledSpinningButtonComponent } from "../../buttons/filled-spinning-button/filled-spinning-button.component";

interface ISubmitError {
  [key: string]: AbstractControl;
}

@Component({
  selector: "brave-base-form",
  template: "",
})
export class BaseFormComponent {
  @Output() onChanges: EventEmitter<any> = new EventEmitter();
  @Output() onSubmit: EventEmitter<FormGroup> = new EventEmitter();
  @Output() onSubmitError: EventEmitter<ISubmitError> = new EventEmitter();
  @ViewChild("spinner") spinner: FilledSpinningButtonComponent | undefined;

  @Input() hideHint: boolean = false;

  @HostListener("document:keydown.enter", ["$event"]) onKeydownHandler(
    event: KeyboardEvent
  ) {
    this.submitForm();
    if (this.parentForm.valid && this.spinner && this.valid) {
      this.spinner.clicked = true;
      this.spinner.spinning = true;
      this.spinner.refreshClass();
    }
  }

  eventListenerId: string = "";

  public addressOneConfig: IOutlineInputeConfig = {
    size: "sm",
    type: "text",
    label: "Street Address",
    placeholder: "Street Address",
    autocomplete: "address-line1",
  };
  public addressTwoConfig: IOutlineInputeConfig = {
    size: "sm",
    type: "text",
    label: "",
    placeholder: "Apt, Suite, Building, etc.",
    autocomplete: "address-line2",
  };
  public cityConfig: IOutlineInputeConfig = {
    size: "sm",
    type: "text",
    label: "City",
    placeholder: "City",
    autocomplete: "address-level2",
  };
  public stateConfig: IOutlineSelectInputConfig = {
    size: "sm",
    label: "State",
    autocomplete: "address-level3",
    options: states,
  };
  public zipConfig: IOutlineInputeConfig = {
    size: "sm",
    type: "text",
    label: "Zip",
    placeholder: "Zip",
    autocomplete: "postal-code",
  };
  firstNameConfig: IOutlineInputeConfig = {
    size: "sm",
    label: "First Name",
    type: "text",
    placeholder: "First Name",
    autocomplete: "give-name",
  };
  middleNameConfig: IOutlineInputeConfig = {
    size: "sm",
    label: "Middle Name",
    type: "text",
    placeholder: "Middle",
    autocomplete: "additional-name",
  };
  lastNameConfig: IOutlineInputeConfig = {
    size: "sm",
    label: "Last Name",
    type: "text",
    placeholder: "Last Name",
    autocomplete: "family-name",
  };
  monthConfig: IOutlineSelectInputConfig = {
    size: "sm",
    label: "Month",
    autocomplete: "off",
    options: months,
  };
  dayConfig: IOutlineSelectInputConfig = {
    size: "sm",
    label: "Day",
    autocomplete: "off",
    options: this.addDays(31),
  };
  yearConfig: IOutlineSelectInputConfig = {
    size: "sm",
    label: "Year",
    autocomplete: "off",
    options: this.addYears(new Date().getFullYear()),
  };
  public kbaConfig: IKbaMultipleChoiceConfig = {
    size: "sm",
    type: "text",
    label: "",
    placeholder: "",
    autocomplete: "off",
  };
  public phoneConfig: IOutlineInputeConfig = {
    size: "sm",
    type: "tel",
    label: "Phone Number",
    placeholder: "(123) 456-7890",
    autocomplete: "phone",
  };
  public full: IOutlineInputeConfig = {
    size: "sm",
    type: "text",
    label: "",
    mask: "XXX-XX-XXXX",
    unmask: "000-00-0000",
    maxLength: 11,
    minLength: 9,
    hidden: true,
    placeholder: "XXX-XX-XXXX",
    autocomplete: "off",
  };
  public lastfour: IOutlineInputeConfig = {
    size: "sm",
    type: "text",
    label: "",
    mask: "XXXX",
    unmask: "0000",
    maxLength: 4,
    minLength: 4,
    hidden: true,
    placeholder: "XXXX",
    autocomplete: "off",
  };
  public codeConfig: IOutlineInputeConfig = {
    size: "sm",
    type: "text",
    label: "Code",
    placeholder: "5-digit Code",
    autocomplete: "off",
  };
  passwordConfig: IOutlineInputeConfig = {
    size: "sm",
    label: "Current Password",
    type: "password",
    placeholder: "Current Password",
    autocomplete: "off",
  };
  newPasswordConfig: IOutlineInputeConfig = {
    size: "sm",
    label: "New Password",
    type: "password",
    placeholder: "New Password",
    autocomplete: "off",
  };
  confirmPasswordConfig: IOutlineInputeConfig = {
    size: "sm",
    label: "Confirm New Password",
    type: "password",
    placeholder: "Confirm New Password",
    autocomplete: "off",
  };
  emailConfig: IOutlineInputeConfig = {
    size: "sm",
    label: "Email",
    type: "email",
    placeholder: "Email address",
    autocomplete: "email",
  };

  haveError$ = new BehaviorSubject<boolean>(false);
  haveError: boolean = false;
  errorMessage: string = "";
  valid: boolean = false;

  get formValues(): any {
    return this.parentForm.value;
  }

  parentForm: FormGroup = new FormGroup({});
  constructor(fb: FormBuilder, @Inject("name") private name: string) {
    this.parentForm = fb.group({
      name: [name],
    });
    this.parentForm.valueChanges.subscribe((value) => {
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
    this.valid = this.validateForm(this.parentForm);
    this.parentForm.markAllAsTouched();
    this.parentForm.valid && this.valid
      ? this.onSubmit.emit(this.parentForm)
      : this.onSubmitError.emit(this.parentForm.controls);
  }

  validateForm(parentForm: FormGroup): boolean {
    if (parentForm.value.name === "namedob-form") {
      return this.nameDobVerification(parentForm.value);
    }
    if (parentForm.value.name === 'address-form') {
      return this.addressVerification(parentForm.value);
    }
    
    return true;
  }

  addressVerification(value: any): boolean {
    if (value.state.input === "State") return false;
    return true;
  }

  nameDobVerification(value: any): boolean {
    if (value.day.input === "Day") return false;
    if (value.month.input === "Month") return false;
    if (value.year.input === "Yeah") return false;
    return true;
  }

  formatInputName(idx: number): string {
    return `input-${idx}`;
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
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

// TODO ensure you have all states
const states = [
  "AK",
  "AL",
  "AR",
  "AZ",
  "CA",
  "CO",
  "CT",
  "DE",
  "FL",
  "GA",
  "HI",
  "IA",
  "ID",
  "IL",
  "IN",
  "KS",
  "KY",
  "LA",
  "MA",
  "MD",
  "ME",
  "MI",
  "MN",
  "MO",
  "MS",
  "MT",
  "NC",
  "ND",
  "NE",
  "NH",
  "NJ",
  "NM",
  "NV",
  "NY",
  "OH",
  "OK",
  "OR",
  "PA",
  "RI",
  "SC",
  "SD",
  "TN",
  "TX",
  "UT",
  "VA",
  "VT",
  "WA",
  "WI",
  "WV",
  "WY",
];
