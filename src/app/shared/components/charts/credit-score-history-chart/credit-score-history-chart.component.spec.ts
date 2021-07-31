import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreditScoreHistoryChartComponent } from './credit-score-history-chart.component';

describe('CreditScoreHistoryChartComponent', () => {
  let component: CreditScoreHistoryChartComponent;
  let fixture: ComponentFixture<CreditScoreHistoryChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreditScoreHistoryChartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreditScoreHistoryChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
