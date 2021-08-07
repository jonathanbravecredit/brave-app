import { Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IConfirmPassword } from '@shared/components/forms/simple-change-password-form/interface';
import { InterstitialService } from '@shared/services/interstitial/interstitial.service';
import { SettingsService } from '@shared/services/settings/settings.service';
import { OptionDeactivateComponent } from '@views/dashboard/settings/option-deactivate/option-deactivate.component';
import { OptionPasswordResetComponent } from '@views/dashboard/settings/option-password-reset/option-password-reset.component';
import { ISettingsViews } from '@views/dashboard/settings/settings-pure/interface';

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
  view: ISettingsViews = 'reset';
  openTab: number = 1;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private settings: SettingsService,
    private interstitial: InterstitialService,
  ) {}

  ngOnInit(): void {}

  toggleTabs($tabNumber: number) {
    this.openTab = $tabNumber;
  }

  onBackButtonClick() {
    if (this.openTab === 1) {
      this.router.navigate(['../init'], { relativeTo: this.route });
    } else {
      this.openTab = 1;
    }
  }
  onGoToPageClick({ tab, view }: { tab: number; view: ISettingsViews }) {
    this.view = view;
    this.openTab = tab;
    console.log('open view ===> ', this.view, view);
    console.log('open tab ===> ', this.openTab, tab);
  }

  onGoBackToSettingsClick() {
    this.openTab = 1;
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

  onLogoutClick() {
    this.settings.signOut();
  }
}
