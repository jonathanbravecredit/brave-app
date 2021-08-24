import { Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IConfirmPassword } from '@shared/components/forms/simple-change-password-form/interface';
import { IDeactivateAccount } from '@shared/components/forms/simple-deactive-form/interface';
import { InterstitialService } from '@shared/services/interstitial/interstitial.service';
import { SettingsService } from '@shared/services/settings/settings.service';
import { OptionDeactivateComponent } from '@views/dashboard/settings/option-deactivate/option-deactivate.component';
import { OptionPasswordResetComponent } from '@views/dashboard/settings/option-password-reset/option-password-reset.component';
import { ISettingsViews, SettingsOptions } from '@views/dashboard/settings/settings-pure/interface';

@Component({
  selector: 'brave-settings',
  templateUrl: './settings.component.html',
})
export class SettingsComponent implements OnInit {
  @ViewChild('reset') resetOption: OptionPasswordResetComponent | undefined;
  @ViewChild('deactivate') deactivateOption: OptionDeactivateComponent | undefined;

  haveResetError: boolean = false;
  resetSuccess: boolean = false;
  resetError: string = '';
  haveDeactivateError: boolean = false;
  deactivateSuccess: boolean = false;
  deactivateError: string = '';
  init: ISettingsViews = SettingsOptions.Init;

  constructor(
    public route: ActivatedRoute,
    private router: Router,
    private settings: SettingsService,
    private interstitial: InterstitialService,
  ) {}

  ngOnInit(): void {}

  onGoToPageClick({ tab, view }: { tab: number; view: ISettingsViews }) {
    this.router.navigate([`./options`], {
      relativeTo: this.route,
      queryParams: {
        option: view,
      },
    });
  }

  onChangePasswordClick(evt: IConfirmPassword) {
    this.interstitial.startSpinner();
    this.settings
      .resetPassword(evt.password, evt.newPassword)
      .then((results) => {
        if (results.toLowerCase() === 'success') {
          this.resetSuccess = true;
        } else {
          this.resetError = results;
          this.haveResetError = true;
        }
        this.interstitial.stopSpinner();
      })
      .catch((reason) => {
        this.resetError = reason;
        this.haveResetError = true;
        this.interstitial.stopSpinner();
      });
  }

  onDeactivateClick(evt: IDeactivateAccount) {
    // evt.password -- we actually don't need the password, just there to act as a deterent
    this.interstitial.startSpinner();
    this.settings
      .deactivateAccount()
      .then((results) => {
        this.deactivateSuccess = true;
        this.interstitial.stopSpinner();
      })
      .catch((err) => {
        this.deactivateError = 'Sorry we could not deactive your account at this time.';
        this.haveDeactivateError = true;
        this.interstitial.stopSpinner();
      });
  }

  onLogoutClick() {
    this.settings.signOut();
  }
}
