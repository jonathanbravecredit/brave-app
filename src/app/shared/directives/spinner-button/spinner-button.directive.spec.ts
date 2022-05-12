import { BehaviorSubject } from 'rxjs';
import { SpinnerButtonDirective } from './spinner-button.directive';

describe('SpinnerButtonDirective', () => {
  const setup = () => {
    const interstitialServiceMock = jasmine.createSpyObj('InterstitialService', [''], {
      fetching$: new BehaviorSubject<boolean>(false),
    });
    const directive = new SpinnerButtonDirective(interstitialServiceMock);
    return { interstitialServiceMock, directive };
  };
  const { interstitialServiceMock, directive } = setup();
  it('should create an instance', () => {
    expect(directive).toBeTruthy();
  });
  describe('onClick', () => {
    it('should call interstitial.fetching$.next', () => {
      const spy = spyOn(interstitialServiceMock.fetching$, 'next');
      directive.onClick();
      expect(spy).toHaveBeenCalledWith(true);
    });
  });
});
