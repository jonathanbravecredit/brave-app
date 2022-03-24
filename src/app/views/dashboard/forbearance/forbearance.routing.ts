import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { DashboardComponent } from '@views/dashboard/dashboard.component';
import { AuthGuard } from '@shared/guards/auth.guard';
import { DashboardEnrolledComponent } from '@views/dashboard/dashboard-enrolled/dashboard-enrolled/dashboard-enrolled.component';
import { ActiveGuard } from '@shared/guards/active.guard';
import { DashboardResolver } from '@shared/resolvers/dashboard/dashboard.resolver';
import { ROUTE_NAMES as routes } from '@shared/routes/routes.names';
import { ForbearanceComponent } from '@views/dashboard/forbearance/forbearance.component';
import { ForbearanceView } from '@views/dashboard/forbearance/forbearance/forbearance.view';
const dashboard = routes.root.dashboard;
const snapshot = routes.root.dashboard.report.snapshot;

const ForbearanceRoutes: Routes = [
  {
    path: '',
    component: ForbearanceComponent,
    resolve: { dashboard: DashboardResolver },
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
