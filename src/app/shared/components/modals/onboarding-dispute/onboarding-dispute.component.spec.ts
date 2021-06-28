import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OnboardingDisputeComponent } from './onboarding-dispute.component';

describe('OnboardingDisputeComponent', () => {
  let component: OnboardingDisputeComponent;
  let fixture: ComponentFixture<OnboardingDisputeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OnboardingDisputeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OnboardingDisputeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
