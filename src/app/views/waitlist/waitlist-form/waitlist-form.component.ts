import { Component, OnDestroy } from "@angular/core";
import { BaseFormComponent } from "../../../shared/components/forms/base-form/base-form.component";
import { FormBuilder } from "@angular/forms";
import { IOutlineInputeConfig } from "../../../shared/components/inputs/outline-input/outline-input.component";
import { IFilledOnlyTextButtonConfig } from "../../../shared/components/buttons/filled-onlytext-button/filled-onlytext-button.component";
import { WaitlistService } from "../waitlist.service";
import { Subscription } from "rxjs";

@Component({
  selector: "brave-waitlist-form",
  templateUrl: "./waitlist-form.component.html",
})
export class WaitlistFormComponent extends BaseFormComponent implements OnDestroy {
  firstNameConfig: IOutlineInputeConfig = {
    size: "base",
    label: "First Name",
    type: "text",
    placeholder: "First Name",
    autocomplete: "off",
    value: "",
  };

  lastNameConfig: IOutlineInputeConfig = {
    size: "base",
    label: "Last Name",
    type: "text",
    placeholder: "Last Name",
    autocomplete: "off",
    value: "",
  };

  emailConfig: IOutlineInputeConfig = {
    size: "base",
    label: "Email",
    type: "email",
    placeholder: "Email",
    autocomplete: "off",
    value: "",
  };

  phoneNumberConfig: IOutlineInputeConfig = {
    size: "base",
    label: "Phone Number",
    type: "text",
    placeholder: "Phone Number",
    autocomplete: "off",
    value: "",
  };

  signUpButtonConfig: IFilledOnlyTextButtonConfig = {
    buttonSize: "wide",
    backgroundColor: "bg-fuchsia-500",
    activeColor: "bg-fuchsia-500",
    color: "text-white",
    full: false,
  };

  emailError: boolean = false;
  emailErrorSub: Subscription;

  alreadyOnWaitlist: boolean = false;
  alreadyOnWaitlistSub: Subscription;

  constructor(fb: FormBuilder, public WaitlistService: WaitlistService) {
    super(fb, "waitlist-form");
    this.emailErrorSub = WaitlistService.emailError.subscribe((v) => {
      this.emailError = v;
    });
    this.alreadyOnWaitlistSub = WaitlistService.alreadyOnWaitlist.subscribe((v) => {
      this.alreadyOnWaitlist = v;
    });
  }

  submitForm(): void {
    this.emailError = false;
    this.alreadyOnWaitlist = false;
    super.submitForm();
  }

  ngOnDestroy(): void {
    this.emailErrorSub.unsubscribe();
    this.alreadyOnWaitlistSub.unsubscribe();
  }
}
