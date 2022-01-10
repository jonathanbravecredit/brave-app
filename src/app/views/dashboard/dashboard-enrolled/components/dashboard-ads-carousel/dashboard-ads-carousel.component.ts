import { Component, OnInit } from '@angular/core';
import { AdCardComponent } from '@shared/components/cards/ad-card/ad-card.component';
import { IAdData } from '@shared/interfaces/ads.interface';

@Component({
  selector: 'brave-dashboard-ads-carousel',
  templateUrl: './dashboard-ads-carousel.component.html',
})
export class DashboardAdsCarouselComponent implements OnInit {
  data: IAdData[] = [
    {
      imageLink: '',
      title: 'TITLE',
      recommended: 'RECOMMENDED',
      creditCheck: 'CREDITCHECK',
      annual: 'ANNUAL',
      textOne: 'TEXTONE',
      textTwo: 'TEXTTWO',
      textThree: 'TEXTTHREE',
      active: true,
      createdOn: '',
      modifiedOn: '',
    },
    {
      imageLink: '',
      title: 'TITLE2',
      recommended: 'RECOMMENDED2',
      creditCheck: 'CREDITCHECK2',
      annual: 'ANNUAL2',
      textOne: 'TEXTONE2',
      textTwo: 'TEXTTWO2',
      textThree: 'TEXTTHREE2',
      active: true,
      createdOn: '',
      modifiedOn: '',
    },
  ];

  pages: any[] = [AdCardComponent, AdCardComponent];

  constructor() {}

  ngOnInit(): void {}
}
