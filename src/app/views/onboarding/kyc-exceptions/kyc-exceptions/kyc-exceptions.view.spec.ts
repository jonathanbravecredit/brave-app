import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute, Router } from '@angular/router';
import { AnalyticsService } from '@shared/services/analytics/analytics/analytics.service';
import { of } from 'rxjs';

import { KycExceptionsView } from './kyc-exceptions.view';

class RouteMock {
  queryParams = of();
}

describe('KycExceptionsView', () => {
  let component: KycExceptionsView;
  let fixture: ComponentFixture<KycExceptionsView>;
  let routerMock: any;
  let analyticsMock: any;

  beforeEach(async () => {
    routerMock = jasmine.createSpyObj('Router', ['navigate']);
    analyticsMock = jasmine.createSpyObj('AnalyticsService', ['fireErrorEvent']);

    await TestBed.configureTestingModule({
      declarations: [KycExceptionsView],
      providers: [
        { provide: AnalyticsService, useValue: analyticsMock },
        { provide: Router, useValue: routerMock },
        { provide: ActivatedRoute, useClass: RouteMock },
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KycExceptionsView);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
