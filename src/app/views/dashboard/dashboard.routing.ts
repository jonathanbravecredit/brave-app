import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { DashboardComponent } from '@views/dashboard/dashboard.component';
import { AuthGuard } from '@shared/guards/auth.guard';
import { CreditReportComponent } from '@views/dashboard/reports/credit-report/credit-report/credit-report.component';
import { TradelinesComponent } from '@views/dashboard/reports/credit-report/tradelines/tradelines/tradelines.component';
import { PublicitemsView } from '@views/dashboard/reports/credit-report/publicitems/publicitems/publicitems.view';
import { PersonalitemsView } from '@views/dashboard/reports/credit-report/personalitems/personalitems/personalitems.view';
import { DashboardEnrolledComponent } from '@views/dashboard/dashboard-enrolled/dashboard-enrolled/dashboard-enrolled.component';
import { SettingsComponent } from '@views/dashboard/settings/settings/settings.component';
import { BaseExceptionView } from '@views/dashboard/exceptions/base-exception/base-exception/base-exception.view';
import { ActiveGuard } from '@shared/guards/active.guard';
import { DashboardResolver } from '@shared/resolvers/dashboard/dashboard.resolver';
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
        path: `${dashboard.error.segment}`,
        component: BaseExceptionView,
        canActivate: [ActiveGuard, AuthGuard],
      },
      {
        path: `${dashboard.disputes.segment}`,
        canActivate: [ActiveGuard, AuthGuard],
        loadChildren: () => import('./disputes/disputes.module').then((m) => m.DisputesModule),
      },
      {
        path: `${dashboard.report.segment}/${snapshot.segment}/${snapshot.negative.segment}`,
        canActivate: [ActiveGuard, AuthGuard],
        loadChildren: () => import('./negative-account/negative-account.module').then((m) => m.NegativeAccountModule),
      },
      {
        path: `${dashboard.report.segment}/${snapshot.segment}/${snapshot.forbearance.segment}`,
        canActivate: [ActiveGuard, AuthGuard],
        loadChildren: () => import('./forbearance/forbearance.module').then((m) => m.ForbearanceModule),
      },
      {
        path: `${dashboard.report.segment}/${snapshot.segment}/${snapshot.databreach.segment}`,
        canActivate: [ActiveGuard, AuthGuard],
        loadChildren: () => import('./data-breaches/data-breaches.module').then((m) => m.DataBreachesModule),
      },
      {
        path: `${dashboard.creditutilization.segment}`,
        canActivate: [ActiveGuard, AuthGuard],
        loadChildren: () =>
          import('./credit-utilization/credit-utilization.module').then((m) => m.CreditUtilizationModule),
      },
      {
        path: `${dashboard.creditmix.segment}`,
        canActivate: [ActiveGuard, AuthGuard],
        loadChildren: () => import('./credit-mix/credit-mix.module').then((m) => m.CreditMixModule),
      },
      {
        path: `${dashboard.report.segment}/${snapshot.segment}/${snapshot.referrals.segment}`,
        canActivate: [ActiveGuard, AuthGuard],
        loadChildren: () =>
          import('./referral-dashboard/referral-dashboard.module').then((m) => m.ReferralDashboardModule),
      },
      {
        path: `${dashboard.report.segment}/${snapshot.segment}/${snapshot.progressTracker.segment}`,
        canActivate: [ActiveGuard, AuthGuard],
        loadChildren: () => import('./progress-tracker/progress-tracker.module').then((m) => m.ProgressTrackerModule),
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
