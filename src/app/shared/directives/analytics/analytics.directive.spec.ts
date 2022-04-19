import { AnalyticsDirective } from './analytics.directive';
import { Helper } from '@testing/test-helper';
import { AnalyticClickEvents } from '@shared/services/analytics/analytics/constants';

describe('AnalyticsDirective', () => {
  const setup = () => {
    const serviceMock = jasmine.createSpyObj('AnalyticsService', ['fireClickEvent']);
    const directive = new AnalyticsDirective(serviceMock);
    return { directive, serviceMock };
  };
  const { directive, serviceMock } = setup();
  const h = new Helper<AnalyticsDirective>(directive);
  it('should create an instance', () => {
    expect(directive).toBeTruthy();
  });

  describe('Properties and methods', () => {
    it('should have a property called analyticClickEvents and set to default', () => {
      expect(h.hasProperty(directive, 'analyticClickEvents')).toEqual(true);
      expect(directive.analyticClickEvents).toEqual(AnalyticClickEvents.UnknownClickEvent);
    });
    it('should have a property called analyticConfig and set to default', () => {
      expect(h.hasProperty(directive, 'analyticConfig')).toEqual(true);
      expect(directive.analyticConfig).toEqual({ google: true, mixpanel: true, brave: false });
    });
    it('should have a method called onClick', () => {
      expect(h.hasMethod(directive, 'onClick')).toEqual(true);
    });
  });

  describe('onClick method', () => {
    it('should call analytics.fireClickEvent', () => {
      directive.onClick();
      expect(serviceMock.fireClickEvent).toHaveBeenCalledWith(AnalyticClickEvents.UnknownClickEvent, {
        google: true,
        mixpanel: true,
        brave: false,
      });
    });
  });
});
