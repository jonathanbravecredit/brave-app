import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// layouts
import { AuthenticationComponent } from '@layouts/authentication/authentication.component';

// authentication views
import { SignupComponent } from '@views/signup/signup.component';

const routes: Routes = [
  // authentication views
  {
    path: 'authentication',
    component: AuthenticationComponent,
    children: [
      { path: 'signup', component: SignupComponent },
      { path: '', redirectTo: 'signup', pathMatch: 'full' },
    ],
  },
  { path: '', component: AuthenticationComponent }, // TODO: replace with better page
  { path: '**', redirectTo: '', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
