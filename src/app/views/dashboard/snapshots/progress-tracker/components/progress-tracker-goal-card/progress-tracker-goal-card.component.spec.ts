import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LinkifyPipe } from '@shared/pipes/linkify/linkify.pipe';
import { ProgressTrackerService } from '@shared/services/progress-tracker/progress-tracker-service.service';

import { ProgressTrackerGoalCardComponent } from './progress-tracker-goal-card.component';

//private progressTrackerService: ProgressTrackerService

describe('ProgressTrackerGoalCardComponent', () => {
  let component: ProgressTrackerGoalCardComponent;
  let fixture: ComponentFixture<ProgressTrackerGoalCardComponent>;
  let progressTrackerServiceMock: any;

  beforeEach(async () => {
    progressTrackerServiceMock = jasmine.createSpyObj('ProgressTrackerService', ['updateProgressTrackerData']);
    await TestBed.configureTestingModule({
      declarations: [ProgressTrackerGoalCardComponent, LinkifyPipe],
      imports: [HttpClientTestingModule, BrowserAnimationsModule],
      providers: [{ provide: ProgressTrackerService, useValue: progressTrackerServiceMock }],
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
});
