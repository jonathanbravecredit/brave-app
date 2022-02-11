import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DashboardService } from '@shared/services/dashboard/dashboard.service';
import { FeatureFlagsService } from '@shared/services/featureflags/feature-flags.service';

import { DashboardEnrolledPureComponent } from './dashboard-enrolled-pure.component';

describe('DashboardEnrolledPureComponent', () => {
  let component: DashboardEnrolledPureComponent;
  let fixture: ComponentFixture<DashboardEnrolledPureComponent>;
  let dashboardServiceMock: any
  let featureflagsMock: any


  beforeEach(async () => {
    dashboardServiceMock = jasmine.createSpyObj('DashboardService', ['getLastUpdated', 'getWelcomeMessage'])
    featureflagsMock = jasmine.createSpyObj('FeatureFlagsService', [''])
    await TestBed.configureTestingModule({
      declarations: [DashboardEnrolledPureComponent],
      providers: [
        { provide: DashboardService, useValue: dashboardServiceMock},
        {provide: FeatureFlagsService, useValue: featureflagsMock},
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardEnrolledPureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
