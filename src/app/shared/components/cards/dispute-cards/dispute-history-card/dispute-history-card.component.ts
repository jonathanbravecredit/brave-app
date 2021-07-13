import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'brave-dispute-history-card',
  templateUrl: './dispute-history-card.component.html',
  styleUrls: ['./dispute-history-card.component.css']
})
export class DisputeHistoryCardComponent implements OnInit {
  @Input() creditorName: string | undefined;
  @Input() latestDateSubmitted: string | undefined;
  @Input() decision: string | undefined;
  
  constructor() { }

  ngOnInit(): void {
  }

}
