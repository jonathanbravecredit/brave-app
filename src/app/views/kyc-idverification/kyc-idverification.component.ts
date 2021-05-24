import { Component, Input, OnInit } from '@angular/core';

type KycIdverificationState = 'init' | 'sent' | 'error';

@Component({
  selector: 'brave-kyc-idverification',
  templateUrl: './kyc-idverification.component.html',
})
export class KycIdverificationComponent implements OnInit {
  @Input() state: KycIdverificationState = 'init';

  constructor() {}

  ngOnInit(): void {}
}
