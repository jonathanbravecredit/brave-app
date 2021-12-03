import { Component, EventEmitter, Input, OnChanges, OnDestroy, OnInit, Output, Renderer2 } from '@angular/core';
import { SpinningButtonService } from '@shared/components/buttons/filled-spinning-button/filled-spinning-button.service';
import { InterstitialService } from '@shared/services/interstitial/interstitial.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'brave-filled-spinning-button',
  templateUrl: './filled-spinning-button.component.html',
  providers: [
    {
      provide: SpinningButtonService,
      useClass: InterstitialService,
    },
  ],
})
export class FilledSpinningButtonComponent implements OnInit, OnChanges, OnDestroy {
  @Input() disabled: boolean = false;
  @Input() backgroundColor: string = 'bg-indigo-800';
  @Input() color: string = 'text-white';
  @Input() full: boolean = false;
  @Output() onClick = new EventEmitter<any>();

  clicked: boolean = false;
  dynamicClass = new Set<string>();
  spinning: boolean = false;
  spinning$: Subscription | undefined;

  constructor(readonly buttonService: SpinningButtonService) {
    this.spinning$ = this.buttonService.fetching$.subscribe((fetching) => {
      this.spinning = fetching;
    });
  }

  ngOnChanges(): void {
    this.refreshClass();
  }
  ngOnInit(): void {
    this.refreshClass();
  }
  ngOnDestroy(): void {
    this.spinning$?.unsubscribe();
  }

  toggleSpinner(): void {
    this.buttonService.fetching$.next(!this.spinning);
  }

  refreshClass(): void {
    this.dynamicClass = new Set<string>();
    this.dynamicClass.add(this.backgroundColor);
    this.dynamicClass.add(this.color);
    if (this.full) this.dynamicClass.add('w-full');
  }
}
