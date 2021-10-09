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
import { ForbearanceView } from '@views/dashboard/snapshots/forbearance/forbearance/forbearance.view';
import { DataBreachesComponent } from '@views/dashboard/snapshots/data-breaches/data-breaches/data-breaches.component';
import { SnapshotDatabreachesResolver } from '@shared/resolvers/snapshot-databreaches/snapshot-databreaches.resolver';
import { ActiveGuard } from '@shared/guards/active.guard';
import { DashboardResolver } from '@shared/resolvers/dashboard/dashboard.resolver';

const DashboardRoutes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    canActivate: [ActiveGuard, AuthGuard],
    children: [
      {
        path: '',
        redirectTo: 'init',
        pathMatch: 'full',
      },
      {
        path: 'init',
        component: DashboardEnrolledComponent,
        resolve: { dashboard: DashboardResolver },
        canActivate: [ActiveGuard, AuthGuard],
      },
      {
        path: 'settings',
        component: SettingsComponent,
        canActivate: [ActiveGuard, AuthGuard],
      },
      {
        path: 'settings/options',
        component: SettingsComponent,
        canActivate: [ActiveGuard, AuthGuard],
      },
      {
        path: 'report',
        component: CreditReportComponent,
        canActivate: [ActiveGuard, AuthGuard],
      },
      {
        path: 'disputes',
        component: DisputesOverviewInitialView,
        canActivate: [ActiveGuard, AuthGuard],
      },
      {
        path: 'error',
        component: BaseExceptionView,
        canActivate: [ActiveGuard, AuthGuard],
      },
      {
        path: 'report/snapshot/negative',
        component: NegativeAccountInitialComponent,
        canActivate: [ActiveGuard, AuthGuard],
      },
      {
        path: 'report/snapshot/forbearance',
        component: ForbearanceView,
        canActivate: [ActiveGuard, AuthGuard],
      },
      {
        path: 'report/snapshot/databreach',
        component: DataBreachesComponent,
        resolve: { breaches: SnapshotDatabreachesResolver },
        canActivate: [ActiveGuard, AuthGuard],
      },
      {
        path: 'report/tradeline',
        component: TradelinesComponent,
        canActivate: [ActiveGuard, AuthGuard],
      },
      {
        path: 'report/publicitem',
        component: PublicitemsView,
        canActivate: [ActiveGuard, AuthGuard],
      },
      {
        path: 'report/personalitem',
        component: PersonalitemsView,
        canActivate: [ActiveGuard, AuthGuard],
      },
      {
        path: 'report/dispute',
        component: DisputesReconfirmView,
        canActivate: [ActiveGuard, AuthGuard],
      },
      {
        path: 'report/dispute/tradeline',
        component: DisputesTradelineView,
        canActivate: [ActiveGuard, AuthGuard],
      },
      {
        path: 'report/dispute/personalitem',
        component: DisputesPersonalView,
        canActivate: [ActiveGuard, AuthGuard],
      },
      {
        path: 'report/dispute/publicitem',
        component: DisputesPublicView,
        canActivate: [ActiveGuard, AuthGuard],
      },
      {
        path: 'report/dispute/tradeline/error',
        component: BaseExceptionView,
        canActivate: [ActiveGuard, AuthGuard],
      },
      {
        path: 'report/dispute/personalitem/error',
        component: BaseExceptionView,
        canActivate: [ActiveGuard, AuthGuard],
      },
      {
        path: 'report/dispute/publicitem/error',
        component: BaseExceptionView,
        canActivate: [ActiveGuard, AuthGuard],
      },
      {
        path: 'disputes/findings',
        component: DisputeFindingsView,
        canActivate: [ActiveGuard, AuthGuard],
      },
      {
        path: 'report/error',
        component: BaseExceptionView,
        canActivate: [ActiveGuard, AuthGuard],
      },
      // {
      //   path: 'test',
      //   component: OutlineSsnFullFormComponent,
      //   canActivate: [ActiveGuard, AuthGuard],
      // },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(DashboardRoutes)],
  exports: [RouterModule],
})
export class DashboardRoutingModule {}
