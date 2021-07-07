import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { DisputeTradelineTestComponent } from './dispute-tradeline.component';

const DisputeTradelineRoutes: Routes = [
  {
    path: '',
    component: DisputeTradelineTestComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(DisputeTradelineRoutes)],
  exports: [RouterModule],
})
export class DisputeTradelineRoutingModule {}
