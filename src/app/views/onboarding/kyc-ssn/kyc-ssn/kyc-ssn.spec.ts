import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { AbstractControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { OutlineSsnLastfourFormComponent } from '@shared/components/forms/outline-ssn-lastfour-form/outline-ssn-lastfour-form.component';
import { AnalyticsService } from '@shared/services/analytics/analytics/analytics.service';
import { KycService } from '@shared/services/kyc/kyc.service';
import { DOMHelper } from '@testing/dom-helper';
import { Helper } from '@testing/test-helper';
import { KycSsnPureComponent } from '@views/onboarding/kyc-ssn/kyc-ssn-pure/kyc-ssn-pure.component';
import { KycSsnComponent } from '@views/onboarding/kyc-ssn/kyc-ssn/kyc-ssn.component';

describe('KycSsnComponent', () => {
  let component: KycSsnComponent;
  let fixture: ComponentFixture<KycSsnComponent>;
  let dh: DOMHelper<KycSsnComponent>;
  let h: Helper<KycSsnComponent>;
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
      declarations: [KycSsnComponent],
      providers: [
        { provide: AnalyticsService, useValue: analyticsMock },
        { provide: Router, useValue: routerMock },
        { provide: KycService, useValue: kycServiceMock },
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KycSsnComponent);
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
      formComponent: { parentForm: parentFormTest } as OutlineSsnLastfourFormComponent,
    } as KycSsnPureComponent;

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

  it('should set snnError to true if lastFour length less than 4', () => {
    component.handleError({ lastfour: { value: { input: '123' } } as AbstractControl });

    expect(component.ssnError).toEqual(true);
  });

  it('should run updateIndicativeEnrichment when handle bailout is called', () => {
    component.handleBailout();

    expect(kycServiceMock.updateIndicativeEnrichment).toHaveBeenCalled();
  });

  it('should run navigate when handle bailout is called', () => {
    component.handleBailout();

    expect(routerMock.navigate).toHaveBeenCalled();
  });

  it('should run fireClickEvent when goToNext is called', () => {
    component.goToNext({} as FormGroup);

    expect(analyticsMock.fireClickEvent).toHaveBeenCalled();
  });

  it('should run formatAttributes when goToNext is called and form is valid', () => {
    spyOn(component, 'formatAttributes');

    component.goToNext({ valid: true } as FormGroup);

    expect(component.formatAttributes).toHaveBeenCalled();
  });

  it('should set ssnError to false when goToNext is called', () => {
    component.goToNext({ valid: true } as FormGroup);

    expect(component.ssnError).toEqual(false);
  });

  it('should run updateUserAttributesAsync when goToNext is called and form is valid', () => {
    component.goToNext({ valid: true, value: [] } as FormGroup);

    expect(kycServiceMock.updateUserAttributesAsync).toHaveBeenCalled();
  });

  it('should run getIndicativeEnrichmentResults when goToNext is called and form is valid', fakeAsync(() => {
    kycServiceMock.updateUserAttributesAsync.and.returnValue({});

    component.goToNext({ valid: true, value: [] } as FormGroup);

    tick();

    expect(kycServiceMock.getIndicativeEnrichmentResults).toHaveBeenCalled();
  }));

  it('should run handleBailout when goToNext is called, form is valid and getIndicativeEnrichmentResults reponse is unsuccessful', fakeAsync(() => {
    kycServiceMock.getIndicativeEnrichmentResults.and.returnValue({ success: false, data: null });

    spyOn(component, 'handleBailout');

    component.goToNext({ valid: true, value: [] } as FormGroup);

    tick();

    expect(component.handleBailout).toHaveBeenCalled();
  }));

  it('should run processIndicativeEnrichmentResponse when goToNext is called, form is valid and getIndicativeEnrichmentResults reponse is unsuccessful', fakeAsync(() => {
    kycServiceMock.getIndicativeEnrichmentResults.and.returnValue({ success: true, data: {} });

    component.goToNext({ valid: true, value: [] } as FormGroup);

    tick();

    expect(kycServiceMock.processIndicativeEnrichmentResponse).toHaveBeenCalled();
  }));

  it('should run handleBailout when goToNext is called, form is valid, getIndicativeEnrichmentResults reponse is successful, and full is falsy', fakeAsync(() => {
    kycServiceMock.getIndicativeEnrichmentResults.and.returnValue({ success: true, data: {} });

    kycServiceMock.processIndicativeEnrichmentResponse.and.returnValue({ SSN: '' });

    spyOn(component, 'handleBailout');

    component.goToNext({ valid: true, value: [] } as FormGroup);

    tick();

    expect(component.handleBailout).toHaveBeenCalled();
  }));

  it('should run updateUserAttributesAsync when goToNext is called, form is valid, getIndicativeEnrichmentResults reponse is successful, and full is truthy', fakeAsync(() => {
    kycServiceMock.getIndicativeEnrichmentResults.and.returnValue({ success: true, data: {} });

    kycServiceMock.processIndicativeEnrichmentResponse.and.returnValue({ SSN: '1234' });

    component.goToNext({ valid: true, value: [] } as FormGroup);

    tick();

    expect(kycServiceMock.updateUserAttributesAsync).toHaveBeenCalled();
  }));

  it('should run completeStep when goToNext is called, form is valid, getIndicativeEnrichmentResults reponse is successful, and full is truthy', fakeAsync(() => {
    kycServiceMock.getIndicativeEnrichmentResults.and.returnValue({ success: true, data: {} });

    kycServiceMock.processIndicativeEnrichmentResponse.and.returnValue({ SSN: '1234' });

    component.goToNext({ valid: true, value: [] } as FormGroup);

    tick();

    expect(kycServiceMock.completeStep).toHaveBeenCalled();
  }));

  it('should run navigate when goToNext is called, form is valid, getIndicativeEnrichmentResults reponse is successful, and full is truthy', fakeAsync(() => {
    kycServiceMock.getIndicativeEnrichmentResults.and.returnValue({ success: true, data: {} });

    kycServiceMock.processIndicativeEnrichmentResponse.and.returnValue({ SSN: '1234' });

    component.goToNext({ valid: true, value: [] } as FormGroup);

    tick();

    expect(routerMock.navigate).toHaveBeenCalled();
  }));
});
