// modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedComponentsModule } from '@shared/components/shared-components.module';
import { SharedPipesModule } from '@shared/pipes/shared-pipes.module';
import { ReferralDashboardComponent } from '@views/dashboard/referral-dashboard/referral-dashboard.component';
import { ReferralDashboardRoutingModule } from '@views/dashboard/referral-dashboard/referral-dashboard.routing';
import { ReferralDashboardPureView } from '@views/dashboard/referral-dashboard/referral-dashboard-pure/referral-pure.view';
import { ReferralDashboardView } from '@views/dashboard/referral-dashboard/referral-dashboard/referral-dashboard.view';
import { ReferralHeaderComponent } from '@views/dashboard/referral-dashboard/components/referral-header/referral-header.component';
import { ReferralBannerComponent } from '@views/dashboard/referral-dashboard/components/referral-banner/referral-banner.component';
import { ReferralEarningsComponent } from '@views/dashboard/referral-dashboard/components/referral-earnings/referral-earnings.component';
import { ReferralAmountLinkComponent } from '@views/dashboard/referral-dashboard/components/referral-amount-link/referral-amount-link.component';
import { ReferralBodyTextComponent } from '@views/dashboard/referral-dashboard/components/referral-body-text/referral-body-text.component';

const modules = [CommonModule, SharedComponentsModule, SharedPipesModule, ReferralDashboardRoutingModule];
const components = [
  ReferralDashboardComponent,
  ReferralDashboardPureView,
  ReferralDashboardView,
  ReferralHeaderComponent,
  ReferralBannerComponent,
  ReferralEarningsComponent,
  ReferralAmountLinkComponent,
  ReferralBodyTextComponent,
];

const pipes: [] = [];

@NgModule({
  declarations: [...components, ...pipes],
  imports: [...modules],
  exports: [...components],
})
export class ReferralDashboardModule {}
