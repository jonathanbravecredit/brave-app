import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreditUtilizationAssessmentComponent } from './credit-utilization-assessment.component';

describe('CreditUtilizationAssessmentComponent', () => {
  let component: CreditUtilizationAssessmentComponent;
  let fixture: ComponentFixture<CreditUtilizationAssessmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreditUtilizationAssessmentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreditUtilizationAssessmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
