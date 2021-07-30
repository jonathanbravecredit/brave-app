import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { DashboardComponent } from '@layouts/dashboard/dashboard.component';
import { AuthGuard } from '@shared/guards/auth.guard';
import { NegativeAccountInitialComponent } from '@views/negative-account/negative-account-initial/negative-account-initial.component';
import { CreditReportComponent } from '@views/report/credit-report/credit-report.component';
import { TradelinesComponent } from '@views/tradelines/tradelines/tradelines.component';
import { DisputesTradelineView } from '@views/disputes-tradeline/disputes-tradeline/disputes-tradeline.view';
import { BaseExceptionView } from '@views/exceptions/base-exception/base-exception/base-exception.view';
import { DisputesOverviewInitialView } from '@views/dashboard/disputes/disputes-overview';
import { DisputeFindingsView } from '@views/dashboard/disputes/dispute-findings/dispute-findings.view';
import { SettingsLayout } from './settings/settings.layout';
import { DashboardInitComponent } from '@views/dashboard-init/dashboard-init/dashboard-init.component';

const DashboardRoutes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: '',
        redirectTo: 'init',
        pathMatch: 'full',
      },
      {
        path: 'init',
        component: DashboardInitComponent,
        canActivate: [AuthGuard],
      },
      {
        path: 'settings',
        component: SettingsLayout,
        canActivate: [AuthGuard],
      },
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
        path: 'report/detail/dispute/tradelines',
        component: DisputesTradelineView,
        canActivate: [AuthGuard],
      },
      {
        path: 'report/detail/dispute/error',
        component: BaseExceptionView,
        canActivate: [AuthGuard],
      },
      {
        path: 'report/accounts/negative',
        component: NegativeAccountInitialComponent,
        canActivate: [AuthGuard],
      },
      {
        path: 'disputes/overview',
        component: DisputesOverviewInitialView,
        canActivate: [AuthGuard],
      },
      {
        path: 'disputes/findings',
        component: DisputeFindingsView,
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
