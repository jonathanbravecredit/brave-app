import { fakeAsync, tick } from '@angular/core/testing';
import { ITrueLinkCreditReportType } from '@shared/interfaces';
import { ICreditReport } from '@shared/models/CreditReports.model';
import { CreditReportStateModel } from '@store/credit-report';
import { CreditReportResolver } from './credit-report.resolver';

const setup = () => {
  const storeMock = jasmine.createSpyObj('Store', ['selectOnce', 'dispatch']);
  const creditReportMock = jasmine.createSpyObj('Creditreportv2Service', ['getCurrentCreditReport']);
  const creditReportResolver = new CreditReportResolver(storeMock, creditReportMock);
  return { creditReportResolver, storeMock, creditReportMock };
};

describe('CreditReportResolver', () => {
  const { storeMock, creditReportMock, creditReportResolver } = setup();

  it('should be created', () => {
    expect(creditReportResolver).toBeTruthy();
  });

  it('should run store.selectOnce when resolve is called', () => {
    creditReportResolver.resolve();

    expect(storeMock.selectOnce).toHaveBeenCalled();
  });

  it('should run store.selectOnce when resolve is called', fakeAsync(() => {
    storeMock.selectOnce.and.returnValue({ toPromise: () => Promise.resolve({} as CreditReportStateModel) });

    spyOn(creditReportResolver, 'isFresh');

    creditReportResolver.resolve();

    tick();

    expect(creditReportResolver.isFresh).toHaveBeenCalled();
  }));

  it('resolve should return state.report if fresh is truthy', fakeAsync(() => {
    const test = { TrueLinkCreditReportType: {} as ITrueLinkCreditReportType };

    storeMock.selectOnce.and.returnValue({
      toPromise: () => Promise.resolve({ report: test, updatedOn: new Date().toISOString() } as CreditReportStateModel),
    });

    let res: any;

    creditReportResolver.resolve().then((v) => (res = v));

    tick();

    expect(res).toEqual(test);
  }));

  it('resolve should run getCurrentCreditReport if fresh is false', fakeAsync(() => {
    storeMock.selectOnce.and.returnValue({
      toPromise: () => Promise.resolve({ report: {}, updatedOn: null } as CreditReportStateModel),
    });

    creditReportResolver.resolve();

    tick();

    expect(creditReportMock.getCurrentCreditReport).toHaveBeenCalled();
  }));

  it('resolve should run setCreditReport if fresh is false', fakeAsync(() => {
    spyOn(creditReportResolver, 'setCreditReport').and.returnValue(Promise.resolve());

    creditReportMock.getCurrentCreditReport.and.returnValue(Promise.resolve({} as ICreditReport));

    storeMock.selectOnce.and.returnValue({
      toPromise: () => Promise.resolve({ report: {}, updatedOn: null } as CreditReportStateModel),
    });

    creditReportResolver.resolve();

    tick();

    expect(creditReportResolver.setCreditReport).toHaveBeenCalled();
  }));
});
