import { AfterViewInit, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SuspendedView } from '@views/suspended/suspended.view';
import { SharedComponentsModule } from '@shared/components/shared-components.module';
import { SharedPipesModule } from '@shared/pipes/shared-pipes.module';
import { SuspendedRoutingModule } from '@views/suspended/suspended.routing';
import { SuspendedDefaultView } from './suspended-default/suspended-default.view';
import { UnauthorizedView } from './unauthorized/unauthorized.view';
import { SharedDirectivesModule } from '@shared/directives/shared-directives.module';
import { RenderedService } from '@shared/services/monitor/rendered/rendered.service';

const components = [SuspendedView, SuspendedDefaultView, UnauthorizedView];

@NgModule({
  declarations: [...components],
  imports: [CommonModule, SharedComponentsModule, SharedPipesModule, SharedDirectivesModule, SuspendedRoutingModule],
  exports: [...components],
})
export class SuspendedModule implements AfterViewInit {
  constructor(private rendered: RenderedService) {}

  ngAfterViewInit(): void {
    this.rendered.checkStatus();
  }
}
