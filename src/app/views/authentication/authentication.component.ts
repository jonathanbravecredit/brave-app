import { Component } from '@angular/core';
import { RenderedViews } from '@shared/services/monitor/rendered/rendered.service';

@Component({
  selector: 'brave-authentication',
  templateUrl: './authentication.component.html',
})
export class AuthenticationComponent {
  public tag = RenderedViews.Authentication;
  constructor() {}
}
