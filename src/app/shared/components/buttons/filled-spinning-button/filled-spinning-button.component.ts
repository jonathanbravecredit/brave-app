import { Component, Input, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { InterstitialService } from '@shared/services/interstitial/interstitial.service';

@Component({
  selector: 'brave-filled-spinning-button',
  templateUrl: './filled-spinning-button.component.html',
})
export class FilledSpinningButtonComponent {
  @Input() disabled: boolean = false;
  spinning: boolean = false;
  constructor(private interstitial: InterstitialService) {
    this.interstitial.fetching$.subscribe((fetching) => {
      this.spinning = fetching;
    });
  }
}
