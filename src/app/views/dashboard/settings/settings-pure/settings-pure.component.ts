import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IConfirmPassword } from '@shared/components/forms/simple-change-password-form/interface';
import { IDeactivateAccount } from '@shared/components/forms/simple-deactive-form/interface';
import { ISettingsViews, SettingsOptions } from '@views/dashboard/settings/settings-pure/interface';

@Component({
  selector: 'brave-settings-pure',
  templateUrl: './settings-pure.component.html',
})
export class SettingsPureComponent {
  @Output() logoutClick: EventEmitter<void> = new EventEmitter();
  @Output() changePasswordClick: EventEmitter<IConfirmPassword> = new EventEmitter();
  @Output() deactivateClick: EventEmitter<IDeactivateAccount> = new EventEmitter();
  @Output() goToPageClick: EventEmitter<{ tab: number; view: ISettingsViews }> = new EventEmitter();
  @Output() goBackToSettingsClick: EventEmitter<void> = new EventEmitter();
  @Output() backButtonClick: EventEmitter<void> = new EventEmitter();

  @Input() option: SettingsOptions = SettingsOptions.Init;
  @Input() haveResetError: boolean = false;
  @Input() resetSuccess: boolean = false;
  @Input() resetError: string = '';

  @Input() haveDeactivateError: boolean = false;
  @Input() deactivateSuccess: boolean = false;
  @Input() deactivateError: string = '';

  settingsOptions = SettingsOptions;

  constructor() {}
}
