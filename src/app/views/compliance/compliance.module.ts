import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewsModule } from '@views/views.module';
import { SharedComponentsModule } from '@shared/components/shared-components.module';
import { ComplianceComponent } from '@views/compliance/compliance.component';
import { ComplianceRoutingModule } from '@views/compliance/compliance.routing';
import { ComplianceTosComponent } from '@views/compliance/compliance-tos/compliance-tos.component';
import { CompliancePrivacyComponent } from '@views/compliance/compliance-privacy/compliance-privacy.component';
import { SharedDirectivesModule } from '@shared/directives/shared-directives.module';

const components = [ComplianceComponent, ComplianceTosComponent, CompliancePrivacyComponent];

@NgModule({
  declarations: [...components],
  imports: [CommonModule, SharedComponentsModule, SharedDirectivesModule, ComplianceRoutingModule],
  exports: [...components],
})
export class ComplianceModule {}
