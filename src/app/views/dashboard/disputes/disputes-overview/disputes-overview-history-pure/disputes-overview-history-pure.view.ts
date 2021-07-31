import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { IDisputeHistorical } from '@shared/components/cards/dispute-cards';

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
