import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardCreditScoreErrorComponent } from './dashboard-credit-score-error.component';

describe('DashboardCreditScoreErrorComponent', () => {
  let component: DashboardCreditScoreErrorComponent;
  let fixture: ComponentFixture<DashboardCreditScoreErrorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboardCreditScoreErrorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardCreditScoreErrorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
