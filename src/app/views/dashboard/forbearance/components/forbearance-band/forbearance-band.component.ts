import { Component, OnInit } from '@angular/core';
import { forbearanceContent } from '@views/dashboard/forbearance/components/forbearance-band/content';

@Component({
  selector: 'brave-forbearance-band',
  templateUrl: './forbearance-band.component.html',
})
export class ForbearanceBandComponent implements OnInit {
  content = forbearanceContent;
  constructor() {}

  ngOnInit(): void {}
}
