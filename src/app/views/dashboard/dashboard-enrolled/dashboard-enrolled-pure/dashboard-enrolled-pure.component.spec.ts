import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DashboardService } from '@shared/services/dashboard/dashboard.service';
import { FeatureFlagsService } from '@shared/services/featureflags/feature-flags.service';
import { of, Subscription } from 'rxjs';

import { DashboardEnrolledPureComponent } from './dashboard-enrolled-pure.component';

describe('DashboardEnrolledPureComponent', () => {
  let component: DashboardEnrolledPureComponent;
  let fixture: ComponentFixture<DashboardEnrolledPureComponent>;
  let dashboardServiceMock: any;
  let featureflagsMock: any;

  beforeEach(async () => {
    dashboardServiceMock = jasmine.createSpyObj('DashboardService', ['getLastUpdated', 'getWelcomeMessage'], {
      updatedOn$: of({}),
    });
    featureflagsMock = jasmine.createSpyObj('FeatureFlagsService', ['']);
    await TestBed.configureTestingModule({
      declarations: [DashboardEnrolledPureComponent],
      providers: [
        { provide: DashboardService, useValue: dashboardServiceMock },
        { provide: FeatureFlagsService, useValue: featureflagsMock },
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardEnrolledPureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should unsubscribe from dashboardDataSub$ on destroy', () => {
    component.dashboardDataSub$ = new Subscription()
    spyOn(component.dashboardDataSub$, 'unsubscribe')
    component.ngOnDestroy()
    expect(component.dashboardDataSub$.unsubscribe).toHaveBeenCalled()
  })

  it('should run getWelcomeMessage on setWelcomeMessage', () => {
    component.setWelcomeMessage()
    expect(dashboardServiceMock.getWelcomeMessage).toHaveBeenCalled()
  })

  it('should set modalOpen to !modalOpen on toggleGoalChoiceModel', () => {
    component.modalOpen = true
    component.toggleGoalChoiceModel()
    expect(component.modalOpen).toBeFalse()
  })
});
