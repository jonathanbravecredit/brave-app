import { Component, Input, OnInit } from '@angular/core';
import { ITradelineDetailsConfig } from '@shared/components/tradelines/tradeline-details/interfaces';

@Component({
  selector: 'brave-dispute-findings-pure',
  templateUrl: './dispute-findings-pure.view.html',
  styleUrls: ['./dispute-findings-pure.view.css']
})
export class DisputeFindingsPureView implements OnInit {
  @Input() reportCreatedAt: string = '';
  @Input() fileIdentificationNumber: string = '';
  @Input() resultCode: string = '';
  @Input() tradelineAccountConfig: ITradelineDetailsConfig | undefined;
  @Input() updatedValues: string[] = [];
  
  constructor() { }

  ngOnInit(): void {
  }

}
