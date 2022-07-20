import { Routes, RouterModule } from "@angular/router";
import { NgModule } from "@angular/core";
import { DashboardComponent } from "@views/dashboard/dashboard.component";
import { AuthGuard } from "@shared/guards/auth.guard";
import { CreditReportComponent } from "@views/dashboard/reports/credit-report/credit-report/credit-report.component";
import { TradelinesComponent } from "@views/dashboard/reports/credit-report/tradelines/tradelines/tradelines.component";
import { PublicitemsView } from "@views/dashboard/reports/credit-report/publicitems/publicitems/publicitems.view";
import { PersonalitemsView } from "@views/dashboard/reports/credit-report/personalitems/personalitems/personalitems.view";
import { DashboardEnrolledComponent } from "@views/dashboard/dashboard-enrolled/dashboard-enrolled/dashboard-enrolled.component";
import { SettingsComponent } from "@views/dashboard/settings/settings/settings.component";
import { BaseExceptionView } from "@views/dashboard/exceptions/base-exception/base-exception/base-exception.view";
import { ActiveGuard } from "@shared/guards/active.guard";
import { DashboardResolver } from "@shared/resolvers/dashboard/dashboard.resolver";
import { ROUTE_NAMES as routes } from "@shared/routes/routes.names";
import { NegativeAccountInitialComponent } from "@views/dashboard/negative-account/negative-account-initial/negative-account-initial.component";
import { DashboardEnrolledClosedComponent } from "./dashboard-enrolled/dashboard-enrolled-closed/dashboard-enrolled-closed.component";
const dayjs = require("dayjs");
const utc = require("dayjs/plugin/utc");
const timezone = require("dayjs/plugin/timezone");
dayjs.extend(utc);
dayjs.extend(timezone);
dayjs.tz.setDefault("America/Los_Angeles");

const dashboard = routes.root.dashboard;

const DashboardRoutes: Routes = [
  {
    path: "",
    component: DashboardComponent,
    resolve: { dashboard: DashboardResolver },
    canActivate: [ActiveGuard, AuthGuard],
    children: [
      {
        path: `${dashboard.init.segment}`,
        component: dayjs().isAfter(dayjs("2022-08-31")) ? DashboardEnrolledClosedComponent : DashboardEnrolledComponent,
        // component: DashboardEnrolledClosedComponent,
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
        loadChildren: () => import("./disputes/disputes.module").then((m) => m.DisputesModule),
      },
      {
        path: `${dashboard.negativeaccounts.segment}`,
        canActivate: [ActiveGuard, AuthGuard],
        children: [
          {
            path: "",
            redirectTo: "overview",
            pathMatch: "full",
          },
          {
            path: `${dashboard.negativeaccounts.overview.segment}`,
            component: NegativeAccountInitialComponent,
            canActivate: [ActiveGuard, AuthGuard],
          },
        ],
        // loadChildren: () => import('./negative-account/negative-account.module').then((m) => m.NegativeAccountModule),
      },
      {
        path: `${dashboard.forbearance.segment}`,
        canActivate: [ActiveGuard, AuthGuard],
        loadChildren: () => import("./forbearance/forbearance.module").then((m) => m.ForbearanceModule),
      },
      {
        path: `${dashboard.databreach.segment}`,
        canActivate: [ActiveGuard, AuthGuard],
        loadChildren: () => import("./data-breaches/data-breaches.module").then((m) => m.DataBreachesModule),
      },
      {
        path: `${dashboard.creditutilization.segment}`,
        canActivate: [ActiveGuard, AuthGuard],
        loadChildren: () =>
          import("./credit-utilization/credit-utilization.module").then((m) => m.CreditUtilizationModule),
      },
      {
        path: `${dashboard.creditmix.segment}`,
        canActivate: [ActiveGuard, AuthGuard],
        loadChildren: () => import("./credit-mix/credit-mix.module").then((m) => m.CreditMixModule),
      },
      {
        path: `${dashboard.referrals.segment}`,
        canActivate: [ActiveGuard, AuthGuard],
        loadChildren: () =>
          import("./referral-dashboard/referral-dashboard.module").then((m) => m.ReferralDashboardModule),
      },
      {
        path: `${dashboard.progresstracker.segment}`,
        canActivate: [ActiveGuard, AuthGuard],
        loadChildren: () => import("./progress-tracker/progress-tracker.module").then((m) => m.ProgressTrackerModule),
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
