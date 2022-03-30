import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ITradelineDetailsConfig } from '@views/dashboard/reports/credit-report/tradelines/components/tradeline-details/interfaces';

import { TradelineDetailsTableComponent } from './tradeline-details-table.component';

describe('TradelineDetailsTableComponent', () => {
  let component: TradelineDetailsTableComponent;
  let fixture: ComponentFixture<TradelineDetailsTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TradelineDetailsTableComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TradelineDetailsTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should set mapperType to disputeOne if isDisputePageOne is truthy on init', () => {
    component.isDisputePageOne = true;

    component.ngOnInit();

    expect(component.mapperType).toEqual('disputeOne');
  });

  it('should set mapperType to disputeTwo if isDisputePageTwo is truthy on init', () => {
    component.isDisputePageTwo = true;

    component.ngOnInit();

    expect(component.mapperType).toEqual('disputeTwo');
  });

  it('should set mapperType to findings if isFindings is truthy on init', () => {
    component.isFindings = true;

    component.ngOnInit();

    expect(component.mapperType).toEqual('findings');
  });

  it('should return proper string from sumLateCount', () => {
    let testConfig = { late30Count: 1, late60Count: 2, late90Count: 3 } as ITradelineDetailsConfig;

    let testRes = component.sumLateCount(testConfig);

    expect(testRes).toEqual('1/2/3');
  });
});
