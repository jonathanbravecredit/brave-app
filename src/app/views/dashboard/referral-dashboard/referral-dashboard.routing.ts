import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { AuthGuard } from '@shared/guards/auth.guard';
import { ActiveGuard } from '@shared/guards/active.guard';
import { ROUTE_NAMES as routes } from '@shared/routes/routes.names';
import { ReferralDashboardComponent } from '@views/dashboard/referral-dashboard/referral-dashboard.component';
import { ReferralDashboardView } from '@views/dashboard/referral-dashboard/referral-dashboard/referral-dashboard.view';
import { ReferralResolver } from '@shared/resolvers/referral/referral.resolver';
const dashboard = routes.root.dashboard;
const snapshot = routes.root.dashboard.report.snapshot;

const ReferralDashboardRoutes: Routes = [
  {
    path: '',
    component: ReferralDashboardComponent,
    canActivate: [ActiveGuard, AuthGuard],
    children: [
      {
        path: `${dashboard.report.segment}/${snapshot.segment}/${snapshot.referrals.segment}`,
        component: ReferralDashboardView,
        resolve: { referral: ReferralResolver },
        canActivate: [ActiveGuard, AuthGuard],
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(ReferralDashboardRoutes)],
  exports: [RouterModule],
})
export class ReferralDashboardRoutingModule {}
