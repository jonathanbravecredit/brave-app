// modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedComponentsModule } from '@shared/components/shared-components.module';
import { SharedPipesModule } from '@shared/pipes/shared-pipes.module';
import { CreditMixRoutingModule } from '@views/dashboard/credit-mix/credit-mix.routing';
import { CreditMixComponent } from '@views/dashboard/credit-mix/credit-mix.component';

const modules = [
  CommonModule,
  SharedComponentsModule,
  SharedPipesModule,
  CreditMixRoutingModule,
];
const components = [
  CreditMixComponent
];

const pipes: [] = [];

@NgModule({
  declarations: [...components, ...pipes],
  imports: [...modules],
  exports: [...components],
})
export class CreditMixModule {}
