import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { IConfirmPassword } from '@shared/components/forms/simple-change-password-form/interface';
import { SimpleChangePasswordFormComponent } from '@shared/components/forms/simple-change-password-form/simple-change-password-form.component';
import { OptionPasswordResetViewState } from '@views/dashboard/settings/option-password-reset/interface';

@Component({
  selector: 'brave-option-password-reset',
  templateUrl: './option-password-reset.component.html',
})
export class OptionPasswordResetComponent implements OnInit {
  @Input() haveResetError: boolean = false;
  @Input() resetSuccess: boolean = false;
  @Input() resetError: string = '';
  @Output() changePasswordClick: EventEmitter<IConfirmPassword> = new EventEmitter();
  @Output() goBackToSettingsClick: EventEmitter<void> = new EventEmitter();
  @ViewChild(SimpleChangePasswordFormComponent) pwForm: SimpleChangePasswordFormComponent | undefined;

  constructor() {}

  ngOnInit(): void {}
}
