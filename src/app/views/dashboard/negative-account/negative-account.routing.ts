import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { AuthGuard } from '@shared/guards/auth.guard';
import { ActiveGuard } from '@shared/guards/active.guard';
import { ROUTE_NAMES as routes } from '@shared/routes/routes.names';
import { NegativeAccountComponent } from '@views/dashboard/negative-account/negative-account.component';
import { NegativeAccountInitialComponent } from '@views/dashboard/negative-account/negative-account-initial/negative-account-initial.component';

const negativeaccounts = routes.root.dashboard.negativeaccounts;

const NegativeAccountRoutes: Routes = [
  {
    path: '',
    component: NegativeAccountComponent,
    canActivate: [ActiveGuard, AuthGuard],
    children: [
      {
        path: '',
        redirectTo: 'overview',
        pathMatch: 'full',
      },
      {
        path: `${negativeaccounts.overview.segment}`,
        component: NegativeAccountInitialComponent,
        canActivate: [ActiveGuard, AuthGuard],
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(NegativeAccountRoutes)],
  exports: [RouterModule],
})
export class NegativeAccountRoutingModule {}
