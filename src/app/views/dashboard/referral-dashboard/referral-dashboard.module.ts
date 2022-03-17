// modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedComponentsModule } from '@shared/components/shared-components.module';
import { SharedPipesModule } from '@shared/pipes/shared-pipes.module';
import { ReferralDashboardComponent } from '@views/dashboard/referral-dashboard/referral-dashboard.component';
import { ReferralDashboardRoutingModule } from '@views/dashboard/referral-dashboard/referral-dashboard.routing';

const modules = [
  CommonModule,
  SharedComponentsModule,
  SharedPipesModule,
  ReferralDashboardRoutingModule,
];
const components = [
  ReferralDashboardComponent
];

const pipes: [] = [];

@NgModule({
  declarations: [...components, ...pipes],
  imports: [...modules],
  exports: [...components],
})
export class DashboardModule {}
