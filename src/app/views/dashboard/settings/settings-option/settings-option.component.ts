import { Component, Input } from '@angular/core';

@Component({
  selector: 'brave-settings-option',
  templateUrl: './settings-option.component.html',
})
export class SettingsOptionComponent {
  @Input() icon: string = 'perm_identity';
  @Input() label: string = 'Settings';

  constructor() {}
}
