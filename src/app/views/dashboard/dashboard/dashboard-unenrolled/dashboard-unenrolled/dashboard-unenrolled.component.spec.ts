import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardUnenrolledComponent } from './dashboard-unenrolled.component';

describe('DashboardUnenrolledComponent', () => {
  let component: DashboardUnenrolledComponent;
  let fixture: ComponentFixture<DashboardUnenrolledComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboardUnenrolledComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardUnenrolledComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
