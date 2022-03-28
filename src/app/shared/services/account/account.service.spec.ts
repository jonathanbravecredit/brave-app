import { IMergeReport } from '@shared/interfaces';
import { BehaviorSubject } from 'rxjs';

import { AccountService } from './account.service';

const setup = () => {
  const creditReportServiceMock = jasmine.createSpyObj('CreditreportService', [''], {
    tuReport$: new BehaviorSubject<IMergeReport>({} as IMergeReport),
  });
  const statesvcMock = jasmine.createSpyObj('StateService', ['']);
  const mergereportToNegativeTradelinesPipeMock = jasmine.createSpyObj('MergereportToNegativeTradelinesPipe', [
    'transform',
  ]);
  const mergereportToPersonalitemsPipeMock = jasmine.createSpyObj('MergereportToPersonalitemsPipe', ['transform']);
  const mergereportToPublicitemsPipeMock = jasmine.createSpyObj('MergereportToPublicitemsPipe', ['transform']);
  const mergereportToSubscribersPipeMock = jasmine.createSpyObj('MergereportToSubscribersPipe', ['transform']);

  const component = new AccountService(
    creditReportServiceMock,
    statesvcMock,
    mergereportToNegativeTradelinesPipeMock,
    mergereportToPersonalitemsPipeMock,
    mergereportToPublicitemsPipeMock,
    mergereportToSubscribersPipeMock,
  );

  return {
    component,
    creditReportServiceMock,
    statesvcMock,
    mergereportToNegativeTradelinesPipeMock,
    mergereportToPersonalitemsPipeMock,
    mergereportToPublicitemsPipeMock,
    mergereportToSubscribersPipeMock,
  };
};

describe('AccountService', () => {
  const {
    component,
    creditReportServiceMock,
    statesvcMock,
    mergereportToNegativeTradelinesPipeMock,
    mergereportToPersonalitemsPipeMock,
    mergereportToPublicitemsPipeMock,
    mergereportToSubscribersPipeMock,
  } = setup();

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should unscrubscribe from creditReport when destroyed', () => {
    spyOn(component.creditReport$, 'unsubscribe');

    component.ngOnDestroy();

    expect(component.creditReport$.unsubscribe).toHaveBeenCalled();
  });
});
