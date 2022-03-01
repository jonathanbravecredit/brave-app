import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { DashboardComponent } from '@views/dashboard/dashboard.component';
import { AuthGuard } from '@shared/guards/auth.guard';
import { NegativeAccountInitialComponent } from '@views/dashboard/snapshots/negative-account/negative-account-initial/negative-account-initial.component';
import { CreditReportComponent } from '@views/dashboard/reports/credit-report/credit-report/credit-report.component';
import { TradelinesComponent } from '@views/dashboard/reports/credit-report/tradelines/tradelines/tradelines.component';
import { PublicitemsView } from '@views/dashboard/reports/credit-report/publicitems/publicitems/publicitems.view';
import { PersonalitemsView } from '@views/dashboard/reports/credit-report/personalitems/personalitems/personalitems.view';
import { DashboardEnrolledComponent } from '@views/dashboard/dashboard-enrolled/dashboard-enrolled/dashboard-enrolled.component';
import { SettingsComponent } from '@views/dashboard/settings/settings/settings.component';
import { BaseExceptionView } from '@views/dashboard/exceptions/base-exception/base-exception/base-exception.view';
import { ForbearanceView } from '@views/dashboard/snapshots/forbearance/forbearance/forbearance.view';
import { DataBreachesComponent } from '@views/dashboard/snapshots/data-breaches/data-breaches/data-breaches.component';
import { SnapshotDatabreachesResolver } from '@shared/resolvers/snapshot-databreaches/snapshot-databreaches.resolver';
import { ActiveGuard } from '@shared/guards/active.guard';
import { DashboardResolver } from '@shared/resolvers/dashboard/dashboard.resolver';
import { CreditUtilizationView } from '@views/dashboard/snapshots/credit-utilization/credit-utilization/credit-utilization.view';
import { CreditUtilizationResolver } from '@shared/resolvers/credit-utilization/credit-utilization.resolver';
import { CreditMixView } from './snapshots/credit-mix/credit-mix/credit-mix.view';
import { CreditMixResolver } from '@shared/resolvers/credit-mix/credit-mix.resolver';
import { ReferralDashboardView } from '@views/dashboard/snapshots/referral-dashboard/referral-dashboard/referral-dashboard.view';
import { ReferralResolver } from '@shared/resolvers/referral/referral.resolver';
import { ROUTE_NAMES as routes } from '@shared/routes/routes.names';
const dashboard = routes.root.dashboard;
const snapshot = routes.root.dashboard.report.snapshot;

const DashboardRoutes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    resolve: { dashboard: DashboardResolver },
    canActivate: [ActiveGuard, AuthGuard],
    children: [
      {
        path: `${dashboard.init.segment}`,
        component: DashboardEnrolledComponent,
        resolve: { dashboard: DashboardResolver },
        canActivate: [ActiveGuard, AuthGuard],
      },
      {
        path: `${dashboard.settings.segment}`,
        component: SettingsComponent,
        canActivate: [ActiveGuard, AuthGuard],
      },
      {
        path: `${dashboard.settings.segment}/${dashboard.settings.options.segment}`,
        component: SettingsComponent,
        canActivate: [ActiveGuard, AuthGuard],
      },
      {
        path: `${dashboard.report.segment}`,
        component: CreditReportComponent,
        canActivate: [ActiveGuard, AuthGuard],
      },
      {
        path: `${dashboard.disputes.segment}`,
        canActivate: [ActiveGuard, AuthGuard],
        loadChildren: () => import('./disputes/disputes.module').then((m) => m.DisputesModule),
      },
      {
        path: `${dashboard.error.segment}`,
        component: BaseExceptionView,
        canActivate: [ActiveGuard, AuthGuard],
      },
      {
        path: `${dashboard.report.segment}/${snapshot.segment}/${snapshot.negative.segment}`,
        component: NegativeAccountInitialComponent,
        canActivate: [ActiveGuard, AuthGuard],
      },
      {
        path: `${dashboard.report.segment}/${snapshot.segment}/${snapshot.forbearance.segment}`,
        component: ForbearanceView,
        canActivate: [ActiveGuard, AuthGuard],
      },
      {
        path: `${dashboard.report.segment}/${snapshot.segment}/${snapshot.databreach.segment}`,
        component: DataBreachesComponent,
        resolve: { breaches: SnapshotDatabreachesResolver },
        canActivate: [ActiveGuard, AuthGuard],
      },
      {
        path: `${dashboard.report.segment}/${snapshot.segment}/${snapshot.creditutilization.segment}`,
        component: CreditUtilizationView,
        resolve: { creditReports: CreditUtilizationResolver },
        canActivate: [ActiveGuard, AuthGuard],
      },
      {
        path: `${dashboard.report.segment}/${snapshot.segment}/${snapshot.creditmix.segment}`,
        component: CreditMixView,
        resolve: { tradeLineParition: CreditMixResolver },
        canActivate: [ActiveGuard, AuthGuard],
      },
      {
        path: `${dashboard.report.segment}/${snapshot.segment}/${snapshot.referrals.segment}`,
        component: ReferralDashboardView,
        resolve: { referral: ReferralResolver },
        canActivate: [ActiveGuard, AuthGuard],
      },
      {
        path: `${dashboard.report.segment}/${dashboard.report.tradeline.segment}`,
        component: TradelinesComponent,
        canActivate: [ActiveGuard, AuthGuard],
      },
      {
        path: `${dashboard.report.segment}/${dashboard.report.publicitem.segment}`,
        component: PublicitemsView,
        canActivate: [ActiveGuard, AuthGuard],
      },
      {
        path: `${dashboard.report.segment}/${dashboard.report.personalitem.segment}`,
        component: PersonalitemsView,
        canActivate: [ActiveGuard, AuthGuard],
      },
      {
        path: `${dashboard.report.segment}/${dashboard.report.error.segment}`,
        component: BaseExceptionView,
        canActivate: [ActiveGuard, AuthGuard],
      },
    ],
  },
  {
    path: '',
    redirectTo: 'init',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forChild(DashboardRoutes)],
  exports: [RouterModule],
})
export class DashboardRoutingModule {}
