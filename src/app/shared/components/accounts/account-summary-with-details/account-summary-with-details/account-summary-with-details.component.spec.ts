import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountSummaryWithDetailsComponent } from './account-summary-with-details.component';

//public accountSummaryWithDetailsService: AccountSummaryWithDetailsService

const setup = () => {
  const accountSummaryWithDetailsServiceMock = jasmine.createSpyObj('AccountSummaryWithDetailsService', ['']);

  const component = new AccountSummaryWithDetailsComponent(
    accountSummaryWithDetailsServiceMock,
  );

  return { component, accountSummaryWithDetailsServiceMock };
};

describe('AccountSummaryWithDetailsComponent', () => {
  const { component, accountSummaryWithDetailsServiceMock } = setup();

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should set detailsOpen to false if detailsOpen is true when toggleViewDetails is run', () => {
    component.detailsOpen = true;

    component.toggleViewDetails();

    expect(component.detailsOpen).toEqual(false);
  });
});
