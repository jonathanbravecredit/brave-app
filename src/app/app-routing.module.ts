import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { ActiveGuard } from '@shared/guards/active.guard';
import { AuthGuard } from '@shared/guards/auth.guard';
import { IpAddressGuard } from '@shared/guards/ipaddress.guard';

const routes: Routes = [
  {
    path: 'auth',
    canActivate: [IpAddressGuard],
    loadChildren: () => import('./views/authentication/authentication.module').then((m) => m.AuthenticationModule),
  },
  {
    path: 'onboarding',
    canActivate: [IpAddressGuard, ActiveGuard, AuthGuard],
    loadChildren: () => import('./views/onboarding/onboarding.module').then((m) => m.OnboardingModule),
  },
  {
    path: 'dashboard',
    canActivate: [IpAddressGuard, ActiveGuard, AuthGuard],
    loadChildren: () => import('./views/dashboard/dashboard.module').then((m) => m.DashboardModule),
  },
  {
    path: 'legal',
    loadChildren: () => import('./views/compliance/compliance.module').then((m) => m.ComplianceModule),
  },
  {
    path: 'waitlist',
    loadChildren: () => import('./views/waitlist/waitlist.module').then((m) => m.WaitlistModule),
  },
  {
    path: 'suspended',
    loadChildren: () => import('./views/suspended/suspended.module').then((m) => m.SuspendedModule),
  },
  { path: '', redirectTo: 'auth/signin', pathMatch: 'full' }, // TODO: replace with better page
  { path: '**', redirectTo: '', pathMatch: 'full' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      useHash: false,
      anchorScrolling: 'enabled',
      scrollPositionRestoration: 'enabled',
      enableTracing: false, //!environment.production,
      preloadingStrategy: PreloadAllModules,
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
