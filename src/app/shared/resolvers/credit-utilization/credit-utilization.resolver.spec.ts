import { TestBed } from '@angular/core/testing';
import { CreditUtilizationService } from '@shared/services/credit-utilization/credit-utilization.service';

import { CreditUtilizationResolver } from './credit-utilization.resolver';

describe('CreditUtilizationResolver', () => {
  let resolver: CreditUtilizationResolver;
  let creditUtilMock: any;

  beforeEach(() => {
    creditUtilMock = jasmine.createSpyObj('CreditUtilizationService', ['getTradeLinePartitions', 'getRevolvingAccounts'])
    TestBed.configureTestingModule({
      providers: [{provide: CreditUtilizationService, useValue: creditUtilMock}]
    });
    resolver = TestBed.inject(CreditUtilizationResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
