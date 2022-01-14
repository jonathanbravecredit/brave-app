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
import { FindingsResolver } from '@shared/resolvers/findings/findings.resolver';
import { DisputesResolver } from '@shared/resolvers/disputes/disputes.resolver';
import { DisputesHistoricalView } from '@views/dashboard/disputes/disputes-historical/disputes-historical/disputes-historical.view';
import { ROUTE_NAMES as routes } from '@shared/routes/routes.names';
import { IpAddressGuard } from '@shared/guards/ipaddress.guard';
const disputes = routes.root.dashboard.disputes;

const DisputeRoutes: Routes = [
  {
    path: '',
    component: DisputesComponent,
    canActivate: [IpAddressGuard, ActiveGuard, AuthGuard],
    children: [
      {
        path: '',
        redirectTo: 'overview',
        pathMatch: 'full',
      },
      {
        path: `${disputes.overview.segment}`,
        component: DisputesOverviewInitialView,
        resolve: { disputes: DisputesResolver },
        canActivate: [IpAddressGuard, ActiveGuard, AuthGuard],
      },
      {
        path: `${disputes.historical.segment}`,
        component: DisputesHistoricalView,
        resolve: { disputes: DisputesResolver },
        canActivate: [IpAddressGuard, ActiveGuard, AuthGuard],
      },
      {
        path: `${disputes.findings.segment}/:investigation/:creditbureau`,
        component: DisputeFindingsView,
        resolve: { reports: FindingsResolver },
        canActivate: [IpAddressGuard, ActiveGuard, AuthGuard],
      },
      {
        path: `${disputes.reconfirm.segment}`,
        component: DisputesReconfirmView,
        canActivate: [IpAddressGuard, ActiveGuard, AuthGuard],
      },
      {
        path: `${disputes.tradeline.segment}`,
        component: DisputesTradelineView,
        canActivate: [IpAddressGuard, ActiveGuard, AuthGuard],
      },
      {
        path: `${disputes.personalitem.segment}`,
        component: DisputesPersonalView,
        canActivate: [IpAddressGuard, ActiveGuard, AuthGuard],
      },
      {
        path: `${disputes.publicitem.segment}`,
        component: DisputesPublicView,
        canActivate: [IpAddressGuard, ActiveGuard, AuthGuard],
      },
      {
        path: `${disputes.tradeline.segment}/${disputes.tradeline.error.segment}`,
        component: BaseExceptionView,
        canActivate: [IpAddressGuard, ActiveGuard, AuthGuard],
      },
      {
        path: `${disputes.personalitem.segment}/${disputes.personalitem.error.segment}`,
        component: BaseExceptionView,
        canActivate: [IpAddressGuard, ActiveGuard, AuthGuard],
      },
      {
        path: `${disputes.publicitem.segment}/${disputes.publicitem.error.segment}`,
        component: BaseExceptionView,
        canActivate: [IpAddressGuard, ActiveGuard, AuthGuard],
      },
      {
        path: `${disputes.error.segment}`,
        component: BaseExceptionView,
        canActivate: [IpAddressGuard, ActiveGuard, AuthGuard],
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(DisputeRoutes)],
  exports: [RouterModule],
})
export class DisputesRoutingModule {}
