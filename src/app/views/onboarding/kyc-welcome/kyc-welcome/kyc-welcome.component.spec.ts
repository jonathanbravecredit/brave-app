import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { OutlineNamedobFormComponent } from '@shared/components/forms/outline-namedob-form/outline-namedob-form.component';
import { AnalyticsService } from '@shared/services/analytics/analytics/analytics.service';
import { KycService } from '@shared/services/kyc/kyc.service';
import { DOMHelper } from '@testing/dom-helper';
import { Helper } from '@testing/test-helper';
import { KycWelcomePureComponent } from '@views/onboarding/kyc-welcome/kyc-welcome-pure/kyc-welcome-pure.component';
import { KycWelcomeComponent } from '@views/onboarding/kyc-welcome/kyc-welcome/kyc-welcome.component';

describe('KycWelcomeComponent', () => {
  let component: KycWelcomeComponent;
  let fixture: ComponentFixture<KycWelcomeComponent>;
  let dh: DOMHelper<KycWelcomeComponent>;
  let h: Helper<KycWelcomeComponent>;
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
      'suspendUser',
      'updateUserAttributesAsync',
      'getGetAuthenticationQuestionsResults',
      'handleGetAuthenticationFlow',
      'handleGetAuthenticationBailout',
      'updateIndicativeEnrichment',
      'getIndicativeEnrichmentResults',
      'processIndicativeEnrichmentResponse',
    ]);

    await TestBed.configureTestingModule({
      declarations: [KycWelcomeComponent],
      providers: [
        { provide: AnalyticsService, useValue: analyticsMock },
        { provide: Router, useValue: routerMock },
        { provide: KycService, useValue: kycServiceMock },
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KycWelcomeComponent);
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
      formComponent: { parentForm: parentFormTest } as OutlineNamedobFormComponent,
    } as KycWelcomePureComponent;

    component.ngAfterViewInit();

    expect(component.form).toEqual(parentFormTest);
  });

  it('should set hasError to true when handleError is called', () => {
    component.handleError({});

    expect(component.hasError).toEqual(true);
  });

  it('should run fireClickEvent when goToNext is called', () => {
    component.goToNext({} as FormGroup)

    expect(analyticsMock.fireClickEvent).toHaveBeenCalled()
  })

  it('should run updateUserAttributesAsync when goToNext is called and form.valid is true', fakeAsync(() => {
    component.goToNext({valid: true} as FormGroup)

    tick()

    expect(kycServiceMock.updateUserAttributesAsync).toHaveBeenCalled()
  }))

  it('should run updateUserAttributesAsync when goToNext is called and form.valid is true', fakeAsync(() => {
    component.goToNext({valid: true} as FormGroup)

    tick()

    expect(kycServiceMock.suspendUser).toHaveBeenCalled()
  }))
});
