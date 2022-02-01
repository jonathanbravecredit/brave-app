import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { AbstractControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { OutlinePhoneFormComponent } from '@shared/components/forms/outline-phone-form/outline-phone-form.component';
import { AnalyticsService } from '@shared/services/analytics/analytics/analytics.service';
import { KycService } from '@shared/services/kyc/kyc.service';
import { KycPhonenumberPureComponent } from '@views/onboarding/kyc-phonenumber/kyc-phonenumber-pure/kyc-phonenumber-pure.component';
import { KycPhonenumberComponent } from '@views/onboarding/kyc-phonenumber/kyc-phonenumber/kyc-phonenumber.component';
import { of } from 'rxjs';

describe('KycPhonenumberComponent', () => {
  let component: KycPhonenumberComponent;
  let fixture: ComponentFixture<KycPhonenumberComponent>;
  let routerMock: any;
  let analyticsMock: any;
  let kycServiceMock: any;

  beforeEach(async () => {
    routerMock = jasmine.createSpyObj('Router', ['navigate']);
    analyticsMock = jasmine.createSpyObj('AnalyticsService', ['firePageViewEvent', 'fireClickEvent']);
    kycServiceMock = jasmine.createSpyObj('KycService', [
      'activateStep',
      'inactivateStep',
      'updateUserAttributesAsync',
      'getGetAuthenticationQuestionsResults',
      'handleGetAuthenticationFlow',
      'handleGetAuthenticationBailout',
    ]);

    await TestBed.configureTestingModule({
      declarations: [KycPhonenumberComponent],
      providers: [
        { provide: AnalyticsService, useValue: analyticsMock },
        { provide: Router, useValue: routerMock },
        { provide: KycService, useValue: kycServiceMock },
      ],
    }).compileComponents();
  });
  beforeEach(() => {
    fixture = TestBed.createComponent(KycPhonenumberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should run firePageViewEvent on init', () => {
    component.ngOnInit();

    expect(analyticsMock.firePageViewEvent).toHaveBeenCalled();
  });

  it('should run activateStep on init', () => {
    component.ngOnInit();

    expect(kycServiceMock.activateStep).toHaveBeenCalled();
  });

  it('should set form to pure.formComponent.parentForm on ngAfterViewInit', () => {
    let parentFormTest = {} as FormGroup;
    component.pure = {
      formComponent: { parentForm: parentFormTest } as OutlinePhoneFormComponent,
    } as KycPhonenumberPureComponent;

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

  it('should set phoneError to true when handleError is called with a phoneNum length less than 10', () => {
    component.handleError({ phone: { value: { input: '123456789' } } as AbstractControl });

    expect(component.phoneError).toEqual(true);
  });

  it('should set hasError to true when handleError is called', () => {
    component.handleError({ phone: { value: { input: '123456789' } } as AbstractControl });

    expect(component.hasError).toEqual(true);
  });

  it('should run fireClickEvent when goToNext is called', () => {
    component.goToNext({} as FormGroup);

    expect(analyticsMock.fireClickEvent).toHaveBeenCalled();
  });

  it('should set phoneError to false when goToNext is called and form.valid is true', () => {
    component.goToNext({valid: true} as FormGroup);

    expect(component.phoneError).toEqual(false);
  });

  it('should run updateUserAttributesAsync when goToNext is called', fakeAsync(() => {
    component.goToNext({valid: true, value: []} as FormGroup);

    tick()

    expect(kycServiceMock.updateUserAttributesAsync).toHaveBeenCalled()
  }))

  it('should run getGetAuthenticationQuestionsResults when goToNext is called', fakeAsync(() => {
    component.goToNext({valid: true, value: []} as FormGroup);

    tick()

    expect(kycServiceMock.getGetAuthenticationQuestionsResults).toHaveBeenCalled()
  }))

  it('should run handleGetAuthenticationFlow when goToNext is called', fakeAsync(() => {
    component.goToNext({valid: true, value: []} as FormGroup);

    tick()

    expect(kycServiceMock.handleGetAuthenticationFlow).toHaveBeenCalled()
  }))

  // it('should run handleGetAuthenticationBailout when goToNext is called', fakeAsync(() => { //todo test try catch - catch function call
  //   kycServiceMock.updateUserAttributesAsync.and.returnValue(new Error('testError'))

  //   component.goToNext({ valid: true, value: [] } as FormGroup);

  //   tick()

  //   expect(kycServiceMock.handleGetAuthenticationBailout).toHaveBeenCalled()
  // }))

});
