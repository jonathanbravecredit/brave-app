import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '@shared/guards/auth.guard';

const routes: Routes = [
  {
    path: 'auth',
    loadChildren: () => import('./layouts/authentication/authentication.module').then((m) => m.AuthenticationModule),
  },
  {
    path: 'onboarding',
    canActivate: [AuthGuard],
    loadChildren: () => import('./layouts/onboarding/onboarding.module').then((m) => m.OnboardingModule),
  },
  {
    path: 'dashboard',
    canActivate: [AuthGuard],
    loadChildren: () => import('./layouts/dashboard/dashboard.module').then((m) => m.DashboardModule),
  },
  {
    path: 'legal',
    loadChildren: () => import('./layouts/compliance/compliance.module').then((m) => m.ComplianceModule),
  },
  { path: '', redirectTo: 'auth/signin', pathMatch: 'full' }, // TODO: replace with better page
  { path: '**', redirectTo: '', pathMatch: 'full' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      scrollPositionRestoration: 'enabled',
      useHash: false,
      anchorScrolling: 'enabled',
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
