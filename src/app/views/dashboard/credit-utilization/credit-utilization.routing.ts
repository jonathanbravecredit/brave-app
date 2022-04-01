import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { AuthGuard } from '@shared/guards/auth.guard';
import { ActiveGuard } from '@shared/guards/active.guard';
import { ROUTE_NAMES as routes } from '@shared/routes/routes.names';
import { CreditUtilizationView } from '@views/dashboard/credit-utilization/credit-utilization/credit-utilization.view';
import { CreditUtilizationResolver } from '@shared/resolvers/credit-utilization/credit-utilization.resolver';
import { CreditUtilizationComponent } from '@views/dashboard/credit-utilization/credit-utilization.component';

const creditutilization = routes.root.dashboard.creditutilization;

const CreditUtilizationRoutes: Routes = [
  {
    path: '',
    component: CreditUtilizationComponent,
    canActivate: [ActiveGuard, AuthGuard],
    children: [
      {
        path: '',
        redirectTo: 'overview',
        pathMatch: 'full',
      },
      {
        path: `${creditutilization.overview.segment}`,
        component: CreditUtilizationView,
        resolve: { creditReports: CreditUtilizationResolver },
        canActivate: [ActiveGuard, AuthGuard],
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(CreditUtilizationRoutes)],
  exports: [RouterModule],
})
export class CreditUtilizationRoutingModule {}
