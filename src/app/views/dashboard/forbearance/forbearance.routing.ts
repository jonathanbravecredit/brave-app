import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { AuthGuard } from '@shared/guards/auth.guard';
import { ActiveGuard } from '@shared/guards/active.guard';
import { ROUTE_NAMES as routes } from '@shared/routes/routes.names';
import { ForbearanceComponent } from '@views/dashboard/forbearance/forbearance.component';
import { ForbearanceView } from '@views/dashboard/forbearance/forbearance/forbearance.view';

const forbearance = routes.root.dashboard.forbearance;

const ForbearanceRoutes: Routes = [
  {
    path: '',
    component: ForbearanceComponent,
    canActivate: [ActiveGuard, AuthGuard],
    children: [
      {
        path: '',
        redirectTo: 'overview',
        pathMatch: 'full',
      },
      {
        path: `${forbearance.overview.segment}`,
        component: ForbearanceView,
        canActivate: [ActiveGuard, AuthGuard],
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(ForbearanceRoutes)],
  exports: [RouterModule],
})
export class ForbearanceRoutingModule {}
