import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KycErrorValidationComponent } from './kyc-error-validation.component';

describe('KycErrorValidationComponent', () => {
  let component: KycErrorValidationComponent;
  let fixture: ComponentFixture<KycErrorValidationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KycErrorValidationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KycErrorValidationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
