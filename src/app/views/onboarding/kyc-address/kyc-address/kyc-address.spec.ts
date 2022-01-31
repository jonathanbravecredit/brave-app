import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { AnalyticsService } from '@shared/services/analytics/analytics/analytics.service';
import { KycService } from '@shared/services/kyc/kyc.service';
import { KycAddressComponent } from '@views/onboarding/kyc-address/kyc-address/kyc-address.component';

describe('KycAddressComponent', () => {
  let component: KycAddressComponent;
  let fixture: ComponentFixture<KycAddressComponent>;
  let routerMock: any;
  let kycServiceMock: any;
  let analyticsMock: any;
  // private router: Router, private kycService: KycService, private analytics: AnalyticsService)

  beforeEach(async () => {
    routerMock = jasmine.createSpyObj('Router', ['']);
    kycServiceMock = jasmine.createSpyObj('KycService', ['']);
    analyticsMock = jasmine.createSpyObj('AnalyticsService', ['']);

    await TestBed.configureTestingModule({
      declarations: [KycAddressComponent],
      providers: [
        { provide: Router, useValue: routerMock },
        { provide: KycService, useValue: kycServiceMock },
        { provide: AnalyticsService, useValue: analyticsMock },
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KycAddressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
