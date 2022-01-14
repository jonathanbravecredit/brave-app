import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { SuspendedView } from '@views/suspended/suspended.view';
import { SuspendedDefaultView } from '@views/suspended/suspended-default/suspended-default.view';
import { ROUTE_NAMES as routes } from '@shared/routes/routes.names';
import { UnauthorizedView } from '@views/suspended/unauthorized/unauthorized.view';

// our routing scheme ===> layout/view/subview/subview2...
const SuspendedRoutes: Routes = [
  {
    path: '',
    component: SuspendedView,
    children: [
      {
        path: `${routes.root.suspended.default.segment}`,
        component: SuspendedDefaultView,
      },
      {
        path: `${routes.root.suspended.unauthorized.segment}`,
        component: UnauthorizedView,
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
