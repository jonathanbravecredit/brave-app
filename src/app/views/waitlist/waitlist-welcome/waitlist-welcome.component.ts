import { Component, OnDestroy } from "@angular/core";
import { IFilledOnlyTextButtonConfig } from "../../../shared/components/buttons/filled-onlytext-button/filled-onlytext-button.component";
import { WaitlistService } from "../waitlist.service";
import { FormGroup } from "@angular/forms";
import { Subscription } from "rxjs";

@Component({
  selector: "brave-waitlist-welcome",
  templateUrl: "./waitlist-welcome.component.html",
})
export class WaitlistWelcomeComponent implements OnDestroy {
  submitted: boolean = false;
  submittedSub: Subscription;

  getStartedButtonConfig: IFilledOnlyTextButtonConfig = {
    buttonSize: "wide",
    backgroundColor: "bg-indigo-800",
    activeColor: "bg-indigo-900",
    color: "text-white",
    full: false,
  };

  constructor(public WaitlistService: WaitlistService) {
    this.submittedSub = WaitlistService.addedToWaitlist.subscribe((v) => {
      this.submitted = v;
    });
  }

  waitlistSubmit(formGroup: FormGroup) {
    this.WaitlistService.waitlistFormSubmit(formGroup);
  }

  ngOnDestroy(): void {
    this.submittedSub.unsubscribe();
  }

  goToForm() {
    window.scrollTo({ left: 0, top: document.body.scrollHeight, behavior: "smooth" });
  }
}
