import { Component } from '@angular/core';
import { FORBEARANCE_CONTENT } from '@views/dashboard/forbearance/forbearance.content';

@Component({
  selector: 'brave-forbearance-info',
  templateUrl: './forbearance-info.component.html',
})
export class ForbearanceInfoComponent {
  content = FORBEARANCE_CONTENT.info;
  constructor() {}
}
