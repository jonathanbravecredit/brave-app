import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { DashboardComponent } from '@views/dashboard/dashboard.component';
import { AuthGuard } from '@shared/guards/auth.guard';
import { ActiveGuard } from '@shared/guards/active.guard';
import { DashboardResolver } from '@shared/resolvers/dashboard/dashboard.resolver';
import { ROUTE_NAMES as routes } from '@shared/routes/routes.names';
import { CreditUtilizationView } from '@views/dashboard/credit-utilization/credit-utilization/credit-utilization.view';
import { CreditUtilizationResolver } from '@shared/resolvers/credit-utilization/credit-utilization.resolver';
import { CreditUtilizationComponent } from '@views/dashboard/credit-utilization/credit-utilization.component';
const dashboard = routes.root.dashboard;
const snapshot = routes.root.dashboard.report.snapshot;

const CreditMixRoutes: Routes = [
  {
    path: '',
    component: CreditUtilizationComponent,
    canActivate: [ActiveGuard, AuthGuard],
    children: [
      {
        path: `${dashboard.report.segment}/${snapshot.segment}/${snapshot.creditutilization.segment}`,
        component: CreditUtilizationView,
        resolve: { creditReports: CreditUtilizationResolver },
        canActivate: [ActiveGuard, AuthGuard],
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(CreditMixRoutes)],
  exports: [RouterModule],
})
export class CreditMixRoutingModule {}
