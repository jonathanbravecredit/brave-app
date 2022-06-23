import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from "@angular/core";
import { FormGroup } from "@angular/forms";
import {
  FilledClosingAlertComponent,
  IFilledClosingAlertConfig,
} from "@shared/components/alerts/filled-closing-alert/filled-closing-alert.component";
import { OutlineOnecolumnFormComponent } from "@shared/components/forms/outline-onecolumn-form/outline-onecolumn-form.component";
import { IOutlineInputeConfig } from "@shared/components/inputs/outline-input/outline-input.component";
import { SigninForgotViewState } from "@views/authentication/signin-forgot/signin-forgot/interface";

@Component({
  selector: "brave-signin-forgot-pure",
  templateUrl: "./signin-forgot-pure.component.html",
})
export class SigninForgotPureComponent implements OnInit {
  @ViewChild(OutlineOnecolumnFormComponent) form: OutlineOnecolumnFormComponent | undefined;
  @ViewChild(FilledClosingAlertComponent) alert: FilledClosingAlertComponent | undefined;
  @Input() viewState: SigninForgotViewState = "init";
  @Input() emailConfig: IOutlineInputeConfig[] = [];
  @Input() codesConfig: IOutlineInputeConfig[] = [];
  @Input() alertConfig: IFilledClosingAlertConfig = {
    size: "base",
    backgroundColor: "bg-indigo-800",
    color: "text-white",
    alertBody: "Something went wrong. Please try again.",
  };
  @Output() submitEmailClick: EventEmitter<FormGroup> = new EventEmitter();
  @Output() submitCodeClick: EventEmitter<FormGroup> = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  onSubmitEmail(form: FormGroup): void {
    this.submitEmailClick.emit(form);
  }

  onSubmitCode(form: FormGroup): void {
    this.submitCodeClick.emit(form);
  }

  showAlert(): void {
    if (this.alert) {
      this.alert.showAlert = true;
    }
  }
}
