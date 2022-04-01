import { Component, OnInit } from '@angular/core';
import { forbearanceHeaderContent } from '@views/dashboard/forbearance/components/forbearance-header/content';

@Component({
  selector: 'brave-forbearance-header',
  templateUrl: './forbearance-header.component.html',
})
export class ForbearanceHeaderComponent implements OnInit {
  content = forbearanceHeaderContent;
  constructor() {}

  ngOnInit(): void {}
}
