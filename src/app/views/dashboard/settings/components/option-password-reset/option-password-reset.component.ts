import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { SimpleChangePasswordFormComponent } from '@shared/components/forms/simple-change-password-form/simple-change-password-form.component';
import { CODES_CONFIG } from '@views/dashboard/settings/components/option-password-reset/constants';
import { optionPasswordResetContents } from '@views/dashboard/settings/components/option-password-reset/contents';

@Component({
  selector: 'brave-option-password-reset',
  templateUrl: './option-password-reset.component.html',
})
export class OptionPasswordResetComponent implements OnInit {
  @Input() haveResetError: boolean = false;
  @Input() resetSuccess: boolean = false;
  @Output() changePasswordClick: EventEmitter<void> = new EventEmitter();
  @Output() goBackToSettingsClick: EventEmitter<void> = new EventEmitter();
  @Output() submitCodeClick: EventEmitter<FormGroup> = new EventEmitter();
  @ViewChild(SimpleChangePasswordFormComponent) pwForm: SimpleChangePasswordFormComponent | undefined;
  content = optionPasswordResetContents;
  codesConfig = CODES_CONFIG;
  constructor() {}

  ngOnInit(): void {}
}
