import { Component } from '@angular/core';
import { FORBEARANCE_CONTENT } from '@views/dashboard/forbearance/forbearance.content';

@Component({
  selector: 'brave-forbearance-tips',
  templateUrl: './forbearance-tips.component.html',
})
export class ForbearanceTipsComponent {
  content = FORBEARANCE_CONTENT.tips;
  constructor() {}
}
