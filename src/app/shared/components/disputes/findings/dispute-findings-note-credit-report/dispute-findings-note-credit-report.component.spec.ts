import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisputeFindingsNoteCreditReportComponent } from './dispute-findings-note-credit-report.component';

describe('DisputeFindingsNoteCreditReportComponent', () => {
  let component: DisputeFindingsNoteCreditReportComponent;
  let fixture: ComponentFixture<DisputeFindingsNoteCreditReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisputeFindingsNoteCreditReportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DisputeFindingsNoteCreditReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
