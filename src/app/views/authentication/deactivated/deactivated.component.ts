import { Component, OnInit } from '@angular/core';
import { deactivatedContent } from '@views/authentication/deactivated/content';

@Component({
  selector: 'brave-deactivated',
  templateUrl: './deactivated.component.html',
})
export class DeactivatedComponent implements OnInit {
  content = deactivatedContent;
  constructor() {}

  ngOnInit(): void {
    setTimeout(() => {
      window.location.href = 'https://brave.credit';
    }, 6000);
  }
}
