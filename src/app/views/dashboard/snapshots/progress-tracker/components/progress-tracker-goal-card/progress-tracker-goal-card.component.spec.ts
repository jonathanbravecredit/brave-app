import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Router } from '@angular/router';
import { InitiativePatchBody, InitiativeSubTask } from '@shared/interfaces/progress-tracker.interface';
import { LinkifyPipe } from '@shared/pipes/linkify/linkify.pipe';
import { ProgressTrackerService } from '@shared/services/progress-tracker/progress-tracker-service.service';

import { ProgressTrackerGoalCardComponent } from './progress-tracker-goal-card.component';

describe('ProgressTrackerGoalCardComponent', () => {
  let component: ProgressTrackerGoalCardComponent;
  let fixture: ComponentFixture<ProgressTrackerGoalCardComponent>;
  let progressTrackerServiceMock: any;
  let routerMock: any;

  beforeEach(async () => {
    progressTrackerServiceMock = jasmine.createSpyObj('ProgressTrackerService', ['updateProgressTrackerData']);
    routerMock = jasmine.createSpyObj('Router', ['navigate']);
    await TestBed.configureTestingModule({
      declarations: [ProgressTrackerGoalCardComponent, LinkifyPipe],
      imports: [HttpClientTestingModule, BrowserAnimationsModule],
      providers: [
        { provide: ProgressTrackerService, useValue: progressTrackerServiceMock },
        { provide: Router, useValue: routerMock },
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProgressTrackerGoalCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should set patchBody properly on init', () => {
    component.subTask = { parentId: 'test 1', taskId: 'test 2', taskStatus: 'test 3' } as InitiativeSubTask;

    component.ngOnInit();

    expect(component.patchBody).toEqual({
      parentId: 'test 1',
      taskId: 'test 2',
      taskStatus: 'test 3',
    } as InitiativePatchBody);
  });
});
