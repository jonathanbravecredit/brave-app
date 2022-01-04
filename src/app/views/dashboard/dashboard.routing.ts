import { Routes, RouterModule } from "@angular/router";
import { NgModule } from "@angular/core";
import { DashboardComponent } from "@views/dashboard/dashboard.component";
import { AuthGuard } from "@shared/guards/auth.guard";
import { NegativeAccountInitialComponent } from "@views/dashboard/snapshots/negative-account/negative-account-initial/negative-account-initial.component";
import { CreditReportComponent } from "@views/dashboard/reports/credit-report/credit-report/credit-report.component";
import { TradelinesComponent } from "@views/dashboard/reports/credit-report/tradelines/tradelines/tradelines.component";
import { PublicitemsView } from "@views/dashboard/reports/credit-report/publicitems/publicitems/publicitems.view";
import { PersonalitemsView } from "@views/dashboard/reports/credit-report/personalitems/personalitems/personalitems.view";
import { DashboardEnrolledComponent } from "@views/dashboard/dashboard-enrolled/dashboard-enrolled/dashboard-enrolled.component";
import { SettingsComponent } from "@views/dashboard/settings/settings/settings.component";
import { BaseExceptionView } from "@views/dashboard/exceptions/base-exception/base-exception/base-exception.view";
import { ForbearanceView } from "@views/dashboard/snapshots/forbearance/forbearance/forbearance.view";
import { DataBreachesComponent } from "@views/dashboard/snapshots/data-breaches/data-breaches/data-breaches.component";
import { SnapshotDatabreachesResolver } from "@shared/resolvers/snapshot-databreaches/snapshot-databreaches.resolver";
import { ActiveGuard } from "@shared/guards/active.guard";
import { DashboardResolver } from "@shared/resolvers/dashboard/dashboard.resolver";
import { CreditUtilizationView } from "@views/dashboard/snapshots/credit-utilization/credit-utilization/credit-utilization.view";
import { CreditUtilizationResolver } from "@shared/resolvers/credit-utilization/credit-utilization.resolver";
import { CreditMixView } from "./snapshots/credit-mix/credit-mix/credit-mix.view";
import { CreditMixResolver } from "@shared/resolvers/credit-mix/credit-mix.resolver";
import { ReferralDashboardView } from "@views/dashboard/snapshots/referral-dashboard/referral-dashboard/referral-dashboard.view";
import { ReferralMetricsResolver } from "@shared/resolvers/referral-metrics/referral-metrics.resolver";
import { ReferralResolver } from "@shared/resolvers/referral/referral.resolver";
import { ROUTE_NAMES as routes } from "@shared/routes/routes.names";
const dashboard = routes.root.children.dashboard;
const snapshot =
  routes.root.children.dashboard.children.report.children.snapshot;

const DashboardRoutes: Routes = [
  {
    path: "",
    component: DashboardComponent,
    canActivate: [ActiveGuard, AuthGuard],
    children: [
      {
        path: dashboard.children.init.segment,
        component: DashboardEnrolledComponent,
        resolve: { dashboard: DashboardResolver },
        canActivate: [ActiveGuard, AuthGuard],
      },
      {
        path: dashboard.children.settings.segment,
        component: SettingsComponent,
        canActivate: [ActiveGuard, AuthGuard],
      },
      {
        path: dashboard.children.settings.segment + '/' + dashboard.children.settings.children.options.segment,
        component: SettingsComponent,
        canActivate: [ActiveGuard, AuthGuard],
      },
      {
        path: dashboard.children.report.segment,
        component: CreditReportComponent,
        canActivate: [ActiveGuard, AuthGuard],
      },
      {
        path: dashboard.children.disputes.segment,
        canActivate: [ActiveGuard, AuthGuard],
        loadChildren: () =>
          import("./disputes/disputes.module").then((m) => m.DisputesModule),
      },
      {
        path: dashboard.children.error.segment,
        component: BaseExceptionView,
        canActivate: [ActiveGuard, AuthGuard],
      },
      {
        path: dashboard.children.report.segment + '/' + snapshot.segment + '/' + snapshot.children.negative.segment,
        component: NegativeAccountInitialComponent,
        canActivate: [ActiveGuard, AuthGuard],
      },
      {
        path: dashboard.children.report.segment + '/' + snapshot.segment + '/' + snapshot.children.forbearance.segment,
        component: ForbearanceView,
        canActivate: [ActiveGuard, AuthGuard],
      },
      {
        path: dashboard.children.report.segment + '/' + snapshot.segment + '/' + snapshot.children.databreach.segment,
        component: DataBreachesComponent,
        resolve: { breaches: SnapshotDatabreachesResolver },
        canActivate: [ActiveGuard, AuthGuard],
      },
      {
        path: dashboard.children.report.segment + '/' + snapshot.segment + '/' + snapshot.children.creditutilization.segment,
        component: CreditUtilizationView,
        resolve: { creditReports: CreditUtilizationResolver },
        canActivate: [ActiveGuard, AuthGuard],
      },
      {
        path: dashboard.children.report.segment + '/' + snapshot.segment + '/' + snapshot.children.creditmix.segment,
        component: CreditMixView,
        resolve: { tradeLineParition: CreditMixResolver },
        canActivate: [ActiveGuard, AuthGuard],
      },
      {
        path: dashboard.children.report.segment + '/' + snapshot.segment + '/' + snapshot.children.referrals.segment,
        component: ReferralDashboardView,
        resolve: { referral: ReferralResolver },
        canActivate: [ActiveGuard, AuthGuard],
      },
      {
        path: dashboard.children.report.segment + '/' + dashboard.children.report.children.tradeline.segment,
        component: TradelinesComponent,
        canActivate: [ActiveGuard, AuthGuard],
      },
      {
        path: dashboard.children.report.segment + '/' + dashboard.children.report.children.publicitem.segment,
        component: PublicitemsView,
        canActivate: [ActiveGuard, AuthGuard],
      },
      {
        path: dashboard.children.report.segment + '/' + dashboard.children.report.children.personalitem.segment,
        component: PersonalitemsView,
        canActivate: [ActiveGuard, AuthGuard],
      },
      {
        path: dashboard.children.report.segment + '/' + dashboard.children.report.children.error.segment,
        component: BaseExceptionView,
        canActivate: [ActiveGuard, AuthGuard],
      },
    ],
  },
  {
    path: "",
    redirectTo: "init",
    pathMatch: "full",
  },
];

@NgModule({
  imports: [RouterModule.forChild(DashboardRoutes)],
  exports: [RouterModule],
})
export class DashboardRoutingModule {}
