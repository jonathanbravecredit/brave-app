import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountSummaryWithDetailsComponent } from './account-summary-with-details.component';

//public accountSummaryWithDetailsService: AccountSummaryWithDetailsService

const setup = () => {
  const component = new AccountSummaryWithDetailsComponent();

  return { component };
};

describe('AccountSummaryWithDetailsComponent', () => {
  const { component } = setup();

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should set detailsOpen to false if detailsOpen is true when toggleViewDetails is run', () => {
    component.detailsOpen = true;

    component.toggleViewDetails();

    expect(component.detailsOpen).toEqual(false);
  });
});
