import { AfterViewInit, Component } from '@angular/core';
import { RenderedService, RenderedViews } from '@shared/services/monitor/rendered/rendered.service';

@Component({
  selector: 'brave-authentication',
  templateUrl: './authentication.component.html',
})
export class AuthenticationComponent implements AfterViewInit {
  public tag = RenderedViews.Authentication;
  constructor(private rendered: RenderedService) {}

  ngAfterViewInit(): void {
    this.rendered.checkStatus();
  }
}
