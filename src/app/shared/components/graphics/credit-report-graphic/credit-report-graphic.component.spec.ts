import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormBuilder } from '@angular/forms';

import { CreditReportGraphicComponent } from './credit-report-graphic.component';
import { CreditReportGraphicPipe } from './credit-report-graphic.pipe';

describe('CreditReportGraphicComponent', () => {
  let component: CreditReportGraphicComponent;
  let fixture: ComponentFixture<CreditReportGraphicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreditReportGraphicComponent, CreditReportGraphicPipe ],
      providers: [FormBuilder],
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
