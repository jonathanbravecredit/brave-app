import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'brave-tradeline-payment-history',
  templateUrl: './tradeline-payment-history.component.html',
})
export class TradelinePaymentHistoryComponent implements OnInit {
  test = {
    headers: {
      year: null,
      months: months,
    },
    years: [
      {
        year: '2020',
        months: ['c', 'c', 'c', 'c', 'c', 'c', '', '', '', '', '', ''],
      },
      {
        year: '2019',
        months: ['c', 'c', 'c', 'u', 'c', '1', 'c', 'c', 'c', 'c', 'c', 'c'],
      },
      {
        year: '2018',
        months: ['c', 'c', 'c', 'u', 'c', '1', 'c', '', 'c', 'c', 'c', 'c'],
      },
    ],
  };
  constructor() {}

  ngOnInit(): void {}
}

const months = ['j', 'f', 'm', 'a', 'm', 'j', 'j', 'a', 's', 'o', 'n', 'd'];
