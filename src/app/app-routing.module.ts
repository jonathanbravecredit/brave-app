import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActiveGuard } from '@shared/guards/active.guard';
import { AuthGuard } from '@shared/guards/auth.guard';
import { OnboardedGuard } from '@shared/guards/onboarded.guard';

const routes: Routes = [
  {
    path: 'auth',
    loadChildren: () => import('./views/authentication/authentication.module').then((m) => m.AuthenticationModule),
  },
  {
    path: 'onboarding',
    canActivate: [ActiveGuard, AuthGuard],
    loadChildren: () => import('./views/onboarding/onboarding.module').then((m) => m.OnboardingModule),
  },
  {
    path: 'dashboard',
    canActivate: [ActiveGuard, OnboardedGuard, AuthGuard],
    loadChildren: () => import('./views/dashboard/dashboard.module').then((m) => m.DashboardModule),
  },
  {
    path: 'legal',
    loadChildren: () => import('./views/compliance/compliance.module').then((m) => m.ComplianceModule),
  },
  {
    path: 'suspended',
    loadChildren: () => import('./views/suspended/suspended.module').then((m) => m.SuspendedModule),
  },
  // { path: '', component: IndexComponent }, // TODO: replace with better page
  { path: '', redirectTo: 'auth/signin', pathMatch: 'full' }, // TODO: replace with better page
  { path: '**', redirectTo: '', pathMatch: 'full' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      useHash: false,
      anchorScrolling: 'enabled',
      scrollPositionRestoration: 'enabled',
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
