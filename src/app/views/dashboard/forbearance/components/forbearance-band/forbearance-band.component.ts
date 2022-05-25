import { Component } from '@angular/core';
import { FORBEARANCE_CONTENT } from '@views/dashboard/forbearance/forbearance.content';

@Component({
  selector: 'brave-forbearance-band',
  templateUrl: './forbearance-band.component.html',
})
export class ForbearanceBandComponent {
  content = FORBEARANCE_CONTENT.band;
  constructor() {}
}
