// modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedComponentsModule } from '@shared/components/shared-components.module';
import { SharedPipesModule } from '@shared/pipes/shared-pipes.module';
import { CreditUtilizationView } from '@views/dashboard/credit-utilization/credit-utilization/credit-utilization.view';
import { CreditMixRoutingModule } from '@views/dashboard/credit-mix/credit-mix.routing';
import { CreditUtilizationNoCardsTextComponent } from '@views/dashboard/credit-utilization/components/credit-utilization-no-cards-text/credit-utilization-no-cards-text.component';
import { CreditUtilizationColorPercentComponent } from '@views/dashboard/credit-utilization/components/credit-utilization-color-percent/credit-utilization-color-percent.component';
import { CreditUtilizationNoCardsHeaderComponent } from '@views/dashboard/credit-utilization/components/credit-utilization-no-cards-header/credit-utilization-no-cards-header.component';
import { CreditUtilizationAvailableComponent } from '@views/dashboard/credit-utilization/components/credit-utilization-available/credit-utilization-available.component';
import { CreditUtilizationPercentagesComponent } from '@views/dashboard/credit-utilization/components/credit-utilization-percentages/credit-utilization-percentages.component';
import { CreditUtilizationTotalComponent } from '@views/dashboard/credit-utilization/components/credit-utilization-total/credit-utilization-total.component';
import { CreditUtilizationInfoComponent } from '@views/dashboard/credit-utilization/components/credit-utilization-info/credit-utilization-info.component';
import { CreditUtilizationHeaderComponent } from '@views/dashboard/credit-utilization/components/credit-utilization-header/credit-utilization-header.component';
import { CreditUtilizationCardComponent } from '@views/dashboard/credit-utilization/components/credit-utilization-card/credit-utilization-card.component';
import { CreditUtilizationPureView } from '@views/dashboard/credit-utilization/credit-utilization-pure/credit-utilization-pure.view';
import { CreditUtilizationAssessmentComponent } from '@views/dashboard/credit-utilization/components/credit-utilization-assessment/credit-utilization-assessment.component';
import { AccountStatusPipe } from '@shared/pipes/accountStatus/account-status.pipe';

const modules = [CommonModule, SharedComponentsModule, SharedPipesModule, CreditMixRoutingModule];
const components = [
  CreditUtilizationView,
  CreditUtilizationPureView,
  CreditUtilizationCardComponent,
  CreditUtilizationHeaderComponent,
  CreditUtilizationInfoComponent,
  CreditUtilizationTotalComponent,
  CreditUtilizationPercentagesComponent,
  CreditUtilizationAvailableComponent,
  CreditUtilizationNoCardsHeaderComponent,
  CreditUtilizationNoCardsTextComponent,
  CreditUtilizationColorPercentComponent,
  CreditUtilizationAssessmentComponent,
];

const pipes: []= [];

@NgModule({
  declarations: [...components, ...pipes],
  imports: [...modules],
  exports: [...components],
})
export class CreditUtilizationModule {}
