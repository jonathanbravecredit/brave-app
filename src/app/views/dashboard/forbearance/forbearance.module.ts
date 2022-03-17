// modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedComponentsModule } from '@shared/components/shared-components.module';
import { SharedPipesModule } from '@shared/pipes/shared-pipes.module';
import { ForbearanceComponent } from '@views/dashboard/forbearance/forbearance.component';
import { ForbearanceRoutingModule } from '@views/dashboard/forbearance/forbearance.routing';

const modules = [
  CommonModule,
  SharedComponentsModule,
  SharedPipesModule,
  ForbearanceRoutingModule,
];
const components = [
  ForbearanceComponent
];

const pipes: [] = [];

@NgModule({
  declarations: [...components, ...pipes],
  imports: [...modules],
  exports: [...components],
})
export class ForbearanceModule {}
