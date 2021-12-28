import { Renderer2 } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Store } from '@ngxs/store';
import { OnboardingService } from '@views/onboarding/onboarding.service';
import { of } from 'rxjs';

import { OnboardingComponent } from './onboarding.component';

describe('OnboardingComponent', () => {
  let component: OnboardingComponent;
  let fixture: ComponentFixture<OnboardingComponent>;
  let storeMock: any;
  let onboardingServiceMock: any;

  beforeEach(async () => {
    storeMock = jasmine.createSpyObj('Store', ['select']);
    storeMock.select.and.returnValue(of({}));

    onboardingServiceMock = jasmine.createSpyObj('OnboardingService', ['abandonOnboarding']);
    onboardingServiceMock.abandonOnboarding.and.returnValue(null);

    await TestBed.configureTestingModule({
      declarations: [OnboardingComponent],
      providers: [
        Renderer2,
        { provide: Store, useValue: storeMock },
        { provide: OnboardingService, useValue: onboardingServiceMock },
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OnboardingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
