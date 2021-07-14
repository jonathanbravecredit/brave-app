import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'brave-dispute-current-card',
  templateUrl: './dispute-current-card.component.html',
  styleUrls: ['./dispute-current-card.component.css']
})
export class DisputeCurrentCardComponent implements OnInit {
  @Input() creditorName: string | undefined;
  @Input() status: string | undefined;
  @Input() dateSubmitted: string | undefined;
  @Input() accountType: string | undefined;
  
  constructor() { }

  ngOnInit(): void {
  }

}
