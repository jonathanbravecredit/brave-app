import { BehaviorSubject } from 'rxjs';
import { DisputeButtonDirective } from './dispute-button.directive';

// private router: Router,
// private modalService: ModalService,
// private disputeService: DisputeService,
// private interstitial: InterstitialService,

describe('DisputeButtonDirective', () => {
  const setup = () => {
    const routerMock = jasmine.createSpyObj('Router', ['navigate']);
    const modalServiceMock = jasmine.createSpyObj('ModalService', ['appendModalToBody', 'removeModalFromBody']);
    const disputeServiceMock = jasmine.createSpyObj('DisputeService', [
      'onUserConfirmed',
      'setPersonalItem',
      'setPublicItem',
      'setTradelineItem',
    ]);
    const interstitialMock = jasmine.createSpyObj(
      'InterstitialService',
      ['changeMessage', 'openInterstitial', 'closeInterstitial'],
      { fetching$: new BehaviorSubject<boolean>(false) },
    );

    const component = new DisputeButtonDirective(routerMock, modalServiceMock, disputeServiceMock, interstitialMock);

    return { component, routerMock, modalServiceMock, disputeServiceMock, interstitialMock };
  };

  describe('DisputeButtonDirective', () => {
    const { component } = setup();

    it('should create', () => {
      expect(component).toBeTruthy();
    });
  });
});
