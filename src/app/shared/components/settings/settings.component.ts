import { Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
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

  constructor() { }

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

  handleEmailChange(data: { newEmail: string, password: string }) {
    
  }
}
