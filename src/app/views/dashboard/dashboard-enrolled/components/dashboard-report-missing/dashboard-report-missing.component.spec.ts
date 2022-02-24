import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardReportMissingComponent } from './dashboard-report-missing.component';

describe('DashboardReportMissingComponent', () => {
  let component: DashboardReportMissingComponent;
  let fixture: ComponentFixture<DashboardReportMissingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboardReportMissingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardReportMissingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
