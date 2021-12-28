import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute, Router } from '@angular/router';
import { AnalyticsService } from '@shared/services/analytics/analytics/analytics.service';
import { KycService } from '@shared/services/kyc/kyc.service';

import { KycWelcomeComponent } from './kyc-welcome.component';

class routeMock {}

describe('KycWelcomeComponent', () => {
  let component: KycWelcomeComponent;
  let fixture: ComponentFixture<KycWelcomeComponent>;
  let routerMock: any;
  let analyticsMock: any;
  let kycServiceMock: any;

  beforeEach(async () => {
    routerMock = jasmine.createSpyObj('Router', ['navigate']);
    routerMock.navigate.and.returnValue(null);

    analyticsMock = jasmine.createSpyObj('AnalyticsService', ['firePageViewEvent', 'fireClickEvent']);
    analyticsMock.firePageViewEvent.and.returnValue(null);
    analyticsMock.fireClickEvent.and.returnValue(null);

    kycServiceMock = jasmine.createSpyObj('KycService', [
      'activateStep',
      'updateUserAttributesAsync',
      'completeStep',
      'suspendUser',
    ]);
    kycServiceMock.activateStep.and.returnValue(null);
    kycServiceMock.updateUserAttributesAsync.and.returnValue(null);
    kycServiceMock.completeStep.and.returnValue(null);
    kycServiceMock.suspendUser.and.returnValue(null);

    await TestBed.configureTestingModule({
      imports: [
        { provide: Router, useValue: routerMock },
        { provide: ActivatedRoute, useClass: routeMock },
        { provide: AnalyticsService, useValue: analyticsMock },
        { provide: KycService, useValue: kycServiceMock },
      ],
      declarations: [KycWelcomeComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KycWelcomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  xit('should create', () => {
    expect(component).toBeTruthy();
  });
});
