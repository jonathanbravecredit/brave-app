// modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedComponentsModule } from '@shared/components/shared-components.module';
import { SharedPipesModule } from '@shared/pipes/shared-pipes.module';
import { CreditUtilizationView } from '@views/dashboard/credit-utilization/credit-utilization/credit-utilization.view';
import { CreditMixRoutingModule } from '@views/dashboard/credit-mix/credit-mix.routing';

const modules = [
  CommonModule,
  SharedComponentsModule,
  SharedPipesModule,
  CreditMixRoutingModule,
];
const components = [
  CreditUtilizationView
];

const pipes: [] = [];

@NgModule({
  declarations: [...components, ...pipes],
  imports: [...modules],
  exports: [...components],
})
export class CreditMixModule {}
