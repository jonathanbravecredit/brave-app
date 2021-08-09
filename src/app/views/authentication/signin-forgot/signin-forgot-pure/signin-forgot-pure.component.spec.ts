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
});
