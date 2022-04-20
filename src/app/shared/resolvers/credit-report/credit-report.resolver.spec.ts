import { fakeAsync, tick } from '@angular/core/testing';
import { IMergeReport, ITrueLinkCreditReportType } from '@shared/interfaces';
import { ICreditReport } from '@shared/models/CreditReports.model';
import { CreditReportStateModel } from '@store/credit-report';
import dayjs from 'dayjs';
import { CreditReportResolver } from './credit-report.resolver';

const setup = () => {
  const storeMock = jasmine.createSpyObj('Store', ['selectOnce', 'dispatch']);
  const creditReportMock = jasmine.createSpyObj('Creditreportv2Service', [
    'getCurrentCreditReport',
    'updateCreditReportStateAsync',
  ]);
  const creditReportResolver = new CreditReportResolver(storeMock, creditReportMock);
  return { creditReportResolver, storeMock, creditReportMock };
};

describe('CreditReportResolver', () => {
  const { storeMock, creditReportMock, creditReportResolver } = setup();

  it('should be created', () => {
    expect(creditReportResolver).toBeTruthy();
  });

  // it('should run store.selectOnce when resolve is called', () => {
  //   creditReportResolver.resolve();

  //   expect(storeMock.selectOnce).toHaveBeenCalled();
  // });

  // it('should run store.selectOnce when resolve is called', fakeAsync(() => {
  //   storeMock.selectOnce.and.returnValue({ toPromise: () => Promise.resolve({} as CreditReportStateModel) });

  //   let spy = spyOn(creditReportResolver, 'isFresh');

  //   spy.and.returnValue(Promise.resolve(true))

  //   creditReportResolver.resolve();

  //   tick();

  //   expect(creditReportResolver.isFresh).toHaveBeenCalled();
  // }));

  // it('resolve should return state.report if fresh is truthy', fakeAsync(() => {
  //   const test = { TrueLinkCreditReportType: {} as ITrueLinkCreditReportType };

  //   storeMock.selectOnce.and.returnValue({
  //     toPromise: () => Promise.resolve({ report: test, updatedOn: new Date().toISOString() } as CreditReportStateModel),
  //   });

  //   let res: any;

  //   creditReportResolver.resolve().then((v) => (res = v));

  //   tick();

  //   expect(res).toEqual(test);
  // }));

  // it('resolve should run getCurrentCreditReport if fresh is false', fakeAsync(() => {
  //   storeMock.selectOnce.and.returnValue({
  //     toPromise: () => Promise.resolve({ report: {}, updatedOn: null } as CreditReportStateModel),
  //   });

  //   creditReportResolver.resolve();

  //   tick();

  //   expect(creditReportMock.getCurrentCreditReport).toHaveBeenCalled();
  // }));

  // it('resolve should run setCreditReport if fresh is false', fakeAsync(() => {
  //   spyOn(creditReportResolver, 'setCreditReport').and.returnValue(Promise.resolve());

  //   creditReportMock.getCurrentCreditReport.and.returnValue(Promise.resolve({} as ICreditReport));

  //   storeMock.selectOnce.and.returnValue({
  //     toPromise: () => Promise.resolve({ report: {}, updatedOn: null } as CreditReportStateModel),
  //   });

  //   creditReportResolver.resolve();

  //   tick();

  //   expect(creditReportResolver.setCreditReport).toHaveBeenCalled();
  // }));

  // it('should run creditReportV2.updateCreditReportStateAsync when setCreditReport is called', () => {
  //   creditReportResolver.setCreditReport({} as ICreditReport);

  //   expect(creditReportMock.updateCreditReportStateAsync).toHaveBeenCalled();
  // });

  // it('should return false if report or updated on are null when isFresh is called', async () => {
  //   let res = await creditReportResolver.isFresh({ report: null } as CreditReportStateModel);

  //   expect(res).toBeFalse();
  // });

  // it('should return false if report or updated on are not null and updated on is 24 hours older than now when isFresh is called', async () => {
  //   let date = dayjs(new Date()).subtract(7, 'day').toISOString();
  //   let res = await creditReportResolver.isFresh({ report: {}, updatedOn: date } as CreditReportStateModel);

  //   expect(res).toBeFalse();
  // });

  // it('should return true if report or updated on are not null and updated on is not 24 hours older than now when isFresh is called', async () => {
  //   let date = new Date().toISOString();
  //   let res = await creditReportResolver.isFresh({ report: {}, updatedOn: date } as CreditReportStateModel);

  //   expect(res).toBeTrue();
  // });
});
