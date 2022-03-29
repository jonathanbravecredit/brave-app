import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { AuthGuard } from '@shared/guards/auth.guard';
import { ActiveGuard } from '@shared/guards/active.guard';
import { ROUTE_NAMES as routes } from '@shared/routes/routes.names';
import { SnapshotDatabreachesResolver } from '@shared/resolvers/snapshot-databreaches/snapshot-databreaches.resolver';
import { DataBreachesParentComponent } from '@views/dashboard/data-breaches/data-breaches.component';
import { DataBreachesComponent } from '@views/dashboard/data-breaches/data-breaches/data-breaches.component';

const databreach = routes.root.dashboard.databreach;

const DataBreachesRoutes: Routes = [
  {
    path: '',
    component: DataBreachesParentComponent,
    canActivate: [ActiveGuard, AuthGuard],
    children: [
      {
        path: '',
        redirectTo: 'overview',
        pathMatch: 'full',
      },
      {
        path: `${databreach.overview.segment}`,
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
