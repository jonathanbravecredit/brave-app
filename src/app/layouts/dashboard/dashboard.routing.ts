import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { DashboardComponent } from '@layouts/dashboard/dashboard.component';
import { AuthGuard } from '@shared/guards/auth.guard';
import { NegativeAccountInitialComponent } from '@views/negative-account/negative-account-initial/negative-account-initial.component';
import { CreditReportComponent } from '@views/credit-report/credit-report/credit-report.component';
import { TradelinesComponent } from '@views/tradelines/tradelines/tradelines.component';

const DashboardRoutes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: 'report',
        component: CreditReportComponent,
        canActivate: [AuthGuard],
      },
      {
        path: 'report/detail',
        component: TradelinesComponent,
        canActivate: [AuthGuard],
      },
      {
        path: 'accounts/negative',
        component: NegativeAccountInitialComponent,
        canActivate: [AuthGuard],
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(DashboardRoutes)],
  exports: [RouterModule],
})
export class DashboardRoutingModule {}
