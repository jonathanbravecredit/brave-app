import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'brave-horizontal-creditscore-invisiblebar',
  templateUrl: './horizontal-creditscore-invisiblebar.component.html',
})
export class HorizontalCreditscoreInvisiblebarComponent implements OnInit {
  @Input() base: number = 300;
  @Input() limit: number = 850;
  @Input() currentValue: number | undefined;
  @Input() rotationOffset: number = 0;
  percentage: number = 0;
  percentageStr: string = '50%';
  minPct = 0;
  maxPct = 85;

  @ViewChild('bar') bar: ElementRef | undefined;
  @ViewChild('arrow') arrow: ElementRef | undefined;

  constructor() {}

  ngOnInit(): void {
    this.percentage =
      this.currentValue !== undefined || this.currentValue == -1
        ? Math.round(((this.currentValue - 300) / 550) * 100)
        : 50;
    this.percentage = 85 * (this.percentage / 100); // 15% goes to half the marker
    this.percentageStr = this.percentage > this.maxPct ? `85%` : this.percentage < this.minPct ? `0%` : `${this.percentage}%`;
  }
}
