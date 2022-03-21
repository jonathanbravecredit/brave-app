import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { DashboardComponent } from '@views/dashboard/dashboard.component';
import { AuthGuard } from '@shared/guards/auth.guard';
import { ActiveGuard } from '@shared/guards/active.guard';
import { DashboardResolver } from '@shared/resolvers/dashboard/dashboard.resolver';
import { ROUTE_NAMES as routes } from '@shared/routes/routes.names';
import { CreditMixView } from '@views/dashboard/credit-mix/credit-mix/credit-mix.view';
import { CreditMixResolver } from '@shared/resolvers/credit-mix/credit-mix.resolver';
import { CreditMixComponent } from '@views/dashboard/credit-mix/credit-mix.component';
const dashboard = routes.root.dashboard;
const snapshot = routes.root.dashboard.report.snapshot;

const CreditMixRoutes: Routes = [
  {
    path: '',
    component: CreditMixComponent,
    canActivate: [ActiveGuard, AuthGuard],
    children: [
      {
        path: `${dashboard.report.segment}/${snapshot.segment}/${snapshot.creditmix.segment}`,
        component: CreditMixView,
        resolve: { tradeLineParition: CreditMixResolver },
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
