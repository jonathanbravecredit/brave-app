import { Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { SettingsService } from '@shared/services/settings/settings.service';
import { OutlineInputComponent } from '../inputs/outline-input/outline-input.component';
import { SettingsOptionComponent } from './settings-option/settings-option.component';

@Component({
  selector: 'brave-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {
  @Output() navigated: EventEmitter<string> = new EventEmitter();
  @ViewChild('settingOptionEmail') settingOptionEmail: SettingsOptionComponent | undefined;
  @ViewChild('settingOptionPassword') settingOptionPassword: SettingsOptionComponent | undefined;
  @ViewChild('settingOptionDeactivate') settingOptionDeactivate: SettingsOptionComponent | undefined;

  currentPage: string = '';

  constructor(private settings: SettingsService) { }

  ngOnInit(): void {
  }

  goBack(): void {
    this.bindPageToComponentGoBack(this.settingOptionEmail);
    this.bindPageToComponentGoBack(this.settingOptionPassword);
    this.bindPageToComponentGoBack(this.settingOptionDeactivate);
  }

  bindPageToComponentGoBack(settingsOptionComponent: SettingsOptionComponent | undefined): void {
    if (this.currentPage === settingsOptionComponent!.id) {
      settingsOptionComponent!.goBack();
    }
  }

  isOtherPageButThis(pageName: string): boolean {
    return this.currentPage !== 'initial' || this.currentPage !== pageName;
  }

  logout() {

  }

  handleChangeInPassword(currentPasswordInput: OutlineInputComponent, newPasswordInput: OutlineInputComponent) {
    const password = (currentPasswordInput.componentFormGroup.controls['input'] as unknown) as string;
    const newPassword = (newPasswordInput.componentFormGroup.controls['input'] as unknown) as string;
    this.settings.resetPassword(password, newPassword).then((result) => {
      if (result) {
        this.settingOptionPassword?.setSuccess();
      }
    })
  }

  handleChangeInEmail(currentPasswordInput: OutlineInputComponent, newEmailInput: OutlineInputComponent) {
    // TODO Find a way to include requirements of current email, due to a lack of use of password value
    const password = (currentPasswordInput.componentFormGroup.controls['input'] as unknown) as string;
    const newEmail = (newEmailInput.componentFormGroup.controls['input'] as unknown) as string;
    this.settings.updateUserEmail(newEmail).then((result) => {
      if (result) {
        this.settingOptionEmail?.setSuccess();
      }
    })
  }

  handleDeactivation(currentPasswordInput: OutlineInputComponent) {
    // TODO Find a way to include requirements of current email
    const email = (currentPasswordInput.componentFormGroup.controls['input'] as unknown) as string;
    this.settings.deactivateAccount().then((result) => {
      if (result) {
        this.settingOptionDeactivate?.setSuccess();
      }
    })
  }
}
