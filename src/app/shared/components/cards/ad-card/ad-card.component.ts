import { Component, Input, OnInit } from '@angular/core';
import { frontPageAd } from '@shared/interfaces/ads.interface';

@Component({
  selector: 'brave-ad-card',
  templateUrl: './ad-card.component.html',
})
export class AdCardComponent implements OnInit {
  @Input() imageLink: string = '';
  @Input() title: string = ''
  @Input() recommended: string = '';
  @Input() creditCheck: string = '';
  @Input() annual: string = '';
  @Input() textOne: string = '';
  @Input() textTwo: string = '';
  @Input() textThree: string = '';

  constructor() {}

  ngOnInit(): void {}
}
