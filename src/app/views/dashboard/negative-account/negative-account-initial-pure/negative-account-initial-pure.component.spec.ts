import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NegativeAccountInitialPureComponent } from './negative-account-initial-pure.component';

//account: AccountService

const setup = () => {
  const accountMock = jasmine.createSpyObj('AccountService', ['']);

  const component = new NegativeAccountInitialPureComponent(accountMock);

  return { component, accountMock };
};

describe('NegativeAccountInitialPureComponent', () => {
  it('should create', () => {
    const { component } = setup();

    expect(component).toBeTruthy();
  });
});
