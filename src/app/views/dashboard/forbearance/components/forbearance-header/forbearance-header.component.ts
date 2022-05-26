import { Component } from '@angular/core';
import { FORBEARANCE_CONTENT } from '@views/dashboard/forbearance/forbearance.content';

@Component({
  selector: 'brave-forbearance-header',
  templateUrl: './forbearance-header.component.html',
})
export class ForbearanceHeaderComponent {
  content = FORBEARANCE_CONTENT.header;
  constructor() {}
}
