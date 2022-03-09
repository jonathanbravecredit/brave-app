import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { AnalyticsService } from '@shared/services/analytics/analytics/analytics.service';
import { ProgressTrackerService } from '@shared/services/progress-tracker/progress-tracker-service.service';

import { KycGoalChoiceComponent } from './kyc-goal-choice.component';

describe('KycGoalChoiceComponent', () => {
  let component: KycGoalChoiceComponent;
  let fixture: ComponentFixture<KycGoalChoiceComponent>;
  let routerMock: any;
  let analyticsMock: any;

  beforeEach(async () => {
    routerMock = jasmine.createSpyObj('Router', ['navigate']);
    analyticsMock = jasmine.createSpyObj('AnalyticsService', ['firePageViewEvent']);
    await TestBed.configureTestingModule({
      declarations: [KycGoalChoiceComponent],
      providers: [
        { provide: Router, useValue: routerMock },
        { provide: AnalyticsService, useValue: analyticsMock },
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KycGoalChoiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
