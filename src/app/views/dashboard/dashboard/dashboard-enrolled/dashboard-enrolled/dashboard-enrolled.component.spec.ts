import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardEnrolledComponent } from './dashboard-enrolled.component';

describe('DashboardEnrolledComponent', () => {
  let component: DashboardEnrolledComponent;
  let fixture: ComponentFixture<DashboardEnrolledComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboardEnrolledComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardEnrolledComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
