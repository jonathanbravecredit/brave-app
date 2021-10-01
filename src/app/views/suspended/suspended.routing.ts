import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { SuspendedView } from '@views/suspended/suspended.view';
import { SuspendedDefaultView } from '@views/suspended/suspended-default/suspended-default.view';

// our routing scheme ===> layout/view/subview/subview2...
const SuspendedRoutes: Routes = [
  {
    path: '',
    component: SuspendedView,
    children: [
      {
        path: 'default',
        component: SuspendedDefaultView,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(SuspendedRoutes)],
  exports: [RouterModule],
  providers: [],
})
export class SuspendedRoutingModule {}
