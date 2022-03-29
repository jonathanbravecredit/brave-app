import { ComponentRef, Directive, HostListener, Input, OnDestroy } from '@angular/core';
import { OnboardingDisputeV2Component } from '@shared/components/modals/onboarding-dispute-v2/onboarding-dispute-v2.component';
import { ITradeLinePartition, IBorrowerName, IBorrowerAddress, IEmployer, IPublicPartition } from '@shared/interfaces';
import { DisputeService } from '@shared/services/dispute/dispute.service';
import { InterstitialService } from '@shared/services/interstitial/interstitial.service';
import { ModalService } from '@shared/services/modal/modal.service';
import { Subscription } from 'rxjs';
import { TransunionUtil as tu } from '@shared/utils/transunion/transunion';
import { DisputeReconfirmFilter } from '@views/dashboard/disputes/disputes-reconfirm/types/dispute-reconfirm-filters';
import { ROUTE_NAMES as routes } from '@shared/routes/routes.names';
import { Router } from '@angular/router';
import { IPersonalItemsDetailsConfig } from '@views/dashboard/reports/credit-report/personalitems/components/personalitems-details/interfaces';

@Directive({
  selector: '[braveDisputeButton]',
})
export class DisputeButtonDirective implements OnDestroy {
  compRef: ComponentRef<OnboardingDisputeV2Component> | undefined;
  closeClick$: Subscription | undefined;
  confirmClick$: Subscription | undefined;
  @Input() action: 'acknowledging' | 'confirming' = 'acknowledging';
  @Input() type: 'tradeline' | 'publicitem' | 'personalitem' | undefined;
  @Input() tradeline: ITradeLinePartition | undefined;
  @Input() publicItem: IPublicPartition | undefined;
  @Input() personalItem: IPersonalItemsDetailsConfig | undefined;

  constructor(
    private router: Router,
    private modalService: ModalService,
    private disputeService: DisputeService,
    private interstitial: InterstitialService,
  ) {}

  ngOnDestroy(): void {
    this.closeClick$?.unsubscribe();
    this.confirmClick$?.unsubscribe();
  }
  @HostListener('click')
  onClick(): void {
    if (!this.tradeline) console.error('no tradeline partition input');
    if (this.action === 'confirming') {
      this.onUserConfirmation();
    } else if (this.action === 'acknowledging') {
      this.openModal();
    }
  }

  openModal(): void {
    if (!this.compRef) {
      this.compRef = this.modalService.appendModalToBody(
        OnboardingDisputeV2Component,
      ) as ComponentRef<OnboardingDisputeV2Component>;
      this.subcribeToEvents();
    }
  }

  closeModal(): void {
    if (!this.compRef) return;
    this.modalService.removeModalFromBody(this.compRef);
    this.compRef = undefined;
  }

  subcribeToEvents(): void {
    this.closeClick$ = this.compRef?.instance.closeClick.subscribe(() => {
      this.closeModal();
    });

    this.confirmClick$ = this.compRef?.instance.confirmClick.subscribe((event) => {
      if (this.tradeline) {
        this.onUserAcknowledgement(this.tradeline);
      }
    });
  }

  // only support for tradeline right now
  onUserAcknowledgement(tradeline: ITradeLinePartition) {
    const accountType = tu.queries.report.getTradelineTypeDescription(tradeline);
    this.interstitial.changeMessage('checking eligibility');
    this.interstitial.openInterstitial();
    this.closeModal();
    this.disputeService
      .onUserConfirmed()
      .then((resp) => {
        const { success, error } = resp;
        if (success) {
          const filter: DisputeReconfirmFilter = accountType;
          this.router.navigate([routes.root.dashboard.disputes.reconfirm.full], {
            queryParams: {
              type: filter,
            },
          });
        } else {
          const code = `${error?.Code}`;
          // this.handleError(code);
        }
      })
      .catch((err) => {
        // this.handleError();
      });
  }

  onUserConfirmation(): void {
    switch (this.type) {
      case 'tradeline':
        this.onDisputeTradelineClick(this.tradeline);
        break;
      case 'publicitem':
        this.onDisputePublicClick(this.publicItem);
        break;
      case 'personalitem':
        this.onDisputePersonalClick(this.personalItem);
        break;
      default:
        break;
    }
  }

  handleError(code: string = '197'): void {
    this.interstitial.closeInterstitial();
    this.router.navigate([routes.root.dashboard.disputes.error.full], {
      queryParams: {
        code: code,
      },
    });
  }

  onDisputePersonalClick(personalItem: IPersonalItemsDetailsConfig | undefined): void {
    if (!personalItem) return;
    this.disputeService.setPersonalItem(personalItem);
    this.router.navigate([routes.root.dashboard.disputes.personalitem.full], {
      queryParams: {
        step: 'summary',
        type: null,
      },
      queryParamsHandling: 'merge',
    });
  }

  onDisputePublicClick(publicItem: IPublicPartition | undefined): void {
    if (!publicItem) return;
    this.disputeService.setPublicItem(publicItem);
    this.router.navigate([routes.root.dashboard.disputes.publicitem.full], {
      queryParams: {
        step: 'select',
        type: null,
      },
      queryParamsHandling: 'merge',
    });
  }

  /**
   * Sets the current dispute in the service based on the tradeline clicked
   * - TODO...reevaluate when you understand the process better
   * @param {ITradeLinePartition} tradeline
   * @returns {void}
   */
  onDisputeTradelineClick(tradeline: ITradeLinePartition | undefined): void {
    if (!tradeline) return;
    this.disputeService.setTradelineItem(tradeline);
    this.router.navigate([routes.root.dashboard.disputes.tradeline.full], {
      queryParams: {
        step: 'select',
        type: null,
      },
      queryParamsHandling: 'merge',
    });
  }
}
