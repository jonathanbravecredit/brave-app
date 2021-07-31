import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { ComplianceComponent } from '@layouts/compliance/compliance.component';
import { ComplianceTosComponent } from '@views/compliance/compliance-tos/compliance-tos.component';
import { CompliancePrivacyComponent } from '@views/compliance/compliance-privacy/compliance-privacy.component';

const ComplianceRoutes: Routes = [
  {
    path: '',
    component: ComplianceComponent,
    children: [
      { path: 'tos', component: ComplianceTosComponent },
      { path: 'privacy', component: CompliancePrivacyComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(ComplianceRoutes)],
  exports: [RouterModule],
})
export class ComplianceRoutingModule {}
