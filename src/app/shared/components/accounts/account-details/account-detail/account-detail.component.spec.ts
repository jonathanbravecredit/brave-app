import { AccountDetailComponent } from '@shared/components/accounts/account-details/account-detail/account-detail.component';
import { FilledSpinningButtonComponent } from '@shared/components/buttons/filled-spinning-button/filled-spinning-button.component';
import { IOnboardingEvent } from '@shared/components/modals/onboarding-dispute/onboarding-dispute.component';
import { ITradeLinePartition } from '@shared/interfaces';
import { InterstitialService } from '@shared/services/interstitial/interstitial.service';
import { ITradelineDetailsConfig } from '@views/dashboard/reports/credit-report/tradelines/components/tradeline-details/interfaces';
import { of } from 'rxjs';

// public accountDetailService: AccountDetailService

const setup = () => {
  const accountDetailServiceMock = jasmine.createSpyObj(
    'AccountDetailService',
    ['actionForDispute', 'onConfirm', 'toggleModal'],
    {
      showModal$: of(false),
      acknowledged$: of(false),
    },
  );

  const component = new AccountDetailComponent(accountDetailServiceMock);

  return { component, accountDetailServiceMock };
};

describe('AccountDetailComponent', () => {
  const { component, accountDetailServiceMock } = setup();

  it('should be created', () => {
    expect(component).toBeTruthy();
  });

  it('should unsubscribe from showModalSub when ngOnDestroy is run', () => {
    spyOn(component.showModalSub$, 'unsubscribe');

    component.ngOnDestroy();

    expect(component.showModalSub$.unsubscribe).toHaveBeenCalled();
  });

  it('should unsubscribe from acknowledgedSub$ when ngOnDestroy is run', () => {
    spyOn(component.acknowledgedSub$, 'unsubscribe');

    component.ngOnDestroy();

    expect(component.acknowledgedSub$.unsubscribe).toHaveBeenCalled();
  });

  it('it should run accountDetailService.toggleModal when toggleModal is called', () => {
    component.toggleModal();

    expect(component.accountDetailService.toggleModal).toHaveBeenCalled();
  });

  it('it should run onCofirm when handleActionForDispute is called and tradelineDetailsConfig?.tradeline is truthy', () => {
    component.tradelineDetailsConfig = { tradeline: {} as ITradeLinePartition } as ITradelineDetailsConfig;

    accountDetailServiceMock.actionForDispute.and.returnValue(false);

    component.handleActionForDispute({} as IOnboardingEvent);

    expect(accountDetailServiceMock.onConfirm).toHaveBeenCalled();
  });
});
