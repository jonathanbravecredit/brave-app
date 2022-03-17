import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { AuthGuard } from '@shared/guards/auth.guard';
import { ActiveGuard } from '@shared/guards/active.guard';
import { DashboardResolver } from '@shared/resolvers/dashboard/dashboard.resolver';
import { ROUTE_NAMES as routes } from '@shared/routes/routes.names';
import { DataBreachesComponent } from '@views/dashboard/data-breaches/data-breaches.component';
import { SnapshotDatabreachesResolver } from '@shared/resolvers/snapshot-databreaches/snapshot-databreaches.resolver';
const dashboard = routes.root.dashboard;
const snapshot = routes.root.dashboard.report.snapshot;

const DataBreachesRoutes: Routes = [
  {
    path: '',
    component: DataBreachesComponent,
    canActivate: [ActiveGuard, AuthGuard],
    children: [
      {
        path: `${dashboard.report.segment}/${snapshot.segment}/${snapshot.databreach.segment}`,
        component: DataBreachesComponent,
        resolve: { breaches: SnapshotDatabreachesResolver },
        canActivate: [ActiveGuard, AuthGuard],
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(DataBreachesRoutes)],
  exports: [RouterModule],
})
export class DataBreachesRoutingModule {}
