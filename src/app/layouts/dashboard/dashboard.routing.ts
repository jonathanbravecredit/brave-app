import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { DashboardComponent } from '@layouts/dashboard/dashboard.component';
import { AuthGuard } from '@shared/guards/auth.guard';
import { NegativeAccountInitialComponent } from '@views/negative-account/negative-account-initial/negative-account-initial.component';

const DashboardRoutes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: 'negativeaccounts',
        component: NegativeAccountInitialComponent,
        canActivate: [AuthGuard],
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(DashboardRoutes)],
  exports: [RouterModule],
})
export class DashboardRoutingModule {}
