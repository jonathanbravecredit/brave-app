import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { ProgressTrackerService } from '@shared/services/progress-tracker/progress-tracker-service.service';

import { KycGoalChoiceComponent } from './kyc-goal-choice.component';

describe('KycGoalChoiceComponent', () => {
  let component: KycGoalChoiceComponent;
  let fixture: ComponentFixture<KycGoalChoiceComponent>;
  let progressTrackerServiceMock: any
  let routerMock: any

  beforeEach(async () => {
    progressTrackerServiceMock = jasmine.createSpyObj('ProgressTrackerService', ['postUserGoal'])
    routerMock = jasmine.createSpyObj('Router', ['navigate'])
    await TestBed.configureTestingModule({
      declarations: [KycGoalChoiceComponent],
      providers: [
        {provide: ProgressTrackerService, useValue: progressTrackerServiceMock},
        {provide: Router, useValue: routerMock},
      ]
    })
    .compileComponents();
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
