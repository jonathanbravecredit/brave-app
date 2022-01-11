import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'brave-ad-card',
  templateUrl: './ad-card.component.html',
})
export class AdCardComponent implements OnInit {
  @Input() imageLink: string = '';
  @Input() pageLink: string = '';

  constructor() {}

  ngOnInit(): void {}
}
