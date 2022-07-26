import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardEnrolledClosedComponent } from './dashboard-enrolled-closed.component';

describe('DashboardEnrolledClosedComponent', () => {
  let component: DashboardEnrolledClosedComponent;
  let fixture: ComponentFixture<DashboardEnrolledClosedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboardEnrolledClosedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardEnrolledClosedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
