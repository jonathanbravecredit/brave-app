import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreditReportGraphicComponent } from './credit-report-graphic.component';

describe('CreditReportGraphicComponent', () => {
  let component: CreditReportGraphicComponent;
  let fixture: ComponentFixture<CreditReportGraphicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreditReportGraphicComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreditReportGraphicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
