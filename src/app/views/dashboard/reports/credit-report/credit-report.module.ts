import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PublicitemsModule } from '@views/dashboard/reports/credit-report/publicitems/publicitems.module';
import { TradelinesModule } from '@views/dashboard/reports/credit-report/tradelines/tradelines.module';
import { PersonalitemsModule } from '@views/dashboard/reports/credit-report/personalitems/personalitems.module';
import { SharedComponentsModule } from '@shared/components/shared-components.module';
import { SharedPipesModule } from '@shared/pipes/shared-pipes.module';

import { CreditReportPureComponent } from '@views/dashboard/reports/credit-report/credit-report-pure/credit-report-pure.component';
import { CreditReportComponent } from '@views/dashboard/reports/credit-report/credit-report/credit-report.component';

const modules = [
  CommonModule,
  SharedComponentsModule,
  SharedPipesModule,
  TradelinesModule,
  PublicitemsModule,
  PersonalitemsModule,
];

const components = [CreditReportPureComponent, CreditReportComponent];

@NgModule({
  declarations: [...components],
  imports: [...modules],
  exports: [...components, TradelinesModule, PublicitemsModule, PersonalitemsModule],
})
export class CreditReportModule {}
