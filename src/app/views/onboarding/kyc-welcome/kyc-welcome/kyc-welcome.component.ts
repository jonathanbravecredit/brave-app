import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { AbstractControl, FormGroup } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import {
  GooglePageViewEvents as gtViews,
  GoogleClickEvents as gtClicks,
} from '@shared/services/analytics/google/constants';
import { GoogleService } from '@shared/services/analytics/google/google.service';
import { UserAttributesInput } from '@shared/services/aws/api.service';
import { KycService } from '@shared/services/kyc/kyc.service';
import { BraveUtil } from '@shared/utils/brave/brave';
import { KycBaseComponent } from '@views/onboarding/kyc-base/kyc-base.component';
import { KycComponentCanDeactivate } from '@views/onboarding/kyc-deactivate-guard/kyc-deactivate.guard';
import { KycWelcomePureComponent } from '@views/onboarding/kyc-welcome/kyc-welcome-pure/kyc-welcome-pure.component';

interface FlatForm {
  [key: string]: string;
}

@Component({
  selector: 'brave-kyc-welcome',
  templateUrl: './kyc-welcome.component.html',
})
export class KycWelcomeComponent extends KycBaseComponent implements OnInit, AfterViewInit, KycComponentCanDeactivate {
  @ViewChild(KycWelcomePureComponent) pure: KycWelcomePureComponent | undefined;
  stepID = 0;
  hasError: boolean = false;
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private kycService: KycService,
    private google: GoogleService,
  ) {
    super();
  }

  ngOnInit(): void {
    this.google.firePageViewEvent(gtViews.OnboardingName);
    this.kycService.activateStep(this.stepID);
  }

  ngAfterViewInit(): void {
    this.form = this.pure?.formComponent?.parentForm; //need to bring the form up from the pure component
  }

  async goToNext(form: FormGroup): Promise<void> {
    this.google.fireClickEvent(gtClicks.OnboardingName);
    if (form.valid) {
      // write to state...TODO write to DB
      const attrs = {
        name: {
          ...this.formatAttributes(form, name),
        },
        dob: {
          ...this.formatAttributes(form, dob),
        },
      } as UserAttributesInput;
      await this.kycService.updateUserAttributesAsync(attrs);
      const dobDte = new Date(`${attrs.dob?.year}-${attrs.dob?.month}-${attrs.dob?.day}`);
      const isOldEnough = isNaN(dobDte.valueOf()) ? false : BraveUtil.queries.isUserValidAge(dobDte.toISOString());
      if (!isOldEnough) {
        // suspend the user account and route them to the suspended page
        await this.kycService.suspendUserOnAge();
        this.router.navigate(['/suspended']);
      } else {
        this.kycService.completeStep(this.stepID);
        this.router.navigate(['../address'], { relativeTo: this.route });
      }
    }
  }

  handleError(errors: { [key: string]: AbstractControl }): void {
    this.hasError = true;
  }
}

const name: Record<string, any> = {
  first: true,
  middle: true,
  last: true,
};

const dob: Record<string, any> = {
  year: true,
  month: true,
  day: true,
};
