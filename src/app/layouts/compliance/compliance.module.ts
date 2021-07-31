import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewsModule } from '@views/views.module';
import { SharedComponentsModule } from '@shared/components/shared-components.module';
import { ComplianceComponent } from '@layouts/compliance/compliance.component';
import { ComplianceRoutingModule } from '@layouts/compliance/compliance.routing';

const components = [ComplianceComponent];

@NgModule({
  declarations: [...components],
  imports: [
    CommonModule,
    SharedComponentsModule,
    ViewsModule,
    ComplianceRoutingModule,
  ],
  exports: [...components],
})
export class ComplianceModule {}
