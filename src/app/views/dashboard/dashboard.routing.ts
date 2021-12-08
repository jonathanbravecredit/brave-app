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
import { ReferralMetricsResolver } from '@shared/resolvers/referral-metrics/referral-metrics.resolver';
import { ReferralResolver } from '@shared/resolvers/referral/referral.resolver';

const DashboardRoutes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    canActivate: [ActiveGuard, AuthGuard],
    children: [
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
        canActivate: [ActiveGuard, AuthGuard],
        loadChildren: () => import('./disputes/disputes.module').then((m) => m.DisputesModule),
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
        path: 'report/snapshot/creditutilization',
        component: CreditUtilizationView,
        resolve: { creditReports: CreditUtilizationResolver },
        canActivate: [ActiveGuard, AuthGuard],
      },
      {
        path: 'report/snapshot/creditmix',
        component: CreditMixView,
        resolve: { tradeLineParition: CreditMixResolver },
        canActivate: [ActiveGuard, AuthGuard],
      },
      {
        path: 'report/snapshot/referrals',
        component: ReferralDashboardView,
        resolve: { referral: ReferralResolver },
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
        path: 'report/error',
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
