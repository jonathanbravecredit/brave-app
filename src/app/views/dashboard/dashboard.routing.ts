import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { DashboardComponent } from '@views/dashboard/dashboard.component';
import { AuthGuard } from '@shared/guards/auth.guard';
import { NegativeAccountInitialComponent } from '@views/dashboard/snapshots/negative-account/negative-account-initial/negative-account-initial.component';
import { CreditReportComponent } from '@views/dashboard/reports/credit-report/credit-report/credit-report.component';
import { TradelinesComponent } from '@views/dashboard/reports/credit-report/tradelines/tradelines/tradelines.component';
import { DisputesOverviewInitialView } from '@views/dashboard/disputes/disputes-overview';
import { DisputeFindingsView } from '@views/dashboard/disputes/disputes-findings/dispute-findings/dispute-findings.view';
import { PublicitemsView } from '@views/dashboard/reports/credit-report/publicitems/publicitems/publicitems.view';
import { PersonalitemsView } from '@views/dashboard/reports/credit-report/personalitems/personalitems/personalitems.view';
import { DisputesPublicView } from '@views/dashboard/disputes/disputes-public/disputes-public/disputes-public.view';
import { DisputesTradelineView } from '@views/dashboard/disputes/disputes-tradeline/disputes-tradeline/disputes-tradeline.view';
import { DisputesReconfirmView } from '@views/dashboard/disputes/disputes-reconfirm/disputes-reconfirm/disputes-reconfirm.view';
import { DisputesPersonalView } from '@views/dashboard/disputes/disputes-personal/disputes-personal/disputes-personal.view';
import { DashboardEnrolledComponent } from '@views/dashboard/dashboard-enrolled/dashboard-enrolled/dashboard-enrolled.component';
import { SettingsComponent } from '@views/dashboard/settings/settings/settings.component';
import { BaseExceptionView } from '@views/dashboard/exceptions/base-exception/base-exception/base-exception.view';
import { ForbearanceAccountsComponent } from '@views/dashboard/snapshots/forbearance/components/forbearance-accounts/forbearance-accounts.component';
import { ForbearanceView } from '@views/dashboard/snapshots/forbearance/forbearance/forbearance.view';

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
        component: DashboardEnrolledComponent,
        canActivate: [AuthGuard],
      },
      {
        path: 'settings',
        component: SettingsComponent,
        canActivate: [AuthGuard],
      },
      {
        path: 'settings/options',
        component: SettingsComponent,
        canActivate: [AuthGuard],
      },
      {
        path: 'report',
        component: CreditReportComponent,
        canActivate: [AuthGuard],
      },
      {
        path: 'disputes',
        component: DisputesOverviewInitialView,
        canActivate: [AuthGuard],
      },
      {
        path: 'error',
        component: BaseExceptionView,
        canActivate: [AuthGuard],
      },
      {
        path: 'report/accounts/negative',
        component: NegativeAccountInitialComponent,
        canActivate: [AuthGuard],
      },
      {
        path: 'report/snapshot/forbearance',
        component: ForbearanceView,
        canActivate: [AuthGuard],
      },
      {
        path: 'report/tradeline',
        component: TradelinesComponent,
        canActivate: [AuthGuard],
      },
      {
        path: 'report/publicitem',
        component: PublicitemsView,
        canActivate: [AuthGuard],
      },
      {
        path: 'report/personalitem',
        component: PersonalitemsView,
        canActivate: [AuthGuard],
      },
      {
        path: 'report/dispute',
        component: DisputesReconfirmView,
        canActivate: [AuthGuard],
      },
      {
        path: 'report/dispute/tradeline',
        component: DisputesTradelineView,
        canActivate: [AuthGuard],
      },
      {
        path: 'report/dispute/personalitem',
        component: DisputesPersonalView,
        canActivate: [AuthGuard],
      },
      {
        path: 'report/dispute/publicitem',
        component: DisputesPublicView,
        canActivate: [AuthGuard],
      },
      {
        path: 'report/dispute/tradeline/error',
        component: BaseExceptionView,
        canActivate: [AuthGuard],
      },
      {
        path: 'report/dispute/personalitem/error',
        component: BaseExceptionView,
        canActivate: [AuthGuard],
      },
      {
        path: 'report/dispute/publicitem/error',
        component: BaseExceptionView,
        canActivate: [AuthGuard],
      },
      {
        path: 'disputes/findings',
        component: DisputeFindingsView,
        canActivate: [AuthGuard],
      },
      {
        path: 'report/error',
        component: BaseExceptionView,
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
