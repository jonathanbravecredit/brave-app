import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SigninRedirectNewuserPureComponent } from './signin-redirect-newuser-pure.component';

describe('SigninRedirectNewuserPureComponent', () => {
  let component: SigninRedirectNewuserPureComponent;
  let fixture: ComponentFixture<SigninRedirectNewuserPureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SigninRedirectNewuserPureComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SigninRedirectNewuserPureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
