import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SuspendedView } from '@views/suspended/suspended.view';
import { SharedComponentsModule } from '@shared/components/shared-components.module';
import { SharedPipesModule } from '@shared/pipes/shared-pipes.module';
import { SuspendedRoutingModule } from '@views/suspended/suspended.routing';
import { SuspendedDefaultView } from './suspended-default/suspended-default.view';

const components = [SuspendedView];

@NgModule({
  declarations: [...components, SuspendedDefaultView],
  imports: [CommonModule, SharedComponentsModule, SharedPipesModule, SuspendedRoutingModule],
  exports: [...components],
})
export class SuspendedModule {}
