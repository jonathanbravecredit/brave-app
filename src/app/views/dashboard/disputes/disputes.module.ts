// modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedComponentsModule } from '@shared/components/shared-components.module';
import { SharedPipesModule } from '@shared/pipes/shared-pipes.module';
import { TradelinesModule } from '@views/dashboard/reports/credit-report/tradelines/tradelines.module';
import { PublicitemsModule } from '@views/dashboard/reports/credit-report/publicitems/publicitems.module';
import { PersonalitemsModule } from '@views/dashboard/reports/credit-report/personalitems/personalitems.module';
import { NgxMaskModule } from 'ngx-mask';
import { DisputesRoutingModule } from '@views/dashboard/disputes/disputes.routing';

import {
  DisputeRegularCardComponent,
  DisputeHistoryCardComponent,
  DisputeCurrentCardComponent,
  DisputeCardStatusPipe,
} from '@views/dashboard/disputes/components/cards';
import { DisputeHeaderCardComponent } from '@views/dashboard/disputes/components/cards/dispute-header-card/dispute-header-card.component';
import { DisputesListComponent } from '@views/dashboard/disputes/components/disputes-list/disputes-list.component';
import { DisputeFindingsClosingParagraphComponent } from '@views/dashboard/disputes/components/findings/dispute-findings-closing-paragraph/dispute-findings-closing-paragraph.component';
import { DisputeFindingsContactInfoComponent } from '@views/dashboard/disputes/components/findings/dispute-findings-contact-info/dispute-findings-contact-info.component';
import { DisputeFindingsDefinitionsHeaderComponent } from '@views/dashboard/disputes/components/findings/dispute-findings-definitions-header/dispute-findings-definitions-header.component';
import { DisputeFindingsDefinitionsComponent } from '@views/dashboard/disputes/components/findings/dispute-findings-definitions/dispute-findings-definitions.component';
import { DisputeFindingsHeaderComponent } from '@views/dashboard/disputes/components/findings/dispute-findings-header/dispute-findings-header.component';
import { DisputeFindingsHowToReadComponent } from '@views/dashboard/disputes/components/findings/dispute-findings-how-to-read/dispute-findings-how-to-read.component';
import { DisputeFindingsNoteCreditReportComponent } from '@views/dashboard/disputes/components/findings/dispute-findings-note-credit-report/dispute-findings-note-credit-report.component';
import { DisputeFindingsRatingKeyComponent } from '@views/dashboard/disputes/components/findings/dispute-findings-rating-key/dispute-findings-rating-key.component';
import { DisputeFindingsResultsDetailsComponent } from '@views/dashboard/disputes/components/findings/dispute-findings-results-details/dispute-findings-results-details.component';
import { DisputeFindingsResultsComponent } from '@views/dashboard/disputes/components/findings/dispute-findings-results/dispute-findings-results.component';
import { DisputesErrorPureComponent } from '@views/dashboard/disputes/disputes-error/disputes-error-pure/disputes-error-pure.component';
import { DisputesErrorComponent } from '@views/dashboard/disputes/disputes-error/disputes-error/disputes-error.component';
import { DisputeFindingsPureView } from '@views/dashboard/disputes/disputes-findings/dispute-findings-pure/dispute-findings-pure.view';
import { DisputeFindingsView } from '@views/dashboard/disputes/disputes-findings/dispute-findings/dispute-findings.view';
import {
  DisputesOverviewInitialPureView,
  DisputesOverviewInitialView,
} from '@views/dashboard/disputes/disputes-overview';
import { DisputesPersonalPureView } from '@views/dashboard/disputes/disputes-personal/disputes-personal-pure/disputes-personal-pure.view';
import { DisputesPersonalView } from '@views/dashboard/disputes/disputes-personal/disputes-personal/disputes-personal.view';
import { DisputesPublicPureView } from '@views/dashboard/disputes/disputes-public/disputes-public-pure/disputes-public-pure.view';
import { DisputesPublicView } from '@views/dashboard/disputes/disputes-public/disputes-public/disputes-public.view';
import { DisputesReconfirmPureView } from '@views/dashboard/disputes/disputes-reconfirm/disputes-reconfirm-pure/disputes-reconfirm-pure.view';
import { DisputesReconfirmView } from '@views/dashboard/disputes/disputes-reconfirm/disputes-reconfirm/disputes-reconfirm.view';
import { DisputesSuccessPureView } from '@views/dashboard/disputes/disputes-success/disputes-success-pure/disputes-success-pure.view';
import { DisputesSuccessView } from '@views/dashboard/disputes/disputes-success/disputes-success/disputes-success.view';
import { DisputesTradelinePureView } from '@views/dashboard/disputes/disputes-tradeline/disputes-tradeline-pure/disputes-tradeline-pure.view';
import { DisputesTradelineView } from '@views/dashboard/disputes/disputes-tradeline/disputes-tradeline/disputes-tradeline.view';
import { ReasonCardComponent } from '@views/dashboard/disputes/components/cards/reason-card/reason-card.component';
import { DisputesComponent } from '@views/dashboard/disputes/disputes.component';
import { DisputeConditionalTermsComponent } from './components/dispute-conditional-terms/dispute-conditional-terms.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DisputeBaseComponent } from './components/dispute-base/dispute-base.component';
import { DisputeReasonPageComponent } from './components/dispute-reason-page/dispute-reason-page.component';
import { DisputeFindingsYourRightsComponent } from './components/findings/dispute-findings-your-rights/dispute-findings-your-rights.component';
import { DisputeTradelineCardComponent } from './components/cards/dispute-tradeline-card/dispute-tradeline-card.component';
import { DisputePersonalCardComponent } from './components/cards/dispute-personal-card/dispute-personal-card.component';
import { DisputePublicCardComponent } from './components/cards/dispute-public-card/dispute-public-card.component';
import { DisputeOverviewCardComponent } from './components/cards/dispute-overview-card/dispute-overview-card.component';
import { DisputesHistoricalView } from './disputes-historical/disputes-historical/disputes-historical.view';
import { DisputesHistoricalPureView } from './disputes-historical/disputes-historical-pure/disputes-historical-pure.view';
import { DisputeFindingsTradelineDetailsComponent } from './components/findings/dispute-findings-tradeline-details/dispute-findings-tradeline-details.component';
import { SharedDirectivesModule } from '@shared/directives/shared-directives.module';
import { DisputesEmptyImageComponent } from './disputes-empty/components/disputes-empty-image/disputes-empty-image.component';
import { DisputesEmptyButtonComponent } from './disputes-empty/components/disputes-empty-button/disputes-empty-button.component';
import { DisputesEmptyErrorTextComponent } from './disputes-empty/components/disputes-empty-error-text/disputes-empty-error-text.component';
import { DisputesEmptySubTitleComponent } from './disputes-empty/components/disputes-empty-sub-title/disputes-empty-sub-title.component';
import { DisputesEmptyPureComponent } from '@views/dashboard/disputes/disputes-empty/disputes-empty-pure/disputes-empty-pure.component';
import { DisputesEmptyTitleComponent } from '@views/dashboard/disputes/disputes-empty/components/disputes-empty-title/disputes-empty-title.component';
import { AccountsModule } from '@shared/components/accounts/accounts.module';

const modules = [
  CommonModule,
  SharedComponentsModule,
  SharedPipesModule,
  SharedDirectivesModule,
  FormsModule,
  ReactiveFormsModule,
  NgxMaskModule,
  TradelinesModule,
  PublicitemsModule,
  PersonalitemsModule,
  DisputesRoutingModule,
  AccountsModule,
];

const components = [
  DisputesComponent,
  DisputeBaseComponent,
  DisputesPersonalView,
  DisputesPersonalPureView,
  DisputesPublicPureView,
  DisputesPublicView,
  DisputesTradelinePureView,
  DisputesTradelineView,
  DisputesErrorComponent,
  DisputesErrorPureComponent,
  DisputeFindingsView,
  DisputeFindingsPureView,
  DisputesOverviewInitialPureView,
  DisputesOverviewInitialView,
  DisputesListComponent,
  ReasonCardComponent,
  DisputeConditionalTermsComponent,
  DisputeFindingsHeaderComponent,
  DisputeFindingsResultsComponent,
  DisputeFindingsHowToReadComponent,
  DisputeFindingsDefinitionsHeaderComponent,
  DisputeFindingsNoteCreditReportComponent,
  DisputeFindingsDefinitionsComponent,
  DisputeFindingsRatingKeyComponent,
  DisputeFindingsResultsDetailsComponent,
  DisputeFindingsClosingParagraphComponent,
  DisputeFindingsContactInfoComponent,
  DisputeFindingsYourRightsComponent,
  DisputeHeaderCardComponent,
  DisputeRegularCardComponent,
  DisputeHistoryCardComponent,
  DisputeCurrentCardComponent,
  DisputeTradelineCardComponent,
  DisputePersonalCardComponent,
  DisputePublicCardComponent,
  DisputesReconfirmView,
  DisputesReconfirmPureView,
  DisputesSuccessView,
  DisputesSuccessPureView,
  DisputeOverviewCardComponent,
  DisputesHistoricalView,
  DisputesHistoricalPureView,
  DisputeReasonPageComponent,
  DisputeFindingsTradelineDetailsComponent,
  DisputesEmptyPureComponent,
  DisputesEmptyTitleComponent,
  DisputesEmptyImageComponent,
  DisputesEmptyButtonComponent,
  DisputesEmptyErrorTextComponent,
  DisputesEmptySubTitleComponent,
];

const pipes = [DisputeCardStatusPipe];

@NgModule({
  declarations: [...components, pipes],
  imports: [...modules],
  exports: [...components, pipes],
})
export class DisputesModule {}
