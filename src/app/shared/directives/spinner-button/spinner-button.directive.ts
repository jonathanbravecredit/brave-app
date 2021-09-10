import { Directive, HostListener } from '@angular/core';
import { InterstitialService } from '@shared/services/interstitial/interstitial.service';

@Directive({
  selector: '[spinnerButton]',
})
export class SpinnerButtonDirective {
  constructor(private interstitial: InterstitialService) {}

  @HostListener('click')
  onClick(): void {
    this.interstitial.fetching$.next(true);
  }
}
