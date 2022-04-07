import { JitEvaluator } from '@angular/compiler';
import { Helper } from '@testing/test-helper';
import { BehaviorSubject, Subscription } from 'rxjs';
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
    const h = new Helper<DisputeButtonDirective>(component);

    it('should create', () => {
      expect(component).toBeTruthy();
    });
    describe('Methods and Properties', () => {
      it('should have a property called "action" and default', () => {
        expect(h.hasProperty(component, 'action')).toEqual(true);
        expect(component.action).toEqual('acknowledging');
      });
      it('should have a property called "router"', () => {
        expect(h.hasProperty(component, 'router')).toEqual(true);
      });
      it('should have a property called "modalService"', () => {
        expect(h.hasProperty(component, 'modalService')).toEqual(true);
      });
      it('should have a property called "disputeService"', () => {
        expect(h.hasProperty(component, 'disputeService')).toEqual(true);
      });
      it('should have a property called "interstitial"', () => {
        expect(h.hasProperty(component, 'interstitial')).toEqual(true);
      });
      it('should have a method called ngOnDestroy', () => {
        expect(h.hasMethod(component, 'ngOnDestroy')).toEqual(true);
      });
      it('should have a method called onClick', () => {
        expect(h.hasMethod(component, 'onClick')).toEqual(true);
      });
      it('should have a method called openModal', () => {
        expect(h.hasMethod(component, 'openModal')).toEqual(true);
      });
      it('should have a method called closeModal', () => {
        expect(h.hasMethod(component, 'closeModal')).toEqual(true);
      });
      it('should have a method called subcribeToEvents', () => {
        expect(h.hasMethod(component, 'subcribeToEvents')).toEqual(true);
      });
      it('should have a method called onUserAcknowledgement', () => {
        expect(h.hasMethod(component, 'onUserAcknowledgement')).toEqual(true);
      });
      it('should have a method called getFilters', () => {
        expect(h.hasMethod(component, 'getFilters')).toEqual(true);
      });
      it('should have a method called onUserConfirmation', () => {
        expect(h.hasMethod(component, 'onUserConfirmation')).toEqual(true);
      });
      it('should have a method called handleError', () => {
        expect(h.hasMethod(component, 'handleError')).toEqual(true);
      });
      it('should have a method called onConfirmPersonalClick', () => {
        expect(h.hasMethod(component, 'onConfirmPersonalClick')).toEqual(true);
      });
      it('should have a method called onConfirmPublicClick', () => {
        expect(h.hasMethod(component, 'onConfirmPublicClick')).toEqual(true);
      });
      it('should have a method called onConfirmTradelineClick', () => {
        expect(h.hasMethod(component, 'onConfirmTradelineClick')).toEqual(true);
      });
    });

    describe('ngOnDestroy', () => {
      it('should unsubscribe to subscriptions', () => {
        component.closeClick$ = new Subscription();
        component.confirmClick$ = new Subscription();
        const spy1 = spyOn(component.closeClick$, 'unsubscribe');
        const spy2 = spyOn(component.confirmClick$, 'unsubscribe');
        component.ngOnDestroy();
        expect(spy1).toHaveBeenCalledTimes(1);
        expect(spy2).toHaveBeenCalledTimes(1);
      });
    });

    describe('onClick', () => {
      it('should call onUserConfirmation when action = "confirming"', () => {
        const spy1 = spyOn(component, 'onUserConfirmation');
        const spy2 = spyOn(component, 'openModal');
        component.action = 'confirming';
        component.onClick();
        expect(spy1).toHaveBeenCalledTimes(1);
        expect(spy2).not.toHaveBeenCalled();
      });
      it('shoudl call openModal when action = "acknowledging"', () => {
        const spy1 = spyOn(component, 'onUserConfirmation');
        const spy2 = spyOn(component, 'openModal');
        component.action = 'acknowledging';
        component.onClick();
        expect(spy2).toHaveBeenCalledTimes(1);
        expect(spy1).not.toHaveBeenCalled();
      });
    });
  });
});
