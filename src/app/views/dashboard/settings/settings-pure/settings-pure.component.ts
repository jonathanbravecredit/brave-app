import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IConfirmPassword } from '@shared/components/forms/simple-change-password-form/interface';
import { ISettingsViews } from '@views/dashboard/settings/settings-pure/interface';

@Component({
  selector: 'brave-settings-pure',
  templateUrl: './settings-pure.component.html',
})
export class SettingsPureComponent {
  @Output() logoutClick: EventEmitter<void> = new EventEmitter();
  @Output() changePasswordClick: EventEmitter<IConfirmPassword> = new EventEmitter();
  @Output() goToPageClick: EventEmitter<{ tab: number; view: string }> = new EventEmitter();
  @Output() goBackToSettingsClick: EventEmitter<void> = new EventEmitter();
  @Output() backButtonClick: EventEmitter<void> = new EventEmitter();

  @Input() openTab = 1;
  @Input() view: ISettingsViews = 'reset';

  constructor() {}
}
