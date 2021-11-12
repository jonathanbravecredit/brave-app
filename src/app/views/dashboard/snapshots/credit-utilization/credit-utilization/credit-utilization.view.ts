import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ITradeLinePartition } from '@shared/interfaces';

@Component({
  selector: 'brave-credit-utilization',
  templateUrl: './credit-utilization.view.html',
})
export class CreditUtilizationView implements OnInit {
  creditReports: ITradeLinePartition[] = [];
  // creditAccounts: ICreditUtilization[] = []

  constructor(private route: ActivatedRoute) {
    this.route.data.subscribe((resp: any) => {
      this.creditReports = resp.creditReports
    })
  }

  ngOnInit(): void {}
}
