import { TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { of } from 'rxjs';
import { BraveAnalyticsService } from '../brave/brave-analytics.service';
import { FacebookService } from '../facebook/facebook.service';
import { GoogleService } from '../google/google.service';

import { AnalyticsService } from './analytics.service';
import { AnalyticClickEvents, AnalyticErrorEvents, AnalyticPageViewEvents } from './constants';

// protected google: GoogleService,
// private facebook: FacebookService,
// protected mixpanel: MixpanelService,
// private brave: BraveAnalyticsService,
// private router: Router,

describe('AnalyticsService', () => {
  let service: AnalyticsService;
  let googleMock: any;
  let facebookMock: any;
  let braveMock: any;
  let routerMock: any;

  beforeEach(() => {
    googleMock = jasmine.createSpyObj('GoogleService', [
      'fireUserTrackingEvent',
      'fireClickEvent',
      'firePageViewEvent',
      'fireErrorEvent',
      'fireErrorEvent',
    ]);
    facebookMock = jasmine.createSpyObj('FacebookService', ['fireCompleteRegistration']);
    braveMock = jasmine.createSpyObj('BraveAnalyticsService', ['fireClickEvent']);
    routerMock = jasmine.createSpyObj('Router', [''], { events: of() });

    TestBed.configureTestingModule({
      providers: [
        { provide: GoogleService, useValue: googleMock },
        { provide: FacebookService, useValue: facebookMock },
        { provide: BraveAnalyticsService, useValue: braveMock },
        { provide: Router, useValue: routerMock },
      ],
    });
    service = TestBed.inject(AnalyticsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should run fireUserTrackingEvent on fireUserTrackingEvent', () => {
    service.disable = false;
    service.fireUserTrackingEvent('test');
    expect(googleMock.fireUserTrackingEvent).toHaveBeenCalled();
  });

  it('should run google.fireClickEvent on fireLoginTrackingEvent if google is true', () => {
    service.disable = false;
    service.fireClickEvent({} as AnalyticClickEvents, { google: true, brave: false });
    expect(googleMock.fireClickEvent).toHaveBeenCalled();
  });
  it('should run brave.fireClickEvent on fireLoginTrackingEvent if brave is true', () => {
    service.disable = false;
    service.fireClickEvent({} as AnalyticClickEvents, { google: false, brave: true });
    expect(braveMock.fireClickEvent).toHaveBeenCalled();
  });

  it('should run google.firePageViewEvent on firePageViewEvent', () => {
    service.disable = false;
    service.firePageViewEvent({} as AnalyticPageViewEvents);
    expect(googleMock.firePageViewEvent).toHaveBeenCalled();
  });

  it('should run google.fireErrorEvent on fireErrorEvent', () => {
    service.disable = false;
    service.fireErrorEvent({} as AnalyticErrorEvents);
    expect(googleMock.fireErrorEvent).toHaveBeenCalled();
  });

  it('should run facebook.fireCompleteRegistration on fireCompleteRegistration', () => {
    service.disable = false;
    service.fireCompleteRegistration(0, '');
    expect(facebookMock.fireCompleteRegistration).toHaveBeenCalled();
  });
});
