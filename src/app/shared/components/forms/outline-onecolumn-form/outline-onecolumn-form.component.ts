import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { FormGroup, FormBuilder } from "@angular/forms";
import { BaseFormComponent } from "@shared/components/forms/base-form/base-form.component";
import { IOutlineInputeConfig } from "@shared/components/inputs/outline-input/outline-input.component";
import { FilledSpinningButtonComponent } from "../../buttons/filled-spinning-button/filled-spinning-button.component";

@Component({
  selector: "brave-outline-onecolumn-form",
  templateUrl: "./outline-onecolumn-form.component.html",
})
export class OutlineOnecolumnFormComponent extends BaseFormComponent {
  @Input() buttonText: string = "";
  @Input() configs: IOutlineInputeConfig[] = [];
  @Output() buttonClick: EventEmitter<void> = new EventEmitter();

  constructor(fb: FormBuilder) {
    super(fb, "outline-onecolumn-form");
  }

  submit(spinner: FilledSpinningButtonComponent) {
    if (this.parentForm.valid) {
      this.submitForm();
      spinner.clicked = true;
      spinner.spinning = true;
      spinner.refreshClass();
    }
  }

  updateErrorMessage(message: string): void {
    this.haveError$.next(true);
    this.haveError = true;
    this.errorMessage = message;
  }
}
