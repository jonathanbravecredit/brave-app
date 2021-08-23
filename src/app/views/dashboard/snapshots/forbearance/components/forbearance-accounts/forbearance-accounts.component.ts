import { Component, OnInit } from '@angular/core';
import { forbearanceAccountsContent } from '@views/dashboard/snapshots/forbearance/components/forbearance-accounts/content';

@Component({
  selector: 'brave-forbearance-accounts',
  templateUrl: './forbearance-accounts.component.html',
})
export class ForbearanceAccountsComponent implements OnInit {
  content = forbearanceAccountsContent;
  constructor() {}

  ngOnInit(): void {}
}
