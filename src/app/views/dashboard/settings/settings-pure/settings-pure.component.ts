import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { FormGroup } from '@angular/forms';
import {
  FilledClosingAlertComponent,
  IFilledClosingAlertConfig,
} from '@shared/components/alerts/filled-closing-alert/filled-closing-alert.component';
import { IDeactivateAccount } from '@shared/components/forms/simple-deactive-form/interface';
import { ISettingsViews, SettingsOptions } from '@views/dashboard/settings/settings-pure/interface';
import { ALERT_CONFIG_FAIL } from '@views/dashboard/settings/settings/constants';

@Component({
  selector: 'brave-settings-pure',
  templateUrl: './settings-pure.component.html',
})
export class SettingsPureComponent {
  @ViewChild(FilledClosingAlertComponent) alert: FilledClosingAlertComponent | undefined;

  @Output() logoutClick: EventEmitter<void> = new EventEmitter();
  @Output() changePasswordClick: EventEmitter<void> = new EventEmitter();
  @Output() deactivateClick: EventEmitter<IDeactivateAccount> = new EventEmitter();
  @Output() goToPageClick: EventEmitter<{ tab: number; view: ISettingsViews }> = new EventEmitter();
  @Output() goBackToSettingsClick: EventEmitter<void> = new EventEmitter();
  @Output() backButtonClick: EventEmitter<void> = new EventEmitter();
  @Output() submitCodeClick: EventEmitter<FormGroup> = new EventEmitter();
  @Output() alertCloseClick: EventEmitter<void> = new EventEmitter();

  @Input() option: SettingsOptions = SettingsOptions.Init;
  @Input() haveResetError: boolean = false;
  @Input() resetSuccess: boolean = false;
  @Input() resetError: string = '';
  @Input() alertConfig: IFilledClosingAlertConfig = ALERT_CONFIG_FAIL;

  @Input() haveDeactivateError: boolean = false;
  @Input() deactivateSuccess: boolean = false;
  @Input() deactivateError: string = '';
  @Input() showDeactivateWarning: boolean = false;

  settingsOptions = SettingsOptions;

  constructor() {}

  showAlert(): void {
    if (this.alert) {
      this.alert.showAlert = true;
    }
  }
}
