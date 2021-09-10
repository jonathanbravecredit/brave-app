import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { IConfirmPassword } from '@shared/components/forms/simple-change-password-form/interface';
import { SimpleChangePasswordFormComponent } from '@shared/components/forms/simple-change-password-form/simple-change-password-form.component';
import { IDeactivateAccount } from '@shared/components/forms/simple-deactive-form/interface';
import {
  optionDeactivateContent,
  optionDeactivateSuccessContent,
} from '@views/dashboard/settings/components/option-deactivate/content';

@Component({
  selector: 'brave-option-deactivate',
  templateUrl: './option-deactivate.component.html',
})
export class OptionDeactivateComponent implements OnInit {
  @Input() haveDeactivateError: boolean = false;
  @Input() deactivateSuccess: boolean = false;
  @Input() deactivateError: string = '';
  @Output() deactivateClick: EventEmitter<void> = new EventEmitter();
  @Output() goBackToSettingsClick: EventEmitter<void> = new EventEmitter();
  @ViewChild(SimpleChangePasswordFormComponent) pwForm: SimpleChangePasswordFormComponent | undefined;
  content = optionDeactivateContent;
  successContent = optionDeactivateSuccessContent;
  constructor() {}

  ngOnInit(): void {}
}
