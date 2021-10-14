import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedComponentsModule } from '@shared/components/shared-components.module';
import { SharedPipesModule } from '@shared/pipes/shared-pipes.module';

import { PersonalitemsView } from '@views/dashboard/reports/credit-report/personalitems/personalitems/personalitems.view';
import { PersonalitemsPureView } from '@views/dashboard/reports/credit-report/personalitems/personalitems-pure/personalitems-pure.view';
import { PersonalitemDisputeCardComponent } from '@views/dashboard/reports/credit-report/personalitems/components/personalitem-dispute-card/personalitem-dispute-card.component';
import { PersonalitemsDetailsTableComponent } from '@views/dashboard/reports/credit-report/personalitems/components/personalitems-details-table/personalitems-details-table.component';
import { PersonalitemsDetailsComponent } from '@views/dashboard/reports/credit-report/personalitems/components/personalitems-details/personalitems-details.component';
import { NgxMaskModule } from 'ngx-mask';

const components = [
  PersonalitemsView,
  PersonalitemsPureView,
  PersonalitemsDetailsComponent,
  PersonalitemsDetailsTableComponent,
  PersonalitemDisputeCardComponent,
];

@NgModule({
  declarations: [...components],
  imports: [CommonModule, SharedComponentsModule, SharedPipesModule, NgxMaskModule],
  exports: [...components],
})
export class PersonalitemsModule {}
