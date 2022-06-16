import { Component } from "@angular/core";
import { IFilledOnlyTextButtonConfig } from "../../../shared/components/buttons/filled-onlytext-button/filled-onlytext-button.component";
import { WaitlistService } from "../waitlist.service";
import { FormGroup } from "@angular/forms";

@Component({
  selector: "brave-waitlist-welcome",
  templateUrl: "./waitlist-welcome.component.html",
})
export class WaitlistWelcomeComponent {
  submitted: boolean = true;

  getStartedButtonConfig: IFilledOnlyTextButtonConfig = {
    buttonSize: "wide",
    backgroundColor: "bg-indigo-800",
    activeColor: "bg-indigo-900",
    color: "text-white",
    full: false,
  };

  constructor(public WaitlistService: WaitlistService) {}

  waitlistSubmit(formGroup: FormGroup) {
    this.WaitlistService.waitlistFormSubmit(formGroup);
  }
}
