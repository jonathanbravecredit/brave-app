import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { IOutlineInputeConfig } from '@shared/components/inputs/outline-input/outline-input.component';

@Component({
  selector: 'brave-simple-signup-form',
  templateUrl: './simple-signup-form.component.html',
})
export class SimpleSignupFormComponent implements OnInit {
  parentForm: FormGroup;
  emailConfig: IOutlineInputeConfig = {
    size: 'sm',
    label: 'Email',
    placeholder: 'Email address',
    autocomplete: 'email',
  };
  passwordConfig: IOutlineInputeConfig = {
    size: 'sm',
    label: 'Password',
    placeholder: 'Password',
    autocomplete: 'off',
  };
  constructor(private fb: FormBuilder, private router: Router) {
    this.parentForm = fb.group({
      name: ['simple-signup-form'],
    }); // simple parent form with name of form
  }

  ngOnInit(): void {}

  addChild(childName: string, childGroup: FormGroup): void {
    this.parentForm.addControl(childName, childGroup);
  }
  goToForgot(): void {
    this.router.navigate(['/']);
  }
}
