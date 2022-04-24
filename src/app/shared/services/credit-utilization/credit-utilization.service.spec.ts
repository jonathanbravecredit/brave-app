import { TestBed } from '@angular/core/testing';
import { TransunionInput } from '@bravecredit/brave-sdk';
import { IMergeReport, ITradeLinePartition } from '@shared/interfaces';
import { BehaviorSubject, of, Subscription } from 'rxjs';
import { CreditreportService } from '../creditreport/creditreport.service';
import { TransunionUtil as tu } from '@shared/utils/transunion/transunion';
import { CreditUtilizationService } from './credit-utilization.service';


describe('DashboardService', () => {
  let service: CreditUtilizationService;
  let creditReportMock: any;

  beforeEach(() => {
    creditReportMock = jasmine.createSpyObj('CreditreportService', [''], {tuReport$: new BehaviorSubject<IMergeReport>({} as IMergeReport)});

    TestBed.configureTestingModule({
      providers: [
        { provide: CreditreportService, useValue: creditReportMock },
        CreditUtilizationService,
      ],
    });
    service = TestBed.inject(CreditUtilizationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should run tuReportSub$?.unsubscribe on destroy', () => {
    service.tuReportSub$ = new Subscription()
    spyOn(service.tuReportSub$, 'unsubscribe')
    service.ngOnDestroy()
    expect(service.tuReportSub$.unsubscribe).toHaveBeenCalled();
  });

  it('should run tuReport$.subscribe on subscribeToCreditReport', () => {
    spyOn(creditReportMock.tuReport$, 'subscribe')
    service.subscribeToCreditReport()
    expect(creditReportMock.tuReport$.subscribe).toHaveBeenCalled();
  });

  it('should run tuReport$.next on subscribeToCreditReport', () => {
    spyOn(service.tuReport$, 'next')
    service.subscribeToCreditReport()
    expect(service.tuReport$.next).toHaveBeenCalled();
  });

  it('should return expected on getTransunion', () => {
    let tran = {} as TransunionInput
    let res = service.getTransunion({transunion: tran})
    expect(res).toEqual(tran);
  });

  it('should return expected on getTradeLinePartitions', () => {
    let partitions = [{}] as ITradeLinePartition[]
    service.tuReport = {TrueLinkCreditReportType: {TradeLinePartition: partitions} } as IMergeReport
    let res = service.getTradeLinePartitions()
    expect(res).toEqual(partitions);
  });

  it('should run tu.filters.filterTradelinesByType on getRevolvingAccounts', () => {
    spyOn(tu.filters, 'filterTradelinesByType')
    service.getRevolvingAccounts([{}] as ITradeLinePartition[])
    expect(tu.filters.filterTradelinesByType).toHaveBeenCalled();
  });

  it('should run sumDebtAmount on calculateCreditUtilization', () => {
    spyOn(service, 'sumDebtAmount')
    service.calculateCreditUtilization([{}] as ITradeLinePartition[])
    expect(service.sumDebtAmount).toHaveBeenCalled();
  });

  it('should run sumTotalAmount on calculateCreditUtilization', () => {
    spyOn(service, 'sumTotalAmount')
    service.calculateCreditUtilization([{}] as ITradeLinePartition[])
    expect(service.sumTotalAmount).toHaveBeenCalled();
  });

  it('should run calcUtilzationPerc on calculateCreditUtilization', () => {
    spyOn(service, 'calcUtilzationPerc')
    service.calculateCreditUtilization([{}] as ITradeLinePartition[])
    expect(service.calcUtilzationPerc).toHaveBeenCalled();
  });

  it('should run calculateCreditUtilization on getCreditUtilizationSnapshotStatus', () => {
    spyOn(service, 'calculateCreditUtilization')
    service.getCreditUtilizationSnapshotStatus([{}] as ITradeLinePartition[])
    expect(service.calculateCreditUtilization).toHaveBeenCalled();
  });

  it('should run mapUtilizationStatusToSnapshot on getCreditUtilizationSnapshotStatus', () => {
    spyOn(service, 'mapUtilizationStatusToSnapshot')
    service.getCreditUtilizationSnapshotStatus([{}] as ITradeLinePartition[])
    expect(service.mapUtilizationStatusToSnapshot).toHaveBeenCalled();
  });

  it('should return 0 on calcUtilzationPerc if total === 0', () => {
    let res = service.calcUtilzationPerc(10, 0)
    expect(res).toEqual(0);
  });

  it('should return 500 on calcUtilzationPerc', () => {
    let res = service.calcUtilzationPerc(10, 2)
    expect(res).toEqual(500);
  });

  it('should return closed on calculateCreditStatus if percentage is undefined', () => {
    let res = service.calculateCreditStatus(undefined)
    expect(res).toEqual('closed');
  });

  it('should return excellent on calculateCreditStatus if percentage is <1', () => {
    let res = service.calculateCreditStatus('<1')
    expect(res).toEqual('excellent');
  });

  it('should return excellent on calculateCreditStatus if percentage is 8', () => {
    let res = service.calculateCreditStatus(8)
    expect(res).toEqual('excellent');
  });

  it('should return good on calculateCreditStatus if percentage is 28', () => {
    let res = service.calculateCreditStatus(28)
    expect(res).toEqual('good');
  });

  it('should return fair on calculateCreditStatus if percentage is 48', () => {
    let res = service.calculateCreditStatus(48)
    expect(res).toEqual('fair');
  });

  it('should return poor on calculateCreditStatus if percentage is 73', () => {
    let res = service.calculateCreditStatus(73)
    expect(res).toEqual('poor');
  });

  it('should return verypoor on calculateCreditStatus if percentage is 78', () => {
    let res = service.calculateCreditStatus(78)
    expect(res).toEqual('verypoor');
  });

  it('should return critical on mapUtilizationStatusToSnapshot if status is verypoor', () => {
    let res = service.mapUtilizationStatusToSnapshot('verypoor')
    expect(res).toEqual('critical');
  });

  it('should return semicritical on mapUtilizationStatusToSnapshot if status is poor', () => {
    let res = service.mapUtilizationStatusToSnapshot('poor')
    expect(res).toEqual('semicritical');
  });

  it('should return danger on mapUtilizationStatusToSnapshot if status is fair', () => {
    let res = service.mapUtilizationStatusToSnapshot('fair')
    expect(res).toEqual('danger');
  });

  it('should return normal on mapUtilizationStatusToSnapshot if status is good', () => {
    let res = service.mapUtilizationStatusToSnapshot('good')
    expect(res).toEqual('normal');
  });

  it('should return safe on mapUtilizationStatusToSnapshot if status is excellent', () => {
    let res = service.mapUtilizationStatusToSnapshot('excellent')
    expect(res).toEqual('safe');
  });

});
