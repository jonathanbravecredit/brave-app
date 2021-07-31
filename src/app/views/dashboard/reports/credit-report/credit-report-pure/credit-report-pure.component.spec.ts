import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreditReportPureComponent } from './credit-report-pure.component';

describe('CreditReportPureComponent', () => {
  let component: CreditReportPureComponent;
  let fixture: ComponentFixture<CreditReportPureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreditReportPureComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreditReportPureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
