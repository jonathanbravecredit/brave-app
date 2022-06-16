import { Component } from "@angular/core";
import { IFilledOnlyTextButtonConfig } from "../../../shared/components/buttons/filled-onlytext-button/filled-onlytext-button.component";
import { WaitlistWelcomeService } from "./waitlist-welcome.service";

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

  constructor(
    public waitListWelcomeService: WaitlistWelcomeService,
  ) {}
}
