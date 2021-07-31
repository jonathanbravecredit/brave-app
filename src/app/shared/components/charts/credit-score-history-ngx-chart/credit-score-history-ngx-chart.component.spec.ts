import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreditScoreHistoryNgxChartComponent } from './credit-score-history-ngx-chart.component';

describe('CreditScoreHistoryNgxChartComponent', () => {
  let component: CreditScoreHistoryNgxChartComponent;
  let fixture: ComponentFixture<CreditScoreHistoryNgxChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreditScoreHistoryNgxChartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreditScoreHistoryNgxChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
