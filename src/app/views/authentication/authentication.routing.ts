import { Routes, RouterModule } from "@angular/router";
import { NgModule } from "@angular/core";
import { AuthenticationComponent } from "@views/authentication/authentication.component";
import { SigninForgotComponent } from "@views/authentication/signin-forgot/signin-forgot/signin-forgot.component";
import { SigninRedirectComponent } from "@views/authentication/signin-redirect/signin-redirect.component";
import { SigninRedirectNewuserComponent } from "@views/authentication/signin-redirect-newuser/signin-redirect-newuser/signin-redirect-newuser.component";
import { SigninComponent } from "@views/authentication/signin/signin/signin.component";
import { SignupErrorValidationComponent } from "@views/authentication/signup-error-validation/signup-error-validation.component";
import { SignupErrorComponent } from "@views/authentication/signup-error/signup-error.component";
import { SignupKnowyouComponent } from "@views/authentication/signup-knowyou/signup-knowyou.component";
import { SignupResendComponent } from "@views/authentication/signup-resend/signup-resend.component";
import { SignupThankyouComponent } from "@views/authentication/signup-thankyou/signup-thankyou/signup-thankyou.component";
import { SignupComponent } from "@views/authentication/signup/signup/signup.component";
import { RedirectResolver } from "@shared/resolvers/redirect.resolver";
import { DeactivatedComponent } from "@views/authentication/deactivated/deactivated.component";
import { ROUTE_NAMES as routes } from "../../shared/routes/routes.names";

const AuthenticationRoutes: Routes = [
  {
    path: "",
    component: AuthenticationComponent,
    children: [
      {
        path: "",
        redirectTo: "signin",
        pathMatch: "full",
      },
      {
        path: routes.root.children.auth.children.signup.segment,
        component: SignupComponent,
      },
      {
        path: routes.root.children.auth.children.signin.segment,
        component: SigninComponent,
      },
      {
        path: routes.root.children.auth.children.forgot.segment,
        component: SigninForgotComponent,
      },
      {
        path: routes.root.children.auth.children.redirect.segment,
        component: SigninRedirectComponent,
      },
      {
        path: routes.root.children.auth.children.created.segment,
        component: SigninRedirectNewuserComponent,
      },
      {
        path: routes.root.children.auth.children.thankyou.segment,
        component: SignupThankyouComponent,
      },
      {
        path: routes.root.children.auth.children.name.segment,
        component: SignupKnowyouComponent,
      },
      {
        path: routes.root.children.auth.children.error.segment,
        component: SignupErrorComponent,
      },
      {
        path: routes.root.children.auth.children.invalid.segment,
        component: SignupErrorValidationComponent,
      },
      {
        path: routes.root.children.auth.children.resend.segment,
        component: SignupResendComponent,
      },
      {
        path: routes.root.children.auth.children.deactivated.segment,
        component: DeactivatedComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(AuthenticationRoutes)],
  exports: [RouterModule],
  providers: [RedirectResolver],
})
export class AuthenticationRoutingModule {}
