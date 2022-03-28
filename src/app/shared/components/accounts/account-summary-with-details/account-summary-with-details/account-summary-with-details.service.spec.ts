import { TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { IPublicPartition, ITradeLinePartition } from '@shared/interfaces';
import { DisputeService } from '@shared/services/dispute/dispute.service';
import { InterstitialService } from '@shared/services/interstitial/interstitial.service';
import { StateService } from '@shared/services/state/state.service';
import { IPersonalItemsDetailsConfig } from '@views/dashboard/reports/credit-report/personalitems/components/personalitems-details/interfaces';

import { AccountSummaryWithDetailsService } from './account-summary-with-details.service';

// private interstitial: InterstitialService,
// private disputeService: DisputeService,
// private router: Router,
// private statesvc: StateService,

const setup = () => {
  const interstitialMock = jasmine.createSpyObj('InterstitialService', ['closeInterstitial']);
  const disputeServiceMock = jasmine.createSpyObj('DisputeService', [
    'setPersonalItem',
    'setPublicItem',
    'setTradelineItem',
  ]);
  const routerMock = jasmine.createSpyObj('Router', ['navigate']);
  const statesvcMock = jasmine.createSpyObj('StateService', ['']);

  const component = new AccountSummaryWithDetailsService(
    interstitialMock,
    disputeServiceMock,
    routerMock,
    statesvcMock,
  );

  return { component, interstitialMock, disputeServiceMock, routerMock, statesvcMock };
};

describe('AccountSummaryWithDetailsService', () => {
  const { component, interstitialMock, disputeServiceMock, routerMock, statesvcMock } = setup();

  it('should be created', () => {
    expect(component).toBeTruthy();
  });

  it('should run onDisputeTradelineClick if tradeline is truthy', () => {
    spyOn(component, 'onDisputeTradelineClick');

    component.onConfirmed({} as ITradeLinePartition, null, null);

    expect(component.onDisputeTradelineClick).toHaveBeenCalled();
  });

  it('should run onDisputePersonalClick if personal is truthy', () => {
    spyOn(component, 'onDisputePersonalClick');

    component.onConfirmed(null, {} as IPersonalItemsDetailsConfig, null);

    expect(component.onDisputePersonalClick).toHaveBeenCalled();
  });

  it('should run onDisputePublicClick if publicPart is truthy', () => {
    spyOn(component, 'onDisputePublicClick');

    component.onConfirmed(null, null, {} as IPublicPartition);

    expect(component.onDisputePublicClick).toHaveBeenCalled();
  });

  it('should run disputeService.setPersonalItem when onDisputePersonalClick is called', () => {
    statesvcMock.state = { appData: { id: 'test' } };

    component.onDisputePersonalClick({} as IPersonalItemsDetailsConfig);

    expect(disputeServiceMock.setPersonalItem).toHaveBeenCalled();
  });

  it('should run disputeService.setPublicItem when onDisputePublicClick is called', () => {
    statesvcMock.state = { appData: { id: 'test' } };

    component.onDisputePublicClick({} as IPublicPartition);

    expect(disputeServiceMock.setPublicItem).toHaveBeenCalled();
  });

  it('should run disputeService.setTradelineItem when onDisputeTradelineClick is called', () => {
    statesvcMock.state = { appData: { id: 'test' } };

    component.onDisputeTradelineClick({} as ITradeLinePartition);

    expect(disputeServiceMock.setTradelineItem).toHaveBeenCalled();
  });

  it('should run router.navigate when onDisputePersonalClick is called', () => {
    statesvcMock.state = { appData: { id: 'test' } };

    component.onDisputePersonalClick({} as IPersonalItemsDetailsConfig);

    expect(routerMock.navigate).toHaveBeenCalled();
  });

  it('should run router.navigate when onDisputePublicClick is called', () => {
    statesvcMock.state = { appData: { id: 'test' } };

    component.onDisputePublicClick({} as IPublicPartition);

    expect(routerMock.navigate).toHaveBeenCalled();
  });

  it('should run router.navigate when onDisputeTradelineClick is called', () => {
    statesvcMock.state = { appData: { id: 'test' } };

    component.onDisputeTradelineClick({} as ITradeLinePartition);

    expect(routerMock.navigate).toHaveBeenCalled();
  });

  it('it should run interstitial.closeInterstitial if handleError is called', () => {
    component.handleError();

    expect(interstitialMock.closeInterstitial).toHaveBeenCalled();
  });

  it('it should run routerMock.navigate if handleError is called', () => {
    component.handleError();

    expect(routerMock.navigate).toHaveBeenCalled();
  });
});
