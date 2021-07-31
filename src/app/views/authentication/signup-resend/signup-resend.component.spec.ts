import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignupResendComponent } from './signup-resend.component';

describe('SignupResendComponent', () => {
  let component: SignupResendComponent;
  let fixture: ComponentFixture<SignupResendComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SignupResendComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SignupResendComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
