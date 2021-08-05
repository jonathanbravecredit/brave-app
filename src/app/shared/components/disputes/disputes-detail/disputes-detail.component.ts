import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'brave-disputes-detail',
  templateUrl: './disputes-detail.component.html',
})
export class DisputesDetailComponent implements OnInit {
  @Input() pages: any[] = [];
  @Input() data: any[] = [];

  constructor() {}

  ngOnInit(): void {}
}
