// modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedComponentsModule } from '@shared/components/shared-components.module';
import { SharedPipesModule } from '@shared/pipes/shared-pipes.module';
import { NegativeAccountComponent } from '@views/dashboard/negative-account/negative-account.component';
import { NegativeAccountRoutingModule } from '@views/dashboard/negative-account/negative-account.routing';
import { NegativeAccountInitialPureComponent } from '@views/dashboard/negative-account/negative-account-initial-pure/negative-account-initial-pure.component';
import { NegativeAccountInitialComponent } from '@views/dashboard/negative-account/negative-account-initial/negative-account-initial.component';
import { DisputesModule } from '@views/dashboard/disputes/disputes.module';
import { TradelinesModule } from '@views/dashboard/reports/credit-report/tradelines/tradelines.module';
import { AccountsModule } from '@shared/components/accounts/accounts.module';

const modules = [
  CommonModule,
  SharedComponentsModule,
  SharedPipesModule,
  NegativeAccountRoutingModule,
  DisputesModule,
  TradelinesModule,
  AccountsModule,
];
const components = [NegativeAccountComponent, NegativeAccountInitialComponent, NegativeAccountInitialPureComponent];

const pipes: [] = [];

@NgModule({
  declarations: [...components, ...pipes],
  imports: [...modules],
  exports: [...components],
})
export class NegativeAccountModule {}
