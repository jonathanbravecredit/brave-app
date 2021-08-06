import { Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IConfirmPassword } from '@shared/components/forms/simple-change-password-form/interface';
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

  view: ISettingsViews = 'reset';
  openTab: number = 1;

  constructor(private router: Router, private route: ActivatedRoute, private settings: SettingsService) {}

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
  onGoToPageClick({ tab, view }: { tab: number; view: string }) {
    this.view === view;
    this.openTab = tab;
  }

  onGoBackToSettingsClick() {
    this.openTab = 1;
  }

  onChangePasswordClick(evt: IConfirmPassword) {
    this.settings
      .resetPassword(evt.password, evt.newPassword)
      .then((results) => {
        if (this.resetOption) this.resetOption.viewState = 'success';
      })
      .catch((reason) => {
        console.log('password reset rejected');
      });
  }

  onLogoutClick() {
    this.settings.signOut();
  }
}
