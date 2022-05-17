import { Component, ViewChild } from "@angular/core";
import { FormBuilder } from "@angular/forms";
import { BaseFormComponent } from "@shared/components/forms/base-form/base-form.component";
import { Observable } from "rxjs";
import { FilledSpinningButtonComponent } from "../../buttons/filled-spinning-button/filled-spinning-button.component";

@Component({
  selector: "brave-outline-ssn-full-form",
  templateUrl: "./outline-ssn-full-form.component.html",
})
export class OutlineSsnFullFormComponent extends BaseFormComponent {
  values$: Observable<any>;
  status$: Observable<any>;
  @ViewChild("spinner") spinner: FilledSpinningButtonComponent | undefined;

  constructor(fb: FormBuilder) {
    super(fb, "ssnfull-form");
    this.values$ = this.parentForm.valueChanges;
    this.status$ = this.parentForm.statusChanges;
  }

  ngOnInit(): void {}
}
