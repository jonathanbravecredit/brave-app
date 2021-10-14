import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { IDisputeHistorical } from '@views/dashboard/disputes/components/cards/interfaces';

@Component({
  selector: 'brave-disputes-overview-history-pure',
  templateUrl: './disputes-overview-history-pure.view.html',
  styleUrls: ['./disputes-overview-history-pure.view.css'],
})
export class DisputesOverviewHistoryPureView implements OnInit {
  @Input() historicalDisputes: IDisputeHistorical[] = [];

  constructor() {}

  ngOnInit(): void {}
}
