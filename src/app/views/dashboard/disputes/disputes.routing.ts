import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { AuthGuard } from '@shared/guards/auth.guard';
import { ActiveGuard } from '@shared/guards/active.guard';
import { DisputesComponent } from '@views/dashboard/disputes/disputes.component';
import { DisputesOverviewInitialView } from '@views/dashboard/disputes/disputes-overview';
import { DisputeFindingsView } from '@views/dashboard/disputes/disputes-findings/dispute-findings/dispute-findings.view';
import { DisputesReconfirmView } from '@views/dashboard/disputes/disputes-reconfirm/disputes-reconfirm/disputes-reconfirm.view';
import { DisputesTradelineView } from '@views/dashboard/disputes/disputes-tradeline/disputes-tradeline/disputes-tradeline.view';
import { DisputesPersonalView } from '@views/dashboard/disputes/disputes-personal/disputes-personal/disputes-personal.view';
import { DisputesPublicView } from '@views/dashboard/disputes/disputes-public/disputes-public/disputes-public.view';
import { BaseExceptionView } from '@views/dashboard/exceptions/base-exception/base-exception/base-exception.view';

const DisputeRoutes: Routes = [
  {
    path: '',
    component: DisputesComponent,
    canActivate: [ActiveGuard, AuthGuard],
    children: [
      {
        path: '',
        redirectTo: 'overview',
        pathMatch: 'full',
      },
      {
        path: 'overview',
        component: DisputesOverviewInitialView,
        canActivate: [ActiveGuard, AuthGuard],
      },
      {
        path: 'findings',
        component: DisputeFindingsView,
        canActivate: [ActiveGuard, AuthGuard],
      },
      {
        path: 'reconfirm',
        component: DisputesReconfirmView,
        canActivate: [ActiveGuard, AuthGuard],
      },
      {
        path: 'tradeline',
        component: DisputesTradelineView,
        canActivate: [ActiveGuard, AuthGuard],
      },
      {
        path: 'personalitem',
        component: DisputesPersonalView,
        canActivate: [ActiveGuard, AuthGuard],
      },
      {
        path: 'publicitem',
        component: DisputesPublicView,
        canActivate: [ActiveGuard, AuthGuard],
      },
      {
        path: 'tradeline/error',
        component: BaseExceptionView,
        canActivate: [ActiveGuard, AuthGuard],
      },
      {
        path: 'personalitem/error',
        component: BaseExceptionView,
        canActivate: [ActiveGuard, AuthGuard],
      },
      {
        path: 'publicitem/error',
        component: BaseExceptionView,
        canActivate: [ActiveGuard, AuthGuard],
      },
      {
        path: 'error',
        component: BaseExceptionView,
        canActivate: [ActiveGuard, AuthGuard],
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(DisputeRoutes)],
  exports: [RouterModule],
})
export class DisputesRoutingModule {}
