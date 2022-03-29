import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { AuthGuard } from '@shared/guards/auth.guard';
import { ActiveGuard } from '@shared/guards/active.guard';
import { ROUTE_NAMES as routes } from '@shared/routes/routes.names';
import { ForbearanceComponent } from '@views/dashboard/forbearance/forbearance.component';
import { ForbearanceView } from '@views/dashboard/forbearance/forbearance/forbearance.view';
const dashboard = routes.root.dashboard;
const snapshot = routes.root.dashboard.report.snapshot;

const ForbearanceRoutes: Routes = [
  {
    path: '',
    component: ForbearanceComponent,
    canActivate: [ActiveGuard, AuthGuard],
    children: [
      {
        path: `${dashboard.report.segment}/${snapshot.segment}/${snapshot.forbearance.segment}`,
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
