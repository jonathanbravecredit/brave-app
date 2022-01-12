import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SigninForgotPureComponent } from './signin-forgot-pure.component';

describe('SigninForgotPureComponent', () => {
  let component: SigninForgotPureComponent;
  let fixture: ComponentFixture<SigninForgotPureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SigninForgotPureComponent ]
    })
    .compileComponents();
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
});
