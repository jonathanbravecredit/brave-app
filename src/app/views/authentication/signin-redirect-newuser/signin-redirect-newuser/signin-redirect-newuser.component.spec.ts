import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SigninRedirectNewuserComponent } from './signin-redirect-newuser.component';

describe('SigninRedirectNewuserComponent', () => {
  let component: SigninRedirectNewuserComponent;
  let fixture: ComponentFixture<SigninRedirectNewuserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SigninRedirectNewuserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SigninRedirectNewuserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
