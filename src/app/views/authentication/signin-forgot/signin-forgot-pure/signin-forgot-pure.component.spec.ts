import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormGroup } from '@angular/forms';
import { FilledClosingAlertComponent } from '@shared/components/alerts/filled-closing-alert/filled-closing-alert.component';

import { SigninForgotPureComponent } from './signin-forgot-pure.component';

describe('SigninForgotPureComponent', () => {
  let component: SigninForgotPureComponent;
  let fixture: ComponentFixture<SigninForgotPureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SigninForgotPureComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SigninForgotPureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should create viewState with the default of "init" if a viewState is not passed in ', () => {
    expect(component.viewState).toEqual('init');
  });

  it('should create an empty array emailConfig if nothing is passed in', () => {
    expect(component.emailConfig).toEqual([]);
  });

  it('should create an empty array codesConfig if nothing is passed in', () => {
    expect(component.codesConfig).toEqual([]);
  });

  it('should create the proper default object for alertConfig if nothing is passed in', () => {
    expect(component.alertConfig).toEqual({
      size: 'base',
      backgroundColor: 'bg-indigo-800',
      color: 'text-white',
      alertBody: 'Something went wrong. Please try again.',
    });
  });

  it('should run submitEmailClick.emit on onSubmitEmail', () => {
    spyOn(component.submitEmailClick, 'emit');
    component.onSubmitEmail({} as FormGroup);
    expect(component.submitEmailClick.emit).toHaveBeenCalled();
  });

  it('should run submitCodeClick.emit on onSubmitCode', () => {
    spyOn(component.submitCodeClick, 'emit');
    component.onSubmitCode({} as FormGroup);
    expect(component.submitCodeClick.emit).toHaveBeenCalled();
  });

  it('should set alert.showAlert to true on onSubmitCode if alert is truthy', () => {
    component.alert = { showAlert: false } as FilledClosingAlertComponent;
    component.showAlert();
    expect(component.alert.showAlert).toBeTrue();
  });
});
