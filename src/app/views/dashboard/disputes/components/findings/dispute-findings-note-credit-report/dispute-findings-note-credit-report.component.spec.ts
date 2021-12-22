import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LinkifyPipe } from '@shared/pipes/linkify/linkify.pipe';

import { DisputeFindingsNoteCreditReportComponent } from './dispute-findings-note-credit-report.component';

describe('DisputeFindingsNoteCreditReportComponent', () => {
  let component: DisputeFindingsNoteCreditReportComponent;
  let fixture: ComponentFixture<DisputeFindingsNoteCreditReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisputeFindingsNoteCreditReportComponent, LinkifyPipe ]
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
