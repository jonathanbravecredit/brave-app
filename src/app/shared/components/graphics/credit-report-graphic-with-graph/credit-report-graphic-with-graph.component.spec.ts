import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreditReportGraphicWithGraphComponent } from './credit-report-graphic-with-graph.component';

describe('CreditReportGraphicWithGraphComponent', () => {
  let component: CreditReportGraphicWithGraphComponent;
  let fixture: ComponentFixture<CreditReportGraphicWithGraphComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreditReportGraphicWithGraphComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreditReportGraphicWithGraphComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
