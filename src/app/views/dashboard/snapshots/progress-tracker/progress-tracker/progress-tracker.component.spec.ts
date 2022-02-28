import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Store } from '@ngxs/store';
import { DashboardService } from '@shared/services/dashboard/dashboard.service';
import { of } from 'rxjs';

import { ProgressTrackerComponent } from './progress-tracker.component';

// private dashboardService: DashboardService, private store: Store

describe('ProgressTrackerComponent', () => {
  let component: ProgressTrackerComponent;
  let fixture: ComponentFixture<ProgressTrackerComponent>;
  let dashboardMock: any;
  let storeMock: any;

  beforeEach(async () => {
    dashboardMock = jasmine.createSpyObj('DashboardService', [''], {progressTrackerData$: of()});
    storeMock = jasmine.createSpyObj('Store', ['selectSnapshot']);

    await TestBed.configureTestingModule({
      declarations: [ProgressTrackerComponent],
      providers: [
        { provide: DashboardService, useValue: dashboardMock },
        { provide: Store, useValue: storeMock },
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
