import { ComponentRef, Directive, HostListener, OnDestroy } from '@angular/core';
import { OnboardingDisputeV2Component } from '@shared/components/modals/onboarding-dispute-v2/onboarding-dispute-v2.component';
import { DisputeService } from '@shared/services/dispute/dispute.service';
import { InterstitialService } from '@shared/services/interstitial/interstitial.service';
import { ModalService } from '@shared/services/modal/modal.service';
import { Subscription } from 'rxjs';

@Directive({
  selector: '[braveDisputeButton]',
})
export class DisputeButtonDirective implements OnDestroy {
  compRef: ComponentRef<OnboardingDisputeV2Component> | undefined;
  closeClick$: Subscription | undefined;
  confirmClick$: Subscription | undefined;
  constructor(
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
    // need to attach the modal to the body if not already
    if (!this.modalService.compRef) {
      this.compRef = this.modalService.appendModalToBody(
        OnboardingDisputeV2Component,
      ) as ComponentRef<OnboardingDisputeV2Component>;
    }
  }

  subcribeToEvents(): void {
    if (!this.compRef) return;
    this.closeClick$ = this.compRef?.instance.closeClick.subscribe(() => {
      this.modalService.removeModalFromBody(this.compRef);
    });
    this.confirmClick$ = this.compRef?.instance.confirmClick.subscribe((event) => {
      // not sure what to do with this just yet...{isConfirmed: true}
    });
  }
}
