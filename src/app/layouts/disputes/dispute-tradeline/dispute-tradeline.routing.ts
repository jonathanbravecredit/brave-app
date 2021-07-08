import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { DisputeTradelineComponent } from './dispute-tradeline.component';
import { AuthGuard } from '@shared/guards/auth.guard';
import { TradelinesDisputeProcessView } from '@views/tradelines-dispute-process/tradelines-dispute-process/tradelines-dispute-process.view';

const DisputeTradelineRoutes: Routes = [
  {
    path: '',
    component: DisputeTradelineComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: '',
        redirectTo: 'tradeline-dispute',
        pathMatch: 'full',
      },
      {
        path: 'tradeline-dispute',
        component: TradelinesDisputeProcessView,
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
