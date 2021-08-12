import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ChartsModule } from 'ng2-charts';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { SharedPipesModule } from '@shared/pipes/shared-pipes.module';

// pipes
import { FilledOnlytextButtonPipe } from '@shared/components/buttons/filled-onlytext-button/filled-onlytext-button.pipe';
import { LinksOnlytextButtonPipe } from '@shared/components/buttons/links-onlytext-button/links-onlytext-button.pipe';
import { OutlineOnlytextButtonPipe } from '@shared/components/buttons/outline-onlytext-button/outline-onlytext-button.pipe';
import { OutlineInputPipe } from '@shared/components/inputs/outline-input/outline-input.pipe';
import { OutlineSelectInputPipe } from '@shared/components/inputs/outline-select-input/outline-select-input.pipe';
import { FilledClosingAlertPipe } from '@shared/components/alerts/filled-closing-alert/filled-closing-alert.pipe';
import { FilledOnlytextBadgeComponent } from '@shared/components/badges/filled-onlytext-badge/filled-onlytext-badge.component';
import { FilledOnlytextBadgePipe } from '@shared/components/badges/filled-onlytext-badge/filled-onlytext-badge.pipe';
import { AccountStatusPipe } from './cards/finantial-mechanism-card/account-status.pipe';
import { SnapshotLabelPipe } from './cards/snapshot-display-card/snapshot-label.pipe';
import { SnapshotStatusPipe } from './cards/snapshot-display-card/snapshot-status.pipe';
import { BasePaginationPipe } from './paginations/base-pagination/base-pagination.pipe';
import { CreditReportGraphicPipe } from '@shared/components/graphics/credit-report-graphic/credit-report-graphic.pipe';
import { BaseModalPipe } from './modals/base-modal/base-modal.pipe';

// componenents
import { SignUpComponent } from '@shared/components/auth/sign-up/sign-up.component';
import { SignInComponent } from '@shared/components/auth/sign-in/sign-in.component';
import { FilledOnlytextButtonComponent } from './buttons/filled-onlytext-button/filled-onlytext-button.component';
import { LinksOnlytextButtonComponent } from './buttons/links-onlytext-button/links-onlytext-button.component';
import { OutlineOnlytextButtonComponent } from './buttons/outline-onlytext-button/outline-onlytext-button.component';
import { OutlineInputComponent } from './inputs/outline-input/outline-input.component';
import { OutlineOnecolumnFormComponent } from './forms/outline-onecolumn-form/outline-onecolumn-form.component';
import { GoogleIconsigninButtonComponent } from './buttons/google-iconsignin-button/google-iconsignin-button.component';
import { FacebookOnlytextsigninButtonComponent } from './buttons/facebook-onlytextsignin-button/facebook-onlytextsignin-button.component';
import { SimpleSignupFormComponent } from './forms/simple-signup-form/simple-signup-form.component';
import { SimpleSigninFormComponent } from './forms/simple-signin-form/simple-signin-form.component';
import { OutlineSelectInputComponent } from './inputs/outline-select-input/outline-select-input.component';
import { FilledClosingAlertComponent } from '@shared/components/alerts/filled-closing-alert/filled-closing-alert.component';
import { IndexDropdownComponent } from '@shared/components/dropdowns/popdowns/index-dropdown/index-dropdown.component';
import { MenuDropdownComponent } from '@shared/components/dropdowns/popdowns/menu-dropdown/menu-dropdown.component';
import { NotificationDropdownComponent } from '@shared/components/dropdowns/popdowns/notification-dropdown/notification-dropdown.component';
import { PagesDropdownComponent } from '@shared/components/dropdowns/popdowns/pages-dropdown/pages-dropdown.component';
import { TableDropdownComponent } from '@shared/components/dropdowns/popdowns/table-dropdown/table-dropdown.component';
import { UserDropdownComponent } from '@shared/components/dropdowns/popdowns/user-dropdown/user-dropdown.component';
import { OutlineOnlytextSelectComponent } from '@shared/components/dropdowns/selects/outline-onlytext-select/outline-onlytext-select.component';
import { FooterComponent } from '@shared/components/footers/footer/footer.component';
import { FooterAdminComponent } from '@shared/components/footers/footer-admin/footer-admin.component';
import { FooterSmallComponent } from '@shared/components/footers/footer-small/footer-small.component';
import { OutlineAddressFormComponent } from '@shared/components/forms/outline-address-form/outline-address-form.component';
import { OutlinePhoneFormComponent } from '@shared/components/forms/outline-phone-form/outline-phone-form.component';
import { OutlineVerificationcodeFormComponent } from '@shared/components/forms/outline-verificationcode-form/outline-verificationcode-form.component';
import { SsnFullFormComponent } from '@shared/components/forms/ssn-full-form/ssn-full-form.component';
import { SsnLastfourFormComponent } from '@shared/components/forms/ssn-lastfour-form/ssn-lastfour-form.component';
import { HiddenAsteriskInputComponent } from '@shared/components/inputs/hidden-asterisk-input/hidden-asterisk-input.component';
import { HiddenAsteriskInputDirective } from '@shared/components/inputs/hidden-asterisk-input/hidden-asterisk-input.directive';
import { BaseModalRegularComponent } from '@shared/components/modals/base-modal-regular/base-modal-regular.component';
import { BaseModalSmallComponent } from '@shared/components/modals/base-modal-small/base-modal-small.component';
import { AdminNavbarComponent } from '@shared/components/navbars/admin-navbar/admin-navbar.component';
import { AuthNavbarComponent } from '@shared/components/navbars/auth-navbar/auth-navbar.component';
import { DashboardNavbarComponent } from '@shared/components/navbars/dashboard-navbar/dashboard-navbar.component';
import { IndexNavbarComponent } from '@shared/components/navbars/index-navbar/index-navbar.component';
import { OutlinePrevnextPaginationComponent } from '@shared/components/paginations/outline-prevnext-pagination/outline-prevnext-pagination.component';
import { FilledChecktextProgressbarComponent } from '@shared/components/progressbars/filled-checktext-progressbar/filled-checktext-progressbar.component';
import { FilledChecktextProgressbarPipe } from '@shared/components/progressbars/filled-checktext-progressbar/filled-checktext-progressbar.pipe';
import { SidebarComponent } from '@shared/components/sidebar/sidebar.component';
import { FilledOnlytextTabsComponent } from '@shared/components/tabs/filled-onlytext-tabs/filled-onlytext-tabs.component';
import { OutlineTooltipComponent } from '@shared/components/tooltips/outline-tooltip/outline-tooltip.component';
import { OutlineTooltipDirective } from '@shared/components/tooltips/outline-tooltip/outline-tooltip.directive';
import { KbaquestionsFormComponent } from './forms/kbaquestions-form/kbaquestions-form.component';
import { OutlineNamedobFormComponent } from './forms/outline-namedob-form/outline-namedob-form.component';
import { BaseFormComponent } from './forms/base-form/base-form.component';
import { SelectDobFormComponent } from './forms/select-dob-form/select-dob-form.component';
import { OutlineNameFormComponent } from './forms/outline-name-form/outline-name-form.component';
import { ViewdetailButtonComponent } from './buttons/viewdetail-button/viewdetail-button.component';
import { KbaMultiplechoiceInputComponent } from './inputs/kba-multiplechoice-input/kba-multiplechoice-input.component';
import { SnapshotDisplayCardComponent } from './cards/snapshot-display-card/snapshot-display-card.component';
import { NavigationTabsComponent } from './tabs/navigation-tabs/navigation-tabs.component';
import { CreditBuilderCardComponent } from './cards/credit-builder-card/credit-builder-card.component';
import { SpinnerComponent } from './interstitials/spinner/spinner.component';
import { CreditReportCardComponent } from './cards/credit-report-card/credit-report-card.component';
import { OnboardingDisputeComponent } from '@shared/components/modals/onboarding-dispute/onboarding-dispute.component';
import { CreditReportGraphicComponent } from './graphics/credit-report-graphic/credit-report-graphic.component';
import { BasePaginationComponent } from './paginations/base-pagination/base-pagination.component';
import { ReasonCardComponent } from './cards/reason-card/reason-card.component';
import { BaseModalComponent } from './modals/base-modal/base-modal.component';
import { ConfirmationModalComponent } from './modals/confirmation-modal/confirmation-modal.component';
import { ConditionalTermComponent } from './terms/conditional-term/conditional-term.component';
import { CreditScoreGraphicTabsComponent } from './tabs/credit-score-graphic-tabs/credit-score-graphic-tabs.component';
import { CreditScoreHistoryChartComponent } from './charts/credit-score-history-chart/credit-score-history-chart.component';
import { CreditScoreHistoryNgxChartComponent } from './charts/credit-score-history-ngx-chart/credit-score-history-ngx-chart.component';
import { CreditReportGraphicWithGraphComponent } from './graphics/credit-report-graphic-with-graph/credit-report-graphic-with-graph.component';
import { DisputeHeaderCardComponent } from './cards/dispute-header-card/dispute-header-card.component';
import { DisputesPersonalComponent } from './disputes/disputes-personal/disputes-personal.component';
import { DisputesTradelineComponent } from './disputes/disputes-tradeline/disputes-tradeline.component';
import { DisputesPublicComponent } from './disputes/disputes-public/disputes-public.component';
import { DisputesSuccessComponent } from './disputes/disputes-success/disputes-success.component';
import { BaseExceptionComponent } from './exceptions/base-exception/base-exception.component';
import { DisputesDetailComponent } from './disputes/disputes-detail/disputes-detail.component';
import { BasicCarouselComponent } from './carousels/basic-carousel/basic-carousel.component';
import { BasicCarouselLoaderComponent } from './carousels/basic-carousel-loader/basic-carousel-loader.component';
import { DisputesListComponent } from './disputes/disputes-list/disputes-list.component';
import { DisputeFindingsHeaderComponent } from './disputes/findings/dispute-findings-header/dispute-findings-header.component';
import { DisputeFindingsResultsComponent } from './disputes/findings/dispute-findings-results/dispute-findings-results.component';
import { DisputeFindingsHowToReadComponent } from './disputes/findings/dispute-findings-how-to-read/dispute-findings-how-to-read.component';
import { DisputeFindingsDefinitionsHeaderComponent } from './disputes/findings/dispute-findings-definitions-header/dispute-findings-definitions-header.component';
import { DisputeFindingsNoteCreditReportComponent } from './disputes/findings/dispute-findings-note-credit-report/dispute-findings-note-credit-report.component';
import { DisputeFindingsDefinitionsComponent } from './disputes/findings/dispute-findings-definitions/dispute-findings-definitions.component';
import { DisputeFindingsRatingKeyComponent } from './disputes/findings/dispute-findings-rating-key/dispute-findings-rating-key.component';
import { DisputeFindingsResultsDetailsComponent } from './disputes/findings/dispute-findings-results-details/dispute-findings-results-details.component';
import { DisputeFindingsClosingParagraphComponent } from './disputes/findings/dispute-findings-closing-paragraph/dispute-findings-closing-paragraph.component';
import { DisputeFindingsContactInfoComponent } from './disputes/findings/dispute-findings-contact-info/dispute-findings-contact-info.component';
import {
  DisputeCardStatusPipe,
  DisputeCurrentCardComponent,
  DisputeHistoryCardComponent,
  DisputeRegularCardComponent,
} from './cards/dispute-cards';
import { CollectionCreditMixAccountsComponent } from './collections/collection-credit-mix-accounts/collection-credit-mix-accounts.component';
import { FinantialMechanismCardComponent } from './cards/finantial-mechanism-card/finantial-mechanism-card.component';
import { BottomNavbarComponent } from './navbars/bottom-navbar/bottom-navbar.component';
import { OutlineInputPhoneComponent } from './inputs/outline-input-phone/outline-input-phone.component';
import { NgxMaskModule } from 'ngx-mask';
import { OutlineInputCodeComponent } from './inputs/outline-input-code/outline-input-code.component';
import { SimpleBackButtonComponent } from './buttons/simple-back-button/simple-back-button.component';
import { SharedDirectivesModule } from '@shared/directives/shared-directives.module';
import { BaseTableRowComponent } from './tables/base-table-row/base-table-row.component';
import { SecurityFreezeComponent } from './messages/security-freeze/security-freeze.component';
import { DisputeHeaderComponent } from './disputes/dispute-header/dispute-header.component';
import { DisputeHeaderTradelineComponent } from './disputes/dispute-header-tradeline/dispute-header-tradeline.component';
import { DisputeHeaderPublicitemComponent } from './disputes/dispute-header-publicitem/dispute-header-publicitem.component';
import { DisputeHeaderPersonalitemComponent } from './disputes/dispute-header-personalitem/dispute-header-personalitem.component';
import { SimpleBannerComponent } from './banners/simple-banner/simple-banner.component';
import { SimpleChangePasswordFormComponent } from './forms/simple-change-password-form/simple-change-password-form.component';
import { SimpleDeactiveFormComponent } from './forms/simple-deactive-form/simple-deactive-form.component';
import { FilledSpinningButtonComponent } from './buttons/filled-spinning-button/filled-spinning-button.component';

const components = [
  BaseFormComponent,
  SignInComponent,
  SignUpComponent,
  FilledOnlytextButtonComponent,
  LinksOnlytextButtonComponent,
  OutlineOnlytextButtonComponent,
  OutlineInputComponent,
  OutlineOnecolumnFormComponent,
  GoogleIconsigninButtonComponent,
  FacebookOnlytextsigninButtonComponent,
  SimpleSignupFormComponent,
  SimpleSigninFormComponent,
  OutlineSelectInputComponent,
  FilledClosingAlertComponent,
  FilledOnlytextBadgeComponent,
  IndexDropdownComponent,
  MenuDropdownComponent,
  NotificationDropdownComponent,
  PagesDropdownComponent,
  TableDropdownComponent,
  UserDropdownComponent,
  OutlineOnlytextSelectComponent,
  FooterComponent,
  FooterAdminComponent,
  FooterSmallComponent,
  HiddenAsteriskInputComponent,
  OutlineAddressFormComponent,
  OutlinePhoneFormComponent,
  OutlineVerificationcodeFormComponent,
  SsnFullFormComponent,
  SsnLastfourFormComponent,
  HiddenAsteriskInputComponent,
  BaseModalRegularComponent,
  BaseModalSmallComponent,
  AdminNavbarComponent,
  AuthNavbarComponent,
  DashboardNavbarComponent,
  IndexNavbarComponent,
  OutlinePrevnextPaginationComponent,
  FilledChecktextProgressbarComponent,
  SidebarComponent,
  FilledOnlytextTabsComponent,
  NavigationTabsComponent,
  OutlineTooltipComponent,
  KbaquestionsFormComponent,
  OutlineNamedobFormComponent,
  SelectDobFormComponent,
  OutlineNameFormComponent,
  FinantialMechanismCardComponent,
  ViewdetailButtonComponent,
  SnapshotDisplayCardComponent,
  CreditBuilderCardComponent,
  SnapshotDisplayCardComponent,
  KbaMultiplechoiceInputComponent,
  CreditReportCardComponent,
  SpinnerComponent,
  OnboardingDisputeComponent,
  CreditReportGraphicComponent,
  CreditScoreGraphicTabsComponent,
  CreditScoreHistoryChartComponent,
  CreditScoreHistoryNgxChartComponent,
  CreditReportGraphicWithGraphComponent,
  BasePaginationComponent,
  ReasonCardComponent,
  BaseModalComponent,
  ConfirmationModalComponent,
  ConditionalTermComponent,
  DisputeHeaderCardComponent,
  DisputesPersonalComponent,
  DisputesTradelineComponent,
  DisputesPublicComponent,
  DisputesSuccessComponent,
  BaseExceptionComponent,
  DisputesDetailComponent,
  BasicCarouselComponent,
  BasicCarouselLoaderComponent,
  DisputeRegularCardComponent,
  DisputeHistoryCardComponent,
  DisputeCurrentCardComponent,
  DisputesListComponent,
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
  CollectionCreditMixAccountsComponent,
  BottomNavbarComponent,
  OutlineInputPhoneComponent,
  OutlineInputCodeComponent,
  BaseTableRowComponent,
  SecurityFreezeComponent,
  DisputeHeaderComponent,
  DisputeHeaderTradelineComponent,
  SimpleBackButtonComponent,
  DisputeHeaderPublicitemComponent,
  DisputeHeaderPersonalitemComponent,
  SimpleBannerComponent,
  SimpleDeactiveFormComponent,
  SimpleChangePasswordFormComponent,
  FilledSpinningButtonComponent,
];

// component specific pipes only
const pipes = [
  FilledOnlytextButtonPipe,
  LinksOnlytextButtonPipe,
  OutlineOnlytextButtonPipe,
  OutlineInputPipe,
  OutlineSelectInputPipe,
  FilledClosingAlertPipe,
  FilledOnlytextBadgePipe,
  FilledChecktextProgressbarPipe,
  AccountStatusPipe,
  SnapshotLabelPipe,
  SnapshotStatusPipe,
  CreditReportGraphicPipe,
  BasePaginationPipe,
  BaseModalPipe,
  DisputeCardStatusPipe,
];

const directives = [HiddenAsteriskInputDirective, OutlineTooltipDirective];

@NgModule({
  imports: [
    CommonModule,
    SharedPipesModule,
    SharedDirectivesModule,
    NgxChartsModule,
    ChartsModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule,
    NgxMaskModule,
  ],
  declarations: [...components, ...pipes, ...directives],
  exports: [...components, ...pipes, ...directives],
})
export class SharedComponentsModule {}
