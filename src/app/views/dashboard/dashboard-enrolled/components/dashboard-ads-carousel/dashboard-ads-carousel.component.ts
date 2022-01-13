import { Component, Input, OnInit } from '@angular/core';
import { AdCardComponent } from '@shared/components/cards/ad-card/ad-card.component';
import { IAdData } from '@shared/interfaces/ads.interface';

@Component({
  selector: 'brave-dashboard-ads-carousel',
  templateUrl: './dashboard-ads-carousel.component.html',
})
export class DashboardAdsCarouselComponent implements OnInit {
  @Input() adsData: IAdData[] | undefined;

  pages: any[] = [];

  constructor() {}

  ngOnInit(): void {
    if (this.adsData) {
      this.adsData.forEach((e) => {
        this.pages.push(AdCardComponent);
      });
    }
  }
}
