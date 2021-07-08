import { Component, Input, OnInit } from '@angular/core';
import { IDisputeItem } from '@shared/services/dispute/dispute.interfaces';

@Component({
  selector: 'brave-new-dispute-pure',
  templateUrl: './new-dispute-pure.component.html',
})
export class NewDisputePureComponent implements OnInit {
  @Input() dispute: IDisputeItem | undefined;
  constructor() {}

  ngOnInit(): void {}
}
