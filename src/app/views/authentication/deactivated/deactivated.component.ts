import { Component, OnInit } from '@angular/core';
import { Router, NavigationStart, NavigationEnd } from '@angular/router';
import { deactivatedContent } from '@views/authentication/deactivated/content';

@Component({
  selector: 'brave-deactivated',
  templateUrl: './deactivated.component.html',
})
export class DeactivatedComponent implements OnInit {
  content = deactivatedContent;
  constructor(private router: Router) {}

  ngOnInit(): void {
    setTimeout(() => {
      window.location.href = 'https://brave.credit';
    }, 6000);
  }
}
