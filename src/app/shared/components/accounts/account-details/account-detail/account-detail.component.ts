import { Component, EventEmitter, Input, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { AccountDetailService } from '@shared/components/accounts/account-details/account-detail/account-detail.service';
import { FilledSpinningButtonComponent } from '@shared/components/buttons/filled-spinning-button/filled-spinning-button.component';
import { IOnboardingEvent } from '@shared/components/modals/onboarding-dispute/onboarding-dispute.component';
import { IPersonalItemsDetailsConfig } from '@views/dashboard/reports/credit-report/personalitems/components/personalitems-details/interfaces';
import { IPublicItemsDetailsConfig } from '@views/dashboard/reports/credit-report/publicitems/components/publicitems-details/interfaces';
import { ITradelineDetailsConfig } from '@views/dashboard/reports/credit-report/tradelines/components/tradeline-details/interfaces';
import { Subscription } from 'rxjs';

@Component({
  selector: 'brave-account-detail',
  templateUrl: './account-detail.component.html',
  providers: [AccountDetailService],
})
export class AccountDetailComponent implements OnInit, OnDestroy {
  @Input() pages: any[] = [];
  @Input() data: any[] = [];
  @Input() disputeable: boolean = true;

  @Input() tradelineDetailsConfig: ITradelineDetailsConfig | null = null;
  @Input() publicDetailsConfig: IPublicItemsDetailsConfig | null = null;
  @Input() personalDetailsConfig: IPersonalItemsDetailsConfig | null = null;

  @Input() detailsOpen: boolean = false;
  @Input() showDisputeButton: boolean = false;

  showModal: boolean = false;
  showModalSub$: Subscription;
  acknowledged: boolean = false;
  acknowledgedSub$: Subscription;

  @ViewChild(FilledSpinningButtonComponent) spinnerBtn: FilledSpinningButtonComponent | undefined;

  constructor(public accountDetailService: AccountDetailService) {
    this.showModalSub$ = this.accountDetailService.showModal$.subscribe((v) => {
      this.showModal = v;
    });
    this.acknowledgedSub$ = this.accountDetailService.acknowledged$.subscribe((v) => {
      this.acknowledged = v;
    });
  }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    this.showModalSub$.unsubscribe();
    this.acknowledgedSub$.unsubscribe();
  }

  toggleModal(): void {
    this.accountDetailService.toggleModal();
  }

  handleActionForDispute(event: IOnboardingEvent): void {
    if (!this.accountDetailService.actionForDispute(event)) this.spinnerBtn?.toggleSpinner();
    if (this.tradelineDetailsConfig?.tradeline)
      this.accountDetailService.onConfirm(this.tradelineDetailsConfig?.tradeline);
  }
}
