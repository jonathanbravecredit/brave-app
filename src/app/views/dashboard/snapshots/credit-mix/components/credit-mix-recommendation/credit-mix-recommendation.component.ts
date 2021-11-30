import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'brave-credit-mix-recommendation',
  templateUrl: './credit-mix-recommendation.component.html'
})
export class CreditMixRecommendationComponent implements OnInit {

  show: boolean = true;

  constructor() { }

  ngOnInit(): void {
  }

  closeBox() {
    this.show = false
  }

}
