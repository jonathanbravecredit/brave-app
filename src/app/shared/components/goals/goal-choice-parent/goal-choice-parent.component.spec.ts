import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProgressTrackerService } from '@shared/services/progress-tracker/progress-tracker-service.service';

import { GoalChoiceParentComponent } from './goal-choice-parent.component';

//progressTrackerService: ProgressTrackerService

describe('GoalChoiceParentComponent', () => {
  let component: GoalChoiceParentComponent;
  let fixture: ComponentFixture<GoalChoiceParentComponent>;
  let progressTrackerServiceMock;

  beforeEach(async () => {
    progressTrackerServiceMock = jasmine.createSpyObj('ProgressTrackerService', ['postThenGetUserGoal', 'postUserGoal']);
    await TestBed.configureTestingModule({
      declarations: [GoalChoiceParentComponent],
      providers: [{ provide: ProgressTrackerService, useValue: progressTrackerServiceMock }],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GoalChoiceParentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
