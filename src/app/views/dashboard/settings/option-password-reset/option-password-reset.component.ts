import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IConfirmPassword } from '@shared/components/forms/simple-change-password-form/interface';
import { OptionPasswordResetViewState } from '@views/dashboard/settings/option-password-reset/interface';

@Component({
  selector: 'brave-option-password-reset',
  templateUrl: './option-password-reset.component.html',
})
export class OptionPasswordResetComponent implements OnInit {
  @Input() viewState: OptionPasswordResetViewState = 'init';
  @Output() changePasswordClick: EventEmitter<IConfirmPassword> = new EventEmitter();
  @Output() goBackToSettingsClick: EventEmitter<void> = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}
}
