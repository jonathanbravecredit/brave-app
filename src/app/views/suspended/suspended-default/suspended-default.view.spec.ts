import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AnalyticsService } from '@shared/services/analytics/analytics/analytics.service';
import { DOMHelper } from '@testing/dom-helper';
import { Helper } from '@testing/test-helper';

import { SuspendedDefaultView } from './suspended-default.view';

describe('SuspendedDefaultView', () => {
  let component: SuspendedDefaultView;
  let fixture: ComponentFixture<SuspendedDefaultView>;
  let dh: DOMHelper<SuspendedDefaultView>;
  let h: Helper<SuspendedDefaultView>;
  let analyticsServiceMock: any;

  beforeEach(async () => {
    analyticsServiceMock = jasmine.createSpyObj('AnalyticsService', ['fireErrorEvent']);
    analyticsServiceMock.fireErrorEvent.and.returnValue(null);

    await TestBed.configureTestingModule({
      declarations: [SuspendedDefaultView],
      providers: [{ provide: AnalyticsService, useValue: analyticsServiceMock }],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SuspendedDefaultView);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
