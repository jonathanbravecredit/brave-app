import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedPipesModule } from '@shared/pipes/shared-pipes.module';
import { SharedDirectivesModule } from '@shared/directives/shared-directives.module';
import { AccountDetailComponent } from '@shared/components/accounts/account-details/account-detail/account-detail.component';
import { AccountSummaryComponent } from '@shared/components/accounts/account-summary/account-summary/account-summary.component';
import { AccountSummaryPersonalitemComponent } from '@shared/components/accounts/account-summary/account-summary-personalitem/account-summary-personalitem.component';
import { AccountSummaryPublicitemComponent } from '@shared/components/accounts/account-summary/account-summary-publicitem/account-summary-publicitem.component';
import { AccountSummaryTradelineComponent } from '@shared/components/accounts/account-summary/account-summary-tradeline/account-summary-tradeline.component';
import { AccountSummaryWithDetailsComponent } from '@shared/components/accounts/account-summary-with-details/account-summary-with-details/account-summary-with-details.component';
import { AccountSummaryWithDetailsService } from '@shared/components/accounts/account-summary-with-details/account-summary-with-details/account-summary-with-details.service';
import { TradelineToPagesPipe } from '@shared/pipes/tradeline-to-pages/tradeline-to-pages.pipe';
import { SharedComponentsModule } from '@shared/components/shared-components.module';
import { AccountDetailService } from '@shared/components/accounts/account-details/account-detail/account-detail.service';

const components = [
  AccountDetailComponent,
  AccountSummaryComponent,
  AccountSummaryPersonalitemComponent,
  AccountSummaryPublicitemComponent,
  AccountSummaryTradelineComponent,
  AccountSummaryWithDetailsComponent,
];

// component specific pipes only

@NgModule({
  providers: [AccountSummaryWithDetailsService, AccountDetailService],
  imports: [CommonModule, SharedPipesModule, SharedDirectivesModule, SharedComponentsModule],
  declarations: [...components],
  exports: [...components],
})
export class AccountsModule {}
