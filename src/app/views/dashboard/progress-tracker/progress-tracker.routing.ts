import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { AuthGuard } from '@shared/guards/auth.guard';
import { ActiveGuard } from '@shared/guards/active.guard';
import { ROUTE_NAMES as routes } from '@shared/routes/routes.names';
import { ProgressTrackerParentComponent } from '@views/dashboard/progress-tracker/progress-tracker.component';

const progresstracker = routes.root.dashboard.progresstracker;

const ProgressTrackerRoutes: Routes = [
  {
    path: '',
    component: ProgressTrackerParentComponent,
    canActivate: [ActiveGuard, AuthGuard],
    children: [
      {
        path: '',
        redirectTo: 'overview',
        pathMatch: 'full',
      },
      {
        path: `${progresstracker.overview.segment}`,
        component: ProgressTrackerParentComponent,
        canActivate: [ActiveGuard, AuthGuard],
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(ProgressTrackerRoutes)],
  exports: [RouterModule],
})
export class ProgressTrackerRoutingModule {}
