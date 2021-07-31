import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SigninForgotComponent } from './signin-forgot.component';

describe('SigninForgotComponent', () => {
  let component: SigninForgotComponent;
  let fixture: ComponentFixture<SigninForgotComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SigninForgotComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SigninForgotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
