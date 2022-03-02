import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { ComplianceComponent } from '@views/compliance/compliance.component';
import { ComplianceTosComponent } from '@views/compliance/compliance-tos/compliance-tos.component';
import { CompliancePrivacyComponent } from '@views/compliance/compliance-privacy/compliance-privacy.component';
import { ROUTE_NAMES as routes } from '../../shared/routes/routes.names';
import { IpAddressGuard } from '@shared/guards/ipaddress.guard';

const ComplianceRoutes: Routes = [
  {
    path: '',
    component: ComplianceComponent,
    children: [
      {
        path: `${routes.root.compliance.tos.segment}`,
        component: ComplianceTosComponent,
      },
      {
        path: `${routes.root.compliance.privacy.segment}`,
        component: CompliancePrivacyComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(ComplianceRoutes)],
  exports: [RouterModule],
})
export class ComplianceRoutingModule {}
