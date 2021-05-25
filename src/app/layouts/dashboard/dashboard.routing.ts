import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { DashboardComponent } from '@layouts/dashboard/dashboard.component';

const DashboardRoutes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    children: [],
  },
];

@NgModule({
  imports: [RouterModule.forChild(DashboardRoutes)],
  exports: [RouterModule],
})
export class DashboardRoutingModule {}
