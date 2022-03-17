// modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedComponentsModule } from '@shared/components/shared-components.module';
import { SharedPipesModule } from '@shared/pipes/shared-pipes.module';
import { ProgressTrackerComponent } from '@views/dashboard/progress-tracker/progress-tracker.component';
import { ProgressTrackerRoutingModule } from '@views/dashboard/progress-tracker/progress-tracker.routing';

const modules = [
  CommonModule,
  SharedComponentsModule,
  SharedPipesModule,
  ProgressTrackerRoutingModule,
];
const components = [
  ProgressTrackerComponent
];

const pipes: [] = [];

@NgModule({
  declarations: [...components, ...pipes],
  imports: [...modules],
  exports: [...components],
})
export class DashboardModule {}
