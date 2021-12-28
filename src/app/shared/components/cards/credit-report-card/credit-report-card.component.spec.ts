import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DecodePipe } from '@shared/pipes/decode/decode.pipe';

import { CreditReportCardComponent } from './credit-report-card.component';

describe('CreditReportCardComponent', () => {
  let component: CreditReportCardComponent;
  let fixture: ComponentFixture<CreditReportCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreditReportCardComponent, DecodePipe ]
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
