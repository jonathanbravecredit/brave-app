// modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedComponentsModule } from '@shared/components/shared-components.module';
import { SharedPipesModule } from '@shared/pipes/shared-pipes.module';
import { DataBreachesParentComponent } from '@views/dashboard/data-breaches/data-breaches.component';
import { DataBreachesRoutingModule } from '@views/dashboard/data-breaches/data-breaches.routing';
import { DataBreachesPureComponent } from '@views/dashboard/data-breaches/data-breaches-pure/data-breaches-pure.component';
import { DataBreachHeaderComponent } from '@views/dashboard/data-breaches/components/data-breach-header/data-breach-header.component';
import { DataBreachListComponent } from '@views/dashboard/data-breaches/components/data-breach-list/data-breach-list.component';
import { DataBreachCardComponent } from '@views/dashboard/data-breaches/components/data-breach-card/data-breach-card.component';
import { DataBreachNoneComponent } from '@views/dashboard/data-breaches/components/data-breach-none/data-breach-none.component';
import { DataBreachShareComponent } from '@views/dashboard/data-breaches/components/data-breach-share/data-breach-share.component';
import { DataBreachesComponent } from '@views/dashboard/data-breaches/data-breaches/data-breaches.component';
import { AnalyticsDirective } from '@shared/directives/analytics/analytics.directive';
import { SharedDirectivesModule } from '@shared/directives/shared-directives.module';

const modules = [
  CommonModule,
  SharedComponentsModule,
  SharedPipesModule,
  DataBreachesRoutingModule,
  SharedDirectivesModule,
];
const components = [
  DataBreachesParentComponent,
  DataBreachesComponent,
  DataBreachesPureComponent,
  DataBreachHeaderComponent,
  DataBreachListComponent,
  DataBreachCardComponent,
  DataBreachNoneComponent,
  DataBreachShareComponent,
];

const pipes: [] = [];

@NgModule({
  declarations: [...components, ...pipes],
  imports: [...modules],
  exports: [...components],
})
export class DataBreachesModule {}
