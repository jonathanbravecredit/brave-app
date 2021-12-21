import { Routes, RouterModule } from "@angular/router";
import { NgModule } from "@angular/core";
import { AuthGuard } from "@shared/guards/auth.guard";
import { ActiveGuard } from "@shared/guards/active.guard";
import { DisputesComponent } from "@views/dashboard/disputes/disputes.component";
import { DisputesOverviewInitialView } from "@views/dashboard/disputes/disputes-overview";
import { DisputeFindingsView } from "@views/dashboard/disputes/disputes-findings/dispute-findings/dispute-findings.view";
import { DisputesReconfirmView } from "@views/dashboard/disputes/disputes-reconfirm/disputes-reconfirm/disputes-reconfirm.view";
import { DisputesTradelineView } from "@views/dashboard/disputes/disputes-tradeline/disputes-tradeline/disputes-tradeline.view";
import { DisputesPersonalView } from "@views/dashboard/disputes/disputes-personal/disputes-personal/disputes-personal.view";
import { DisputesPublicView } from "@views/dashboard/disputes/disputes-public/disputes-public/disputes-public.view";
import { BaseExceptionView } from "@views/dashboard/exceptions/base-exception/base-exception/base-exception.view";
import { FindingsResolver } from "@shared/resolvers/findings/findings.resolver";
import { DisputesResolver } from "@shared/resolvers/disputes/disputes.resolver";
import { DisputesHistoricalView } from "@views/dashboard/disputes/disputes-historical/disputes-historical/disputes-historical.view";
import { ROUTE_NAMES as routes } from "@shared/routes/routes.names";
const disputes = routes.root.children.dashboard.children.disputes;

const DisputeRoutes: Routes = [
  {
    path: "",
    component: DisputesComponent,
    canActivate: [ActiveGuard, AuthGuard],
    children: [
      {
        path: "",
        redirectTo: "overview",
        pathMatch: "full",
      },
      {
        path: disputes.children.overview.segment,
        component: DisputesOverviewInitialView,
        resolve: { disputes: DisputesResolver },
        canActivate: [ActiveGuard, AuthGuard],
      },
      {
        path: disputes.children.historical.segment,
        component: DisputesHistoricalView,
        resolve: { disputes: DisputesResolver },
        canActivate: [ActiveGuard, AuthGuard],
      },
      {
        path: `${disputes.children.findings.segment}/:investigation/:creditbureau`,
        component: DisputeFindingsView,
        resolve: { reports: FindingsResolver },
        canActivate: [ActiveGuard, AuthGuard],
      },
      {
        path: disputes.children.reconfirm.segment,
        component: DisputesReconfirmView,
        canActivate: [ActiveGuard, AuthGuard],
      },
      {
        path: disputes.children.tradeline.segment,
        component: DisputesTradelineView,
        canActivate: [ActiveGuard, AuthGuard],
      },
      {
        path: disputes.children.personalitem.segment,
        component: DisputesPersonalView,
        canActivate: [ActiveGuard, AuthGuard],
      },
      {
        path: disputes.children.publicitem.segment,
        component: DisputesPublicView,
        canActivate: [ActiveGuard, AuthGuard],
      },
      {
        path: `${disputes.children.tradeline.segment}/${disputes.children.tradeline.children.error.segment}`,
        component: BaseExceptionView,
        canActivate: [ActiveGuard, AuthGuard],
      },
      {
        path: `${disputes.children.personalitem.segment}/${disputes.children.personalitem.children.error.segment}`,
        component: BaseExceptionView,
        canActivate: [ActiveGuard, AuthGuard],
      },
      {
        path: `${disputes.children.publicitem.segment}/${disputes.children.publicitem.children.error.segment}`,
        component: BaseExceptionView,
        canActivate: [ActiveGuard, AuthGuard],
      },
      {
        path: disputes.children.error.segment,
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
