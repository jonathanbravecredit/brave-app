// modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedComponentsModule } from '@shared/components/shared-components.module';
import { SharedPipesModule } from '@shared/pipes/shared-pipes.module';
import { NegativeAccountComponent } from '@views/dashboard/negative-account/negative-account.component';
import { NegativeAccountRoutingModule } from '@views/dashboard/negative-account/negative-account.routing';
import { NegativeAccountCardHeaderComponent } from '@views/dashboard/negative-account/components/negative-account-card-header/negative-account-card-header.component';
import { NegativeAccountCardDetailTableComponent } from '@views/dashboard/negative-account/components/negative-account-card-detail-table/negative-account-card-detail-table.component';
import { NegativeAccountCardComponent } from '@views/dashboard/negative-account/components/negative-account-card/negative-account-card.component';
import { NegativeAccountInitialPureComponent } from '@views/dashboard/negative-account/negative-account-initial-pure/negative-account-initial-pure.component';
import { NegativeAccountInitialComponent } from '@views/dashboard/negative-account/negative-account-initial/negative-account-initial.component';
import { DisputesModule } from '@views/dashboard/disputes/disputes.module';
import { TradelinesModule } from '@views/dashboard/reports/credit-report/tradelines/tradelines.module';

const modules = [
  CommonModule,
  SharedComponentsModule,
  SharedPipesModule,
  DisputesModule,
  TradelinesModule,
  NegativeAccountRoutingModule,
];
const components = [
  NegativeAccountComponent,
  NegativeAccountInitialComponent,
  NegativeAccountInitialPureComponent,
  NegativeAccountCardComponent,
  NegativeAccountCardDetailTableComponent,
  NegativeAccountCardHeaderComponent,
];

const pipes: [] = [];

@NgModule({
  declarations: [...components, ...pipes],
  imports: [...modules],
  exports: [...components],
})
export class NegativeAccountModule {}
