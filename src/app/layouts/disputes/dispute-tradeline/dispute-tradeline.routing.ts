import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { DisputeTradelineComponent } from './dispute-tradeline.component';
import { AuthGuard } from '@shared/guards/auth.guard';
import { DisputesTradelineView } from '@views/disputes-tradeline/disputes-tradeline/disputes-tradeline.view';

const DisputeTradelineRoutes: Routes = [
  {
    path: '',
    component: DisputeTradelineComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: '',
        redirectTo: 'tradeline',
        pathMatch: 'full',
      },
      {
        path: 'tradeline',
        component: DisputesTradelineView,
        canActivate: [AuthGuard],
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(DisputeTradelineRoutes)],
  exports: [RouterModule],
})
export class DisputeTradelineRoutingModule {}
