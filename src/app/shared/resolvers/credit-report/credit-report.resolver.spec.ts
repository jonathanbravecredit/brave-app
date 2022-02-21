import { CreditReportResolver } from './credit-report.resolver';

const setup = () => {
  const storeMock = jasmine.createSpyObj('Store', ['']);
  const creditReportMock = jasmine.createSpyObj('Creditreportv2Service', ['']);
  const creditReportResolver = new CreditReportResolver(storeMock, creditReportMock);
  return { creditReportResolver, storeMock, creditReportMock };
};

describe('CreditReportResolver', () => {
  const { storeMock, creditReportMock, creditReportResolver } = setup();

  it('should be created', () => {
    expect(creditReportResolver).toBeTruthy();
  });
});
