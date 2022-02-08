import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IMergeReport } from '@shared/interfaces';
import { IGetTrendingData } from '@shared/interfaces/get-trending-data.interface';

import { DashboardCarouselComponent } from './dashboard-carousel.component';

describe('DashboardCarouselComponent', () => {
  let component: DashboardCarouselComponent;
  let fixture: ComponentFixture<DashboardCarouselComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DashboardCarouselComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardCarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('LifeCycle methods', () => {
    it('should call calculateDelta', () => {
      spyOn(component, 'calculateDelta');
      component.ngOnInit();
      expect(component.calculateDelta).toHaveBeenCalled();
    });
    it('should call formatGraphicData', () => {
      spyOn(component, 'formatGraphicData');
      component.ngOnInit();
      expect(component.formatGraphicData).toHaveBeenCalled();
    });
    it('should call formatChartData', () => {
      spyOn(component, 'formatChartData');
      component.ngOnInit();
      expect(component.formatChartData).toHaveBeenCalled();
    });
    it('should set sortedScores when scores is populated', () => {
      component.scores = MOCK_SCORES;
      component.ngOnInit();
      expect(component.sortedScores.length).toEqual(2);
    });

    it('should set sortedScores to empty array when scores is NOT populated', () => {
      component.scores = [];
      component.ngOnInit();
      expect(component.sortedScores.length).toEqual(0);
    });

    it('should set the current score based on the sorted scores', () => {
      component.scores = MOCK_SCORES;
      component.ngOnInit();
      expect(component.currentScore).toEqual(766);
    });

    it('should set the delta based on the current score and prior score', () => {
      component.scores = MOCK_SCORES;
      component.ngOnInit();
      expect(component.delta).toEqual(-29);
    });

    it('should set the graphic using current score, sorted score, and delta', () => {
      component.scores = MOCK_SCORES;
      component.ngOnInit();
      expect(component.graphic).toBeTruthy();
    });

    it('should set the chart using trends, report, lastUpdated, and currentScore', () => {
      component.scores = MOCK_SCORES;
      component.lastUpdated = '2022-01-19T06:35:23';
      component.ngOnInit();
      expect(component.chart).toBeTruthy();
    });

    it('should set the data tuple to graphic and chart', () => {
      component.ngOnInit();
      expect(component.data).toEqual([component.graphic, component.chart]);
    });
  });

  
  describe('calculateDelta helper method', () => {
    it('should calculate the delta to the diff between current and prior score when both available', () => {
      const delta = component.calculateDelta(MOCK_SCORES);
      expect(delta).toEqual(-29);
    });

    it('should set the delta to 0 when only 1 score available', () => {
      const mocks = MOCK_SCORES;
      mocks.pop();
      const delta = component.calculateDelta(mocks);
      expect(delta).toEqual(0);
    });

    it('should set the delta to 0 when one of the score values is not a valid number', () => {
      const delta = component.calculateDelta(MOCK_BAD_SCORES);
      expect(delta).toEqual(0);
    });
  });

  describe('formatGraphicData helper method', () => {
    it('should return an object with a currentValue and ptsChange properties', () => {
      const data = component.formatGraphicData(766, 29);
      expect(data).toEqual({ currentValue: 766, ptsChange: 29 });
    });
  });

  describe('formatChartData helper method', () => {
    it('should return an object with a trends, report, lastUpdate, and currentCreditScore properties', () => {
      const trends = MOCK_TREND_RESPONSE as IGetTrendingData;
      const report = (MOCK_REPORT as unknown) as IMergeReport;
      const updated = '2022-01-19T06:35:23';
      const score = 766;

      const data = component.formatChartData(trends, report, updated, score);
      expect(data).toEqual({
        trends: MOCK_TREND_RESPONSE,
        report: MOCK_REPORT,
        lastUpdated: updated,
        currentCreditScore: score,
      });
    });
  });
});

const MOCK_SCORES = [
  {
    AttributeDate: '2021-12-21T16:31:50',
    AttributeStatus: 'Success',
    AttributeValue: 795,
    ServiceProductFulfillmentKey: '02e33248-f9d2-4e00-9770-b8376521b823',
  },
  {
    AttributeDate: '2022-01-19T06:35:23',
    AttributeStatus: 'Success',
    AttributeValue: 766,
    ServiceProductFulfillmentKey: 'c3dd0d55-5bbd-4b19-9016-fe9eb7f8c172',
  },
  {
    AttributeDate: '2021-11-19T06:35:23',
    AttributeStatus: 'Success',
    AttributeValue: 745,
    ServiceProductFulfillmentKey: 'c3dd0d55-5bbd-4b19-9016-fe9eb7f8c172',
  },
];

const MOCK_BAD_SCORES = [
  {
    AttributeDate: '2022-01-19T06:35:23',
    AttributeStatus: 'Success',
    AttributeValue: 'ABC',
    ServiceProductFulfillmentKey: 'c3dd0d55-5bbd-4b19-9016-fe9eb7f8c172',
  },
  {
    AttributeDate: '2021-12-21T16:31:50',
    AttributeStatus: 'Success',
    AttributeValue: 'XYZ',
    ServiceProductFulfillmentKey: '02e33248-f9d2-4e00-9770-b8376521b823',
  },
];

const MOCK_TREND_RESPONSE = {
  AccountName: 'Brave Credit',
};

const MOCK_REPORT = {
  TrueLinkCreditReportType: null,
};
