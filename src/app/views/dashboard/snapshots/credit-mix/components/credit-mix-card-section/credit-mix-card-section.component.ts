import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'brave-credit-mix-card-section',
  templateUrl: './credit-mix-card-section.component.html'
})
export class CreditMixCardSectionComponent implements OnInit {
  @Input() title: string | undefined;
  @Input() icon: string | undefined;
  @Input() text: string | undefined;

  constructor() { }

  ngOnInit(): void {
  }

}
