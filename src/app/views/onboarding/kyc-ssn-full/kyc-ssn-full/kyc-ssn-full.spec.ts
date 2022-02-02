import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AbstractControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { OutlineSsnFullFormComponent } from '@shared/components/forms/outline-ssn-full-form/outline-ssn-full-form.component';
import { AnalyticsService } from '@shared/services/analytics/analytics/analytics.service';
import { KycService } from '@shared/services/kyc/kyc.service';
import { DOMHelper } from '@testing/dom-helper';
import { Helper } from '@testing/test-helper';
import { KycBaseComponent } from '@views/onboarding/kyc-base/kyc-base.component';
import { KycSsnFullPureComponent } from '@views/onboarding/kyc-ssn-full/kyc-ssn-full-pure/kyc-ssn-full-pure.component';
import { KycSsnFullComponent } from '@views/onboarding/kyc-ssn-full/kyc-ssn-full/kyc-ssn-full.component';

describe('KycSsnFullComponent', () => {
  let component: KycSsnFullComponent;
  let fixture: ComponentFixture<KycSsnFullComponent>;
  let dh: DOMHelper<KycSsnFullComponent>;
  let h: Helper<KycSsnFullComponent>;
  let routerMock: any;
  let analyticsMock: any;
  let kycServiceMock: any;

  beforeEach(async () => {
    routerMock = jasmine.createSpyObj('Router', ['navigate']);
    analyticsMock = jasmine.createSpyObj('AnalyticsService', ['firePageViewEvent', 'fireClickEvent']);
    kycServiceMock = jasmine.createSpyObj('KycService', [
      'activateStep',
      'inactivateStep',
      'completeStep',
      'updateUserAttributesAsync',
      'getGetAuthenticationQuestionsResults',
      'handleGetAuthenticationFlow',
      'handleGetAuthenticationBailout',
      'updateIndicativeEnrichment',
      'getIndicativeEnrichmentResults',
      'processIndicativeEnrichmentResponse',
    ]);

    await TestBed.configureTestingModule({
      declarations: [KycSsnFullComponent],
      providers: [
        { provide: AnalyticsService, useValue: analyticsMock },
        { provide: Router, useValue: routerMock },
        { provide: KycService, useValue: kycServiceMock },
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KycSsnFullComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should firePageViewEvent on init', () => {
    component.ngOnInit();
    expect(analyticsMock.firePageViewEvent).toHaveBeenCalled();
  });

  it('should activateStep on init', () => {
    component.ngOnInit();
    expect(kycServiceMock.activateStep).toHaveBeenCalled();
  });

  it('should set form to pure.formComponent.parentForm on ngAfterViewInit', () => {
    let parentFormTest = {} as FormGroup;
    component.pure = {
      formComponent: { parentForm: parentFormTest } as OutlineSsnFullFormComponent,
    } as KycSsnFullPureComponent;

    component.ngAfterViewInit();

    expect(component.form).toEqual(parentFormTest);
  });

  it('should run activateStep when goBack is called', () => {
    component.goBack();

    expect(kycServiceMock.inactivateStep).toHaveBeenCalled();
  });

  it('should run navigate when goBack is called', () => {
    component.goBack();

    expect(routerMock.navigate).toHaveBeenCalled();
  });

  it('should set ssnError to true if handle error is called and fullSsn is less than 9', () => {
    component.handleError({ full: { value: { input: '' } } as AbstractControl })

    expect(component.ssnError).toEqual(true);
  })

  it('should set hasError to true if handle error is called', () => {
    component.pure = { hasError: false, showError: false } as KycSsnFullPureComponent

    component.handleError({ full: { value: { input: '' } } as AbstractControl })

    expect(component.pure.hasError).toEqual(true);
  })

  it('should set showError to true if handle error is called', () => {
    component.pure = { hasError: false, showError: false } as KycSsnFullPureComponent


    component.handleError({ full: { value: { input: '' } } as AbstractControl })

    expect(component.pure.showError).toEqual(true);
  })

  //todo continue with format code then goToNext

});
