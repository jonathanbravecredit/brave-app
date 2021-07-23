import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedComponentsModule } from '@shared/components/shared-components.module';
import { ViewsModule } from '@views/views.module';
import { DashboardRoutingModule } from '@layouts/dashboard/dashboard.routing';
import { DashboardComponent } from '@layouts/dashboard/dashboard.component';
import { SettingsLayout } from './settings/settings.layout';

const components = [DashboardComponent, SettingsLayout];

@NgModule({
  declarations: [...components],
  imports: [
    CommonModule,
    SharedComponentsModule,
    ViewsModule,
    DashboardRoutingModule,
  ],
  exports: [...components],
})
export class DashboardModule {}
