import { Component, OnInit } from '@angular/core';
import { securityFreezeContent } from '@shared/components/messages/security-freeze/content';

@Component({
  selector: 'brave-security-freeze',
  templateUrl: './security-freeze.component.html',
  styleUrls: ['./security-freeze.component.css'],
})
export class SecurityFreezeComponent implements OnInit {
  content = securityFreezeContent;
  constructor() {}

  ngOnInit(): void {}
}
