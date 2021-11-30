import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'brave-credit-mix-rating',
  templateUrl: './credit-mix-rating.component.html'
})
export class CreditMixRatingComponent implements OnInit {

  rating: string = 'Fair'
  ratingColor: string = 'orange'

  constructor() { }

  ngOnInit(): void {
  }

}
