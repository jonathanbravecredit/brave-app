// modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedComponentsModule } from '@shared/components/shared-components.module';
import { SharedPipesModule } from '@shared/pipes/shared-pipes.module';
import { DataBreachesComponent } from '@views/dashboard/data-breaches/data-breaches.component';
import { DataBreachesRoutingModule } from '@views/dashboard/data-breaches/data-breaches.routing';

const modules = [
  CommonModule,
  SharedComponentsModule,
  SharedPipesModule,
  DataBreachesRoutingModule,
];
const components = [
  DataBreachesComponent
];

const pipes: [] = [];

@NgModule({
  declarations: [...components, ...pipes],
  imports: [...modules],
  exports: [...components],
})
export class DataBreachesModule {}
