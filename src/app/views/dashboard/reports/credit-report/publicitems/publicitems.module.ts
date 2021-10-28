import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedComponentsModule } from '@shared/components/shared-components.module';
import { SharedPipesModule } from '@shared/pipes/shared-pipes.module';

import { PublicitemsView } from '@views/dashboard/reports/credit-report/publicitems/publicitems/publicitems.view';
import { PublicitemsPureView } from '@views/dashboard/reports/credit-report/publicitems/publicitems-pure/publicitems-pure.view';
import { PublicitemCardComponent } from '@views/dashboard/reports/credit-report/publicitems/components/publicitem-card/publicitem-card.component';
import { PublicitemsDetailsTableComponent } from '@views/dashboard/reports/credit-report/publicitems/components/publicitems-details-table/publicitems-details-table.component';
import { PublicitemsDetailsComponent } from '@views/dashboard/reports/credit-report/publicitems/components/publicitems-details/publicitems-details.component';
import { NgxMaskModule } from 'ngx-mask';

const components = [
  PublicitemsView,
  PublicitemsPureView,
  PublicitemsDetailsComponent,
  PublicitemsDetailsTableComponent,
  PublicitemCardComponent,
];

@NgModule({
  declarations: [...components],
  imports: [CommonModule, SharedComponentsModule, SharedPipesModule, NgxMaskModule],
  exports: [...components],
})
export class PublicitemsModule {}
