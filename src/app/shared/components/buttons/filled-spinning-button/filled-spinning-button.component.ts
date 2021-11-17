import { Component, Input, OnChanges, OnInit, Renderer2 } from '@angular/core';
import { InterstitialService } from '@shared/services/interstitial/interstitial.service';

@Component({
  selector: 'brave-filled-spinning-button',
  templateUrl: './filled-spinning-button.component.html',
})
export class FilledSpinningButtonComponent implements OnInit, OnChanges {
  @Input() disabled: boolean = false;
  @Input() backgroundColor: string = 'bg-indigo-800';
  @Input() color: string = 'text-white';
  @Input() full: boolean = false;

  clicked: boolean = false;
  dynamicClass = new Set<string>();
  spinning: boolean = false;
  constructor(private interstitial: InterstitialService, private renderer: Renderer2) {
    this.interstitial.fetching$.subscribe((fetching) => {
      this.spinning = fetching;
    });
  }

  ngOnChanges(): void {
    this.refreshClass();
  }
  ngOnInit(): void {
    this.refreshClass();
  }

  toggleSpinner(): void {
    this.interstitial.fetching$.next(!this.spinning);
  }

  refreshClass(): void {
    this.dynamicClass = new Set<string>();
    this.dynamicClass.add(this.backgroundColor);
    this.dynamicClass.add(this.color);
    if (this.full) this.dynamicClass.add('w-full');
  }
}
