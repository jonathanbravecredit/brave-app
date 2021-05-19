import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignupErrorValidationComponent } from './signup-error-validation.component';

describe('SignupErrorValidationComponent', () => {
  let component: SignupErrorValidationComponent;
  let fixture: ComponentFixture<SignupErrorValidationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SignupErrorValidationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SignupErrorValidationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
