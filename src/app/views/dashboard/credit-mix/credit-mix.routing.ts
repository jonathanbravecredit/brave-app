import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { AuthGuard } from '@shared/guards/auth.guard';
import { ActiveGuard } from '@shared/guards/active.guard';
import { ROUTE_NAMES as routes } from '@shared/routes/routes.names';
import { CreditMixView } from '@views/dashboard/credit-mix/credit-mix/credit-mix.view';
import { CreditMixResolver } from '@shared/resolvers/credit-mix/credit-mix.resolver';
import { CreditMixComponent } from '@views/dashboard/credit-mix/credit-mix.component';

const creditmix = routes.root.dashboard.creditmix;

const CreditMixRoutes: Routes = [
  {
    path: '',
    component: CreditMixComponent,
    canActivate: [ActiveGuard, AuthGuard],
    children: [
      {
        path: '',
        redirectTo: 'overview',
        pathMatch: 'full',
      },
      {
        path: `${creditmix.overview.segment}`,
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
