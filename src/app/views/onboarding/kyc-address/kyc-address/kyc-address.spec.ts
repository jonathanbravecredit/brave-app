import { ComponentFixture, fakeAsync, flushMicrotasks, TestBed, tick } from '@angular/core/testing';
import { AbstractControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { OutlineAddressFormComponent } from '@shared/components/forms/outline-address-form/outline-address-form.component';
import { AnalyticsService } from '@shared/services/analytics/analytics/analytics.service';
import { KycService } from '@shared/services/kyc/kyc.service';
import { KycAddressPureComponent } from '@views/onboarding/kyc-address/kyc-address-pure/kyc-address-pure.component';
import { KycAddressComponent } from '@views/onboarding/kyc-address/kyc-address/kyc-address.component';

describe('KycAddressComponent', () => {
  let component: KycAddressComponent;
  let fixture: ComponentFixture<KycAddressComponent>;
  let routerMock: any;
  let kycServiceMock: any;
  let analyticsMock: any;
  // private router: Router, private kycService: KycService, private analytics: AnalyticsService)

  beforeEach(async () => {
    routerMock = jasmine.createSpyObj('Router', ['navigate']);
    kycServiceMock = jasmine.createSpyObj('KycService', [
      'activateStep',
      'inactivateStep',
      'updateUserAttributesAsync',
      'completeStep',
    ]);
    analyticsMock = jasmine.createSpyObj('AnalyticsService', ['firePageViewEvent', 'fireClickEvent']);

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

  it('should run firePageViewEvent on init', () => {
    component.ngOnInit();

    expect(analyticsMock.firePageViewEvent).toHaveBeenCalled();
  });

  it('should run activateStep on init', () => {
    component.ngOnInit();

    expect(kycServiceMock.activateStep).toHaveBeenCalled();
  });

  it('should set form to pure.formComponent.parentForm afterViewInit', () => {
    let testParentForm = {} as FormGroup;
    component.pure = {
      formComponent: { parentForm: testParentForm } as OutlineAddressFormComponent,
    } as KycAddressPureComponent;

    component.ngAfterViewInit();

    fixture.detectChanges();

    expect(component.form).toEqual(testParentForm);
  });

  it('should run inactivateStep when goBack is called', () => {
    component.goBack();

    expect(kycServiceMock.inactivateStep).toHaveBeenCalled();
  });

  it('should run inactivateStep when goBack is called', () => {
    component.goBack();

    expect(routerMock.navigate).toHaveBeenCalled();
  });

  it('should set hasError to true when handleError is called', () => {
    component.handleError({ test: {} as AbstractControl });

    fixture.detectChanges();

    expect(component.hasError).toEqual(true);
  });

  it('should run fireClickEvent when goToNext is called', () => {
    component.goToNext({} as FormGroup);

    expect(analyticsMock.fireClickEvent).toHaveBeenCalled();
  });

  it('should run updateUserAttributesAsync when goToNext is called and form is valid', fakeAsync(() => {
    kycServiceMock.updateUserAttributesAsync.and.returnValue(new Promise(() => {}));

    component.goToNext({ valid: true, value: 1 } as FormGroup);

    tick();

    expect(kycServiceMock.updateUserAttributesAsync).toHaveBeenCalled();
  }));

  it('should run completeStep when goToNext is called and form is valid', fakeAsync(() => {
    component.goToNext({ valid: true, value: 1 } as FormGroup);

    tick();

    expect(kycServiceMock.completeStep).toHaveBeenCalled();
  }));

  it('should run navigate when goToNext is called and form is valid', fakeAsync(() => {
    component.goToNext({ valid: true, value: 1 } as FormGroup);

    tick();

    expect(routerMock.navigate).toHaveBeenCalled();
  }));
});
