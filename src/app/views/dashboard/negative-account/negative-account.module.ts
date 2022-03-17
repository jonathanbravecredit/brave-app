// modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedComponentsModule } from '@shared/components/shared-components.module';
import { SharedPipesModule } from '@shared/pipes/shared-pipes.module';
import { NegativeAccountComponent } from '@views/dashboard/negative-account/negative-account.component';
import { NegativeAccountRoutingModule } from '@views/dashboard/negative-account/negative-account.routing';

const modules = [
  CommonModule,
  SharedComponentsModule,
  SharedPipesModule,
  NegativeAccountRoutingModule,
];
const components = [
  NegativeAccountComponent
];

const pipes: [] = [];

@NgModule({
  declarations: [...components, ...pipes],
  imports: [...modules],
  exports: [...components],
})
export class NegativeAccountModule {}
