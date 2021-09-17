import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'brave-horizontal-creditscore-bar',
  templateUrl: './horizontal-creditscore-bar.component.html',
})
export class HorizontalCreditscoreBarComponent implements OnInit {
  @Input() base: number = 300;
  @Input() limit: number = 850;
  @Input() currentValue: number | undefined;
  @Input() ptsChange: number = 0;
  percentage: number = 0;
  percentageStr: string = '0%';

  @ViewChild('bar') bar: ElementRef | undefined;
  @ViewChild('arrow') arrow: ElementRef | undefined;

  constructor() {}

  ngOnInit(): void {
    this.percentage = this.currentValue !== undefined ? Math.round(((this.currentValue - 300) / 550) * 100) : 50;
    this.percentageStr = `${this.percentage}%`;
  }
}
