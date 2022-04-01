// modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedComponentsModule } from '@shared/components/shared-components.module';
import { SharedPipesModule } from '@shared/pipes/shared-pipes.module';
import { CreditMixRoutingModule } from '@views/dashboard/credit-mix/credit-mix.routing';
import { CreditMixComponent } from '@views/dashboard/credit-mix/credit-mix.component';
import { CreditMixHeaderComponent } from '@views/dashboard/credit-mix/components/credit-mix-header/credit-mix-header.component';
import { CreditMixView } from '@views/dashboard/credit-mix/credit-mix/credit-mix.view';
import { CreditMixPureView } from '@views/dashboard/credit-mix/credit-mix-pure/credit-mix-pure.view';
import { CreditMixRatingComponent } from '@views/dashboard/credit-mix/components/credit-mix-rating/credit-mix-rating.component';
import { CreditMixBadgesComponent } from '@views/dashboard/credit-mix/components/credit-mix-badges/credit-mix-badges.component';
import { CreditMixIconsComponent } from '@views/dashboard/credit-mix/components/credit-mix-icons/credit-mix-icons.component';
import { CreditMixSubHeadersComponent } from '@views/dashboard/credit-mix/components/credit-mix-sub-headers/credit-mix-sub-headers.component';
import { CreditMixCardSectionComponent } from '@views/dashboard/credit-mix/components/credit-mix-card-section/credit-mix-card-section.component';
import { CreditMixRecommendationComponent } from '@views/dashboard/credit-mix/components/credit-mix-recommendation/credit-mix-recommendation.component';
import { CreditMixFilterPipePipe } from '@views/dashboard/credit-mix/credit-mix-filter-pipe/credit-mix-filter-pipe.pipe';
import { CreditMixCardComponent } from '@views/dashboard/credit-mix/components/credit-mix-card/credit-mix-card.component';
import { SharedDirectivesModule } from '@shared/directives/shared-directives.module';
import { CreditUtilizationModule } from '@views/dashboard/credit-utilization/credit-utilization.module';

const modules = [
  CommonModule,
  SharedComponentsModule,
  SharedPipesModule,
  CreditMixRoutingModule,
  SharedDirectivesModule,
  CreditUtilizationModule,
];
const components = [
  CreditMixComponent,
  CreditMixHeaderComponent,
  CreditMixView,
  CreditMixPureView,
  CreditMixRatingComponent,
  CreditMixBadgesComponent,
  CreditMixIconsComponent,
  CreditMixSubHeadersComponent,
  CreditMixCardSectionComponent,
  CreditMixRecommendationComponent,
  CreditMixFilterPipePipe,
  CreditMixCardComponent,
];

const pipes: [] = [];

@NgModule({
  declarations: [...components, ...pipes],
  imports: [...modules],
  exports: [...components],
})
export class CreditMixModule {}
