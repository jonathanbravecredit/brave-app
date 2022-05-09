import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Initiative } from '@shared/interfaces/progress-tracker.interface';
import { DashboardService } from '@shared/services/dashboard/dashboard.service';
import { ProgressTrackerService } from '@shared/services/progress-tracker/progress-tracker-service.service';
import { of } from 'rxjs';
import { ProgressTrackerComponent } from './progress-tracker.component';

//public progressTracker: ProgressTrackerService, public dashboard: DashboardService

describe('ProgressTrackerComponent', () => {
  let component: ProgressTrackerComponent;
  let fixture: ComponentFixture<ProgressTrackerComponent>;
  let progressTrackerMock: any;
  let dashboardMock: any;

  beforeEach(async () => {
    progressTrackerMock = jasmine.createSpyObj('ProgressTrackerService', ['findFutureScore']);
    dashboardMock = jasmine.createSpyObj('DashboardService', [''], { dashScore$: of(), dashDelta$: of() });

    await TestBed.configureTestingModule({
      declarations: [ProgressTrackerComponent],
      providers: [
        { provide: ProgressTrackerService, useValue: progressTrackerMock },
        { provide: DashboardService, useValue: dashboardMock },
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProgressTrackerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
