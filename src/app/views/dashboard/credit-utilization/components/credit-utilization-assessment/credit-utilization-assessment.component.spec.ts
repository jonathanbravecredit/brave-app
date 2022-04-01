import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreditUtilizationAssessmentComponent } from './credit-utilization-assessment.component';

describe('CreditUtilizationAssessmentComponent', () => {
  let component: CreditUtilizationAssessmentComponent;
  let fixture: ComponentFixture<CreditUtilizationAssessmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CreditUtilizationAssessmentComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreditUtilizationAssessmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('should behave as expected when inputs are passed in', () => {
    it('should set text to a string if hasCards is true and a percentage is passed', () => {
      component.hasCards = true;
      component.utilizationPerc = 1;
      component.ngOnInit();

      expect(component.text).toBeTruthy();
    });

    it('should set color to a string if hasCards is true and a percentage is passed', () => {
      component.hasCards = true;
      component.utilizationPerc = 1;
      component.ngOnInit();

      expect(component.color).toBeTruthy();
    });

    it('should set text to Excellent if <=9 percentage is passed', () => {
      component.hasCards = true;
      component.utilizationPerc = 8;
      component.ngOnInit();

      expect(component.text).toEqual('Excellent');
    });

    it('should set text to Good if <=29 percentage is passed', () => {
      component.hasCards = true;
      component.utilizationPerc = 28;
      component.ngOnInit();

      expect(component.text).toEqual('Good');
    });

    it('should set text to Fair if <=49 percentage is passed', () => {
      component.hasCards = true;
      component.utilizationPerc = 48;
      component.ngOnInit();

      expect(component.text).toEqual('Fair');
    });

    it('should set text to Poor if <=74 percentage is passed', () => {
      component.hasCards = true;
      component.utilizationPerc = 73;
      component.ngOnInit();

      expect(component.text).toEqual('Poor');
    });

    it('should set text to Very Poor if >74 percentage is passed', () => {
      component.hasCards = true;
      component.utilizationPerc = 75;
      component.ngOnInit();

      expect(component.text).toEqual('Very Poor');
    });
  });
});
