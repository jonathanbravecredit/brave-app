import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CustomLineChartService } from '@shared/services/charts/custom-line-chart.service';

import { CreditScoreHistoryNgxChartComponent } from './credit-score-history-ngx-chart.component';
import { CreditScoreHistoryNgxChartService } from './credit-score-history-ngx-chart.service';

describe('CreditScoreHistoryNgxChartComponent', () => {
  let component: CreditScoreHistoryNgxChartComponent;
  let fixture: ComponentFixture<CreditScoreHistoryNgxChartComponent>;
  let customLineChartMock: any;
  let creditScoreNgxMock: any;

  beforeEach(async () => {
    customLineChartMock = jasmine.createSpyObj('customLineChartService', ['showDots']);
    creditScoreNgxMock = jasmine.createSpyObj('creditScoreNgxChartService', [
      'transformTrendingData',
      'createChartCreditScoreData',
    ]);

    await TestBed.configureTestingModule({
      declarations: [CreditScoreHistoryNgxChartComponent],
      providers: [
        { provide: CustomLineChartService, useValue: customLineChartMock },
        { provide: CreditScoreHistoryNgxChartService, useValue: creditScoreNgxMock },
      ],
    }).compileComponents();
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
