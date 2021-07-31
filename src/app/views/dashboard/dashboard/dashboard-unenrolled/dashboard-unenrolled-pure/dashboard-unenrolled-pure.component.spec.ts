import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardUnenrolledPureComponent } from './dashboard-unenrolled-pure.component';

describe('DashboardUnenrolledPureComponent', () => {
  let component: DashboardUnenrolledPureComponent;
  let fixture: ComponentFixture<DashboardUnenrolledPureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboardUnenrolledPureComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardUnenrolledPureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
