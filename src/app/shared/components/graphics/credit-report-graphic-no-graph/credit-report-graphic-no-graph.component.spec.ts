import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreditReportGraphicNoGraphComponent } from './credit-report-graphic-no-graph.component';

describe('CreditReportGraphicNoGraphComponent', () => {
  let component: CreditReportGraphicNoGraphComponent;
  let fixture: ComponentFixture<CreditReportGraphicNoGraphComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreditReportGraphicNoGraphComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreditReportGraphicNoGraphComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
