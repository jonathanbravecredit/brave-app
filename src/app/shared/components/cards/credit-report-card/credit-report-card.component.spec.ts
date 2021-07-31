import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreditReportCardComponent } from './credit-report-card.component';

describe('CreditReportCardComponent', () => {
  let component: CreditReportCardComponent;
  let fixture: ComponentFixture<CreditReportCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreditReportCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreditReportCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
