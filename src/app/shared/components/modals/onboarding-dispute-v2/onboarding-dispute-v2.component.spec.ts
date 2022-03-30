import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OnboardingDisputeV2Component } from './onboarding-dispute-v2.component';

describe('OnboardingDisputeV2Component', () => {
  let component: OnboardingDisputeV2Component;
  let fixture: ComponentFixture<OnboardingDisputeV2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OnboardingDisputeV2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OnboardingDisputeV2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
