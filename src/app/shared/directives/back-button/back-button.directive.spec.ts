import { Helper } from '@testing/test-helper';
import { BackButtonDirective } from './back-button.directive';

describe('BackButtonDirective', () => {
  const setup = () => {
    const serviceMock = jasmine.createSpyObj('NavigationService', ['back']);
    const directive = new BackButtonDirective(serviceMock);
    return { directive, serviceMock };
  };
  const { directive, serviceMock } = setup();
  const h = new Helper<BackButtonDirective>(directive);

  beforeEach(() => {
    serviceMock.back.calls.reset();
  });
  it('should create an instance', () => {
    expect(directive).toBeTruthy();
  });

  describe('Properties and Methods', () => {
    it('should have a property called disableAutoNavigation and set to a default', () => {
      expect(h.hasProperty(directive, 'disableAutoNavigation')).toEqual(true);
      expect(directive.disableAutoNavigation).toEqual(false);
    });
    it('should have a method called onClick', () => {
      expect(h.hasMethod(directive, 'onClick')).toEqual(true);
    });
  });

  describe('onClick', () => {
    it('should call navigation.back if disableAutoNavigation == false', () => {
      directive.onClick();
      expect(serviceMock.back).toHaveBeenCalled();
    });
    it('should NOT call navigation back if disableAutoNavigation == true', () => {
      directive.disableAutoNavigation = true;
      directive.onClick();
      expect(serviceMock.back).not.toHaveBeenCalled();
    });
  });
});
