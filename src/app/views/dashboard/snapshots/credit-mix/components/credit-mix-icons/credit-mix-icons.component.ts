import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'brave-credit-mix-icons',
  templateUrl: './credit-mix-icons.component.html'
})
export class CreditMixIconsComponent implements OnInit {
  @Input() hasCreditCards: boolean = false
  @Input() hasStudentLoans: boolean = true
  @Input() hasAutoLoans: boolean = false
  @Input() hasMortgages: boolean = true

  constructor() { }

  ngOnInit(): void {
  }

}
