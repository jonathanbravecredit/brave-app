import { ComponentRef, EventEmitter } from '@angular/core';
import { fakeAsync, flushMicrotasks, tick } from '@angular/core/testing';
import { OnboardingDisputeV2Component } from '@shared/components/modals/onboarding-dispute-v2/onboarding-dispute-v2.component';
import { Helper } from '@testing/test-helper';
import { ROUTE_NAMES as routes } from '@shared/routes/routes.names';
import { BehaviorSubject, of, Subscription } from 'rxjs';
import { DisputeButtonDirective } from './dispute-button.directive';
import { dir } from 'console';
import { ITradeLinePartition } from '@shared/interfaces';
import { TransunionUtil } from '@shared/utils/transunion/transunion';
import { AccountTypes } from '@bravecredit/brave-sdk';

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
    routerMock.navigate.and.returnValue(Promise.resolve());
    disputeServiceMock.onUserConfirmed.and.returnValue(
      new Promise((resolve, reject) => {
        resolve({ success: true, error: null }), reject({ success: false, error: { Code: '123' } });
      }),
    );
    const interstitialMock = jasmine.createSpyObj(
      'InterstitialService',
      ['changeMessage', 'openInterstitial', 'closeInterstitial'],
      { fetching$: new BehaviorSubject<boolean>(false) },
    );
    const directive = new DisputeButtonDirective(routerMock, modalServiceMock, disputeServiceMock, interstitialMock);

    return { directive, routerMock, modalServiceMock, disputeServiceMock, interstitialMock };
  };

  describe('DisputeButtonDirective', () => {
    const { directive, routerMock, modalServiceMock, interstitialMock, disputeServiceMock } = setup();
    const h = new Helper<DisputeButtonDirective>(directive);

    beforeEach(() => {
      modalServiceMock.appendModalToBody.calls.reset();
      modalServiceMock.removeModalFromBody.calls.reset();
    });
    it('should create', () => {
      expect(directive).toBeTruthy();
    });
    describe('Methods and Properties', () => {
      it('should have a property called "action" and default', () => {
        expect(h.hasProperty(directive, 'action')).toEqual(true);
        expect(directive.action).toEqual('acknowledging');
      });
      it('should have a property called "router"', () => {
        expect(h.hasProperty(directive, 'router')).toEqual(true);
      });
      it('should have a property called "modalService"', () => {
        expect(h.hasProperty(directive, 'modalService')).toEqual(true);
      });
      it('should have a property called "disputeService"', () => {
        expect(h.hasProperty(directive, 'disputeService')).toEqual(true);
      });
      it('should have a property called "interstitial"', () => {
        expect(h.hasProperty(directive, 'interstitial')).toEqual(true);
      });
      it('should have a method called ngOnDestroy', () => {
        expect(h.hasMethod(directive, 'ngOnDestroy')).toEqual(true);
      });
      it('should have a method called onClick', () => {
        expect(h.hasMethod(directive, 'onClick')).toEqual(true);
      });
      it('should have a method called openModal', () => {
        expect(h.hasMethod(directive, 'openModal')).toEqual(true);
      });
      it('should have a method called closeModal', () => {
        expect(h.hasMethod(directive, 'closeModal')).toEqual(true);
      });
      it('should have a method called subcribeToEvents', () => {
        expect(h.hasMethod(directive, 'subcribeToEvents')).toEqual(true);
      });
      it('should have a method called onUserAcknowledgement', () => {
        expect(h.hasMethod(directive, 'onUserAcknowledgement')).toEqual(true);
      });
      it('should have a method called getFilters', () => {
        expect(h.hasMethod(directive, 'getFilters')).toEqual(true);
      });
      it('should have a method called onUserConfirmation', () => {
        expect(h.hasMethod(directive, 'onUserConfirmation')).toEqual(true);
      });
      it('should have a method called handleError', () => {
        expect(h.hasMethod(directive, 'handleError')).toEqual(true);
      });
      it('should have a method called onConfirmPersonalClick', () => {
        expect(h.hasMethod(directive, 'onConfirmPersonalClick')).toEqual(true);
      });
      it('should have a method called onConfirmPublicClick', () => {
        expect(h.hasMethod(directive, 'onConfirmPublicClick')).toEqual(true);
      });
      it('should have a method called onConfirmTradelineClick', () => {
        expect(h.hasMethod(directive, 'onConfirmTradelineClick')).toEqual(true);
      });
    });

    describe('ngOnDestroy', () => {
      it('should unsubscribe to subscriptions', () => {
        directive.closeClick$ = new Subscription();
        directive.confirmClick$ = new Subscription();
        const spy1 = spyOn(directive.closeClick$, 'unsubscribe');
        const spy2 = spyOn(directive.confirmClick$, 'unsubscribe');
        directive.ngOnDestroy();
        expect(spy1).toHaveBeenCalledTimes(1);
        expect(spy2).toHaveBeenCalledTimes(1);
      });
    });

    xdescribe('onClick', () => {
      it('should call onUserConfirmation when action = "confirming"', () => {
        const spy1 = spyOn(directive, 'onUserConfirmation');
        const spy2 = spyOn(directive, 'openModal');
        directive.action = 'confirming';
        directive.onClick();
        expect(spy1).toHaveBeenCalledTimes(1);
        expect(spy2).not.toHaveBeenCalled();
      });
      it('shoudl call openModal when action = "acknowledging"', () => {
        const spy1 = spyOn(directive, 'onUserConfirmation');
        const spy2 = spyOn(directive, 'openModal');
        directive.action = 'acknowledging';
        directive.onClick();
        expect(spy2).toHaveBeenCalledTimes(1);
        expect(spy1).not.toHaveBeenCalled();
      });
    });

    describe('openModal', () => {
      it('should call modalService.appendModalToBody and subcribeToEvents if compRef is not defined', () => {
        const spy = spyOn(directive, 'subcribeToEvents');
        directive.openModal();
        expect(modalServiceMock.appendModalToBody).toHaveBeenCalledWith(OnboardingDisputeV2Component);
        expect(spy).toHaveBeenCalled();
      });
      it('should NOT call modalService.appendModalToBody nor subcribeToEvents if compRef is already defined', () => {
        directive.compRef = {} as ComponentRef<OnboardingDisputeV2Component>;
        const spy = spyOn(directive, 'subcribeToEvents');
        directive.openModal();
        expect(modalServiceMock.appendModalToBody).not.toHaveBeenCalled();
        expect(spy).not.toHaveBeenCalled();
      });
    });

    describe('closeModal', () => {
      it('should call interstitial.fetching$.next, modalService.removeModalFromBody, and set compRef to undefined if compRef is defined', () => {
        directive.compRef = { mymock: true } as unknown as ComponentRef<OnboardingDisputeV2Component>;
        const spy = spyOn(interstitialMock.fetching$, 'next');
        directive.closeModal();
        expect(modalServiceMock.removeModalFromBody).toHaveBeenCalledWith({ mymock: true });
        expect(spy).toHaveBeenCalledWith(false);
        expect(directive.compRef).toBeUndefined();
      });
      it('should NOT call interstitial.fetching$.next, modalService.removeModalFromBody, and set compRef to undefined if compRef is defined', () => {
        directive.compRef = undefined;
        const spy = spyOn(interstitialMock.fetching$, 'next');
        directive.closeModal();
        expect(modalServiceMock.removeModalFromBody).not.toHaveBeenCalled();
        expect(spy).not.toHaveBeenCalled();
        expect(directive.compRef).toBeUndefined();
      });
    });

    describe('subcribeToEvents', () => {
      beforeEach(() => {
        directive.compRef = {
          instance: {
            closeClick: new EventEmitter(),
            confirmClick: new EventEmitter(),
          },
        } as unknown as ComponentRef<OnboardingDisputeV2Component>;
      });
      it('should set closeClick$ on subcribeToEvents', () => {
        directive.subcribeToEvents();
        expect(directive.closeClick$).toBeDefined();
      });
      it('should set confirmClick$ on subcribeToEvents', () => {
        directive.subcribeToEvents();
        expect(directive.confirmClick$).toBeDefined();
      });
      it('should call directive.closeModal when closeClick subscription fires', (done) => {
        const spy = spyOn(directive, 'closeModal');
        directive.compRef?.instance.closeClick
          .subscribe(() => {
            directive.closeModal();
            expect(spy).toHaveBeenCalled();
            done();
          })
          .add();
        directive.compRef?.instance.closeClick.emit();
      });
      it('should call directive.onUserAcknowledgement when confirmClick subscription fires', (done) => {
        const spy = spyOn(directive, 'onUserAcknowledgement');
        directive.compRef?.instance.confirmClick.subscribe(() => {
          directive.onUserAcknowledgement();
          expect(spy).toHaveBeenCalled();
          done();
        });
        directive.compRef?.instance.confirmClick.emit();
      });
    });

    describe('onUserAcknowledgement', () => {
      // disputeServiceMock.onUserConfirmed.and.returnValue(Promise.resolve({ sucess: true, error: null }));
      it('should call interstitial.changeMessage with "checking eligibility"', async () => {
        await directive.onUserAcknowledgement();
        expect(interstitialMock.changeMessage).toHaveBeenCalledWith('checking eligibility');
      });
      it('should call interstitial.openInterstitial', async () => {
        await directive.onUserAcknowledgement();
        expect(interstitialMock.openInterstitial).toHaveBeenCalled();
      });
      it('should call closeModal', async () => {
        const spy = spyOn(directive, 'closeModal');
        await directive.onUserAcknowledgement();
        expect(spy).toHaveBeenCalled();
      });
      it('should call disputeService.onUserConfirmed', async () => {
        await directive.onUserAcknowledgement();
        expect(disputeServiceMock.onUserConfirmed).toHaveBeenCalled();
      });
      it('should call directive.getFilters when success = true', async () => {
        const spy = spyOn(directive, 'getFilters');
        await directive.onUserAcknowledgement();
        expect(spy).toHaveBeenCalled();
      });
      it('should call router.navigation with params when success = true', async () => {
        spyOn(directive, 'getFilters').and.returnValue('all');
        const arg0 = [routes.root.dashboard.disputes.reconfirm.full];
        const arg1 = {
          queryParams: {
            type: 'all',
          },
        };
        await directive.onUserAcknowledgement();
        expect(routerMock.navigate).toHaveBeenCalledWith(arg0, arg1);
      });
      it('should call handleError with code if error', async () => {
        disputeServiceMock.onUserConfirmed.and.returnValue(Promise.resolve({ success: false, error: { Code: '123' } }));
        const spy = spyOn(directive, 'handleError');
        await directive.onUserAcknowledgement();
        expect(spy).toHaveBeenCalledWith('123');
      });
      it('should call handleError when the promise rejects', async () => {
        disputeServiceMock.onUserConfirmed.and.returnValue(Promise.reject({}));
        const spy = spyOn(directive, 'handleError');
        await directive.onUserAcknowledgement();
        expect(spy).toHaveBeenCalledWith();
      });
    });

    describe('getFilters', () => {
      it('should return "all" if type = tradeline BUT tradeline NOT set', () => {
        directive.type = 'tradeline';
        const t1 = directive.getFilters();
        expect(t1).toEqual('all');
      });
      it('should return result of util if type = tradeline AND tradeline is set', () => {
        directive.type = 'tradeline';
        directive.tradeline = {} as unknown as ITradeLinePartition;
        spyOn(TransunionUtil.queries.report, 'getTradelineTypeDescription').and.returnValue(AccountTypes.LineOfCredit);
        const t1 = directive.getFilters();
        expect(t1).toEqual(AccountTypes.LineOfCredit);
      });
      it('should return "public" if type == publicitem', () => {
        directive.type = 'publicitem';
        const t1 = directive.getFilters();
        expect(t1).toEqual('public');
      });
      it('should return "personal" if type == personalitem', () => {
        directive.type = 'personalitem';
        const t1 = directive.getFilters();
        expect(t1).toEqual('personal');
      });
      it('should return "all" if type NEITHER tradeline, publicitem, nor personalitem', () => {
        directive.type = undefined;
        const t1 = directive.getFilters();
        expect(t1).toEqual('all');
      });
    });

    describe('onUserConfirmation', () => {
      it('should call onConfirmTradelineClick if type = tradeline', () => {
        directive.type = 'tradeline';
        const trade = 'abc' as any;
        directive.tradeline = trade;
        const spy = spyOn(directive, 'onConfirmTradelineClick');
        directive.onUserConfirmation();
        expect(spy).toHaveBeenCalledWith(trade);
      });
      it('should call onConfirmPublicClick if type = publicitem', () => {
        directive.type = 'publicitem';
        const item = 'abc' as any;
        directive.publicItem = item;
        const spy = spyOn(directive, 'onConfirmPublicClick');
        directive.onUserConfirmation();
        expect(spy).toHaveBeenCalledWith(item);
      });
      it('should call onConfirmPersonalClick if type = personalitem', () => {
        directive.type = 'personalitem';
        const item = 'abc' as any;
        directive.personalItem = item;
        const spy = spyOn(directive, 'onConfirmPersonalClick');
        directive.onUserConfirmation();
        expect(spy).toHaveBeenCalledWith(item);
      });
    });

    describe('handleError', () => {
      it('should call router.navigate', () => {
        routerMock.navigate.and.returnValue(Promise.resolve());
        const arg0 = [routes.root.dashboard.disputes.error.full];
        const arg1 = {
          queryParams: {
            code: '123',
          },
        };
        directive.handleError('123');
        expect(routerMock.navigate).toHaveBeenCalledWith(arg0, arg1);
      });
      it('should call interstitial.closeInterstitial on the promise.resolve', fakeAsync(() => {
        routerMock.navigate.and.returnValue(Promise.resolve());
        directive.handleError('123');
        flushMicrotasks();
        expect(interstitialMock.closeInterstitial).toHaveBeenCalled();
      }));
    });

    describe('onConfirmPersonalClick', () => {
      it('should return undefined if personalItem not passed or undefined', () => {
        const t1 = directive.onConfirmPersonalClick(undefined);
        expect(t1).toBeUndefined();
      });
      it('should call disputeService.setPersonalItem if arg passed', () => {
        const arg0 = {} as any;
        directive.onConfirmPersonalClick(arg0);
        expect(disputeServiceMock.setPersonalItem).toHaveBeenCalledWith(arg0);
      });
      it('should call router.navigate', () => {
        const arg0 = {} as any;
        const arg1 = [routes.root.dashboard.disputes.personalitem.full];
        const arg2 = {
          queryParams: {
            step: 'summary',
            type: null,
          },
          queryParamsHandling: 'merge',
        };
        directive.onConfirmPersonalClick(arg0);
        expect(routerMock.navigate).toHaveBeenCalledWith(arg1, arg2);
      });
    });

    describe('onConfirmPublicClick', () => {
      it('should return undefined if publicItem not passed or undefined', () => {
        const t1 = directive.onConfirmPublicClick(undefined);
        expect(t1).toBeUndefined();
      });
      it('should call disputeService.setPublicItem if arg passed', () => {
        const arg0 = {} as any;
        directive.onConfirmPublicClick(arg0);
        expect(disputeServiceMock.setPublicItem).toHaveBeenCalledWith(arg0);
      });
      it('should call router.navigate', () => {
        const arg0 = {} as any;
        const arg1 = [routes.root.dashboard.disputes.publicitem.full];
        const arg2 = {
          queryParams: {
            step: 'select',
            type: null,
          },
          queryParamsHandling: 'merge',
        };
        directive.onConfirmPublicClick(arg0);
        expect(routerMock.navigate).toHaveBeenCalledWith(arg1, arg2);
      });
    });

    describe('onConfirmTradelineClick', () => {
      it('should return undefined if tradeline not passed or undefined', () => {
        const t1 = directive.onConfirmTradelineClick(undefined);
        expect(t1).toBeUndefined();
      });
      it('should call disputeService.setTradelineItem if arg passed', () => {
        const arg0 = {} as any;
        directive.onConfirmTradelineClick(arg0);
        expect(disputeServiceMock.setTradelineItem).toHaveBeenCalledWith(arg0);
      });
      it('should call router.navigate', () => {
        const arg0 = {} as any;
        const arg1 = [routes.root.dashboard.disputes.tradeline.full];
        const arg2 = {
          queryParams: {
            step: 'select',
            type: null,
          },
          queryParamsHandling: 'merge',
        };
        directive.onConfirmTradelineClick(arg0);
        expect(routerMock.navigate).toHaveBeenCalledWith(arg1, arg2);
      });
    });
  });
});
