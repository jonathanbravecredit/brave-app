import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardEnrolledPureComponent } from './dashboard-enrolled-pure.component';

describe('DashboardEnrolledPureComponent', () => {
  let component: DashboardEnrolledPureComponent;
  let fixture: ComponentFixture<DashboardEnrolledPureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboardEnrolledPureComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardEnrolledPureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
