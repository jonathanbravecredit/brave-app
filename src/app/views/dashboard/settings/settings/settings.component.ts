import { Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { InterstitialService } from '@shared/services/interstitial/interstitial.service';
import { SettingsService } from '@shared/services/settings/settings.service';
import { OptionDeactivateComponent } from '@views/dashboard/settings/components/option-deactivate/option-deactivate.component';
import { OptionPasswordResetComponent } from '@views/dashboard/settings/components/option-password-reset/option-password-reset.component';
import { ISettingsViews, SettingsOptions } from '@views/dashboard/settings/settings-pure/interface';
import { SettingsPureComponent } from '@views/dashboard/settings/settings-pure/settings-pure.component';
import { ALERT_CONFIG } from '@views/dashboard/settings/settings/constants';
import { ROUTE_NAMES as routes } from '@shared/routes/routes.names';

@Component({
  selector: 'brave-settings',
  templateUrl: './settings.component.html',
})
export class SettingsComponent implements OnInit {
  @ViewChild('reset') resetOption: OptionPasswordResetComponent | undefined;
  @ViewChild('deactivate') deactivateOption: OptionDeactivateComponent | undefined;
  @ViewChild(SettingsPureComponent) pure: SettingsPureComponent | undefined;

  haveResetError: boolean = false;
  resetSuccess: boolean = false;
  resetError: string = '';
  haveDeactivateError: boolean = false;
  deactivateSuccess: boolean = false;
  deactivateError: string = '';
  init: ISettingsViews = SettingsOptions.Init;
  alertConfig = ALERT_CONFIG;
  constructor(
    public route: ActivatedRoute,
    private router: Router,
    private settings: SettingsService,
    private interstitial: InterstitialService,
  ) {}

  ngOnInit(): void {}

  resetView() {
    this.init = SettingsOptions.Init;
  }

  onGoToPageClick({ tab, view }: { tab: number; view: ISettingsViews }) {
    this.router.navigate([routes.root.dashboard.settings.options.full], {
      queryParams: {
        option: view,
      },
    });
  }

  async onChangePasswordClick(): Promise<void> {
    const email = await this.settings.getUserEmail();
    this.settings
      .forgotPassword(email)
      .then((results) => {
        this.resetSuccess = true;
        this.interstitial.fetching$.next(false);
        this.interstitial.stopSpinner();
      })
      .catch((reason) => {
        this.resetError = reason;
        this.haveResetError = true;
        this.interstitial.fetching$.next(false);
        this.interstitial.stopSpinner();
      });
  }

  onDeactivateClick(): void {
    // evt.password -- we actually don't need the password, just there to act as a deterent
    setTimeout(() => {
      this.deactivateError = 'Sorry we could not deactive your account at this time.';
      this.haveDeactivateError = true;
      this.interstitial.fetching$.next(false);
    }, 4000);
    this.settings
      .deactivateAccount()
      .then((results) => {
        this.deactivateSuccess = true;
        this.interstitial.stopSpinner();
        this.router.navigate([routes.root.auth.deactivated.full]);
        this.interstitial.fetching$.next(false);
      })
      .catch((err) => {
        this.deactivateError = 'Sorry we could not deactive your account at this time.';
        this.haveDeactivateError = true;
        this.interstitial.fetching$.next(false);
      });
  }

  onSubmitCodeClick(form: FormGroup): void {
    const email = form.value.email.input;
    const password = form.value.password.input;
    const code = form.value.code.input;
    this.interstitial.fetching$.next(true);
    this.settings
      .forgotPasswordSubmit(email, code, password)
      ?.then((res) => {
        this.interstitial.fetching$.next(false);
        this.pure?.showAlert();
      })
      .catch((err) => {
        this.interstitial.fetching$.next(false);
        // this.pure?.form?.updateErrorMessage(err.message);
      });
  }

  onLogoutClick() {
    this.settings.signOut();
  }

  onAlertCloseClick() {
    this.resetView();
  }
}
