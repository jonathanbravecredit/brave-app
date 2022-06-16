import { Routes, RouterModule } from "@angular/router";
import { NgModule } from "@angular/core";
import { WaitlistComponent } from "./waitlist.component";
import { ROUTE_NAMES as routes } from "@shared/routes/routes.names";
import { WaitlistWelcomeComponent } from "./waitlist-welcome/waitlist-welcome.component";
import { AuthResolver } from "../../shared/resolvers/auth/auth.resolver";
const waitlist = routes.root.waitlist;
// our routing scheme ===> layout/view/subview/subview2...
const WaitlistRoutes: Routes = [
  {
    path: "waitlist",
    component: WaitlistComponent,
    children: [
      {
        path: `${waitlist.welcome.segment}`,
        component: WaitlistWelcomeComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(WaitlistRoutes)],
  exports: [RouterModule],
  providers: [],
})
export class WaitlistRoutingModule {}
