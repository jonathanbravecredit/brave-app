import { Helper } from '@testing/test-helper';
import { ROUTE_NAMES as routes } from '@shared/routes/routes.names';
import { CAMPAIGN_ACTIVE } from '@testing/__mocks__/campaign.mocks';
import { REFERRAL_ACTIVE } from '@testing/__mocks__/referral.mocks';

import { DashboardReferralGaugeComponent } from './dashboard-referral-gauge.component';

const setup = () => {
  const serviceMock = jasmine.createSpyObj('DashboardReferralGaugeService', ['getData']);
  serviceMock.getData.and.returnValue(
    Promise.resolve({
      referral: REFERRAL_ACTIVE,
      campaign: CAMPAIGN_ACTIVE,
    }),
  );
  const routerMock = jasmine.createSpyObj('Router', ['navigate']);
  const component = new DashboardReferralGaugeComponent(serviceMock, routerMock);
  return { serviceMock, routerMock, component };
};
describe('DashboardReferralGaugeComponent', () => {
  let component: any;
  let serviceMock: any;
  let routerMock: any;
  let h: Helper<DashboardReferralGaugeComponent>;

  beforeEach(() => {
    const mocks = setup();
    component = mocks.component;
    serviceMock = mocks.serviceMock;
    routerMock = mocks.routerMock;
    h = new Helper<DashboardReferralGaugeComponent>(component);
  });
  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('Properties and methods', () => {
    it('should have a property called referral', () => {
      expect(h.hasProperty(component, 'referral')).toBeDefined();
    });
    it('should have a property called campaign', () => {
      expect(h.hasProperty(component, 'campaign')).toBeDefined();
    });
    it('should have a method called ngOnInit', () => {
      expect(h.hasMethod(component, 'ngOnInit')).toBeDefined();
    });
    it('should have a method called goToReferral', () => {
      expect(h.hasMethod(component, 'goToReferral')).toBeDefined();
    });
  });

  describe('OnInit', () => {
    it('should call gaugeService.getData', async () => {
      await component.ngOnInit();
      expect(serviceMock.getData).toHaveBeenCalled();
    });
    it('should set the value of this.referral to results of getData', async () => {
      await component.ngOnInit();
      expect(component.referral).toEqual(REFERRAL_ACTIVE);
    });
    it('should set the value of this.campaig to results of getData', async () => {
      await component.ngOnInit();
      expect(component.campaign).toEqual(CAMPAIGN_ACTIVE);
    });
    it('should NOT set referral nor campaign if getData throws error', async () => {
      serviceMock.getData.and.returnValue(Promise.reject());
      await component.ngOnInit();
      expect(component.referral).toBeNull();
      expect(component.campaign).toBeNull();
    });
  });
  describe('goToReferral', () => {
    it('should call router.navigate with the referral path', () => {
      component.goToReferral();
      expect(routerMock.navigate).toHaveBeenCalledWith([routes.root.dashboard.referrals.full]);
    });
  });

  describe('percentage', () => {
    it('should return the ratio of activeReferred to maxReferrals', () => {
      const referred = component.referral?.campaignActiveReferred || 0;
      const max = component.campaign?.maxReferrals || 0;
      const perc = !max ? 0 : referred / max;
      expect(component.percentage).toEqual(perc * 100);
    });
  });
});
