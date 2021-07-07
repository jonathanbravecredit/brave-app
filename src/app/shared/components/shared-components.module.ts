import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ChartsModule } from 'ng2-charts';

// pipes
import { FilledOnlytextButtonPipe } from '@shared/components/buttons/filled-onlytext-button/filled-onlytext-button.pipe';
import { LinksOnlytextButtonPipe } from '@shared/components/buttons/links-onlytext-button/links-onlytext-button.pipe';
import { OutlineOnlytextButtonPipe } from '@shared/components/buttons/outline-onlytext-button/outline-onlytext-button.pipe';
import { OutlineInputPipe } from '@shared/components/inputs/outline-input/outline-input.pipe';
import { OutlineSelectInputPipe } from '@shared/components/inputs/outline-select-input/outline-select-input.pipe';
import { FilledClosingAlertPipe } from '@shared/components/alerts/filled-closing-alert/filled-closing-alert.pipe';
import { FilledOnlytextBadgeComponent } from '@shared/components/badges/filled-onlytext-badge/filled-onlytext-badge.component';
import { FilledOnlytextBadgePipe } from '@shared/components/badges/filled-onlytext-badge/filled-onlytext-badge.pipe';

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
import { CreditcardCardComponent } from './cards/creditcard-card/creditcard-card.component';
import { ViewdetailButtonComponent } from './buttons/viewdetail-button/viewdetail-button.component';
import { LoanCardComponent } from './cards/loan-card/loan-card.component';
import { AccountStatusPipe } from './cards/creditcard-card/account-status.pipe';
import { KbaMultiplechoiceInputComponent } from './inputs/kba-multiplechoice-input/kba-multiplechoice-input.component';
import { SnapshotDisplayCardComponent } from './cards/snapshot-display-card/snapshot-display-card.component';
import { SnapshotLabelPipe } from './cards/snapshot-display-card/snapshot-label.pipe';
import { SnapshotStatusPipe } from './cards/snapshot-display-card/snapshot-status.pipe';
import { NavigationTabsComponent } from './tabs/navigation-tabs/navigation-tabs.component';
import { CreditBuilderCardComponent } from './cards/credit-builder-card/credit-builder-card.component';
import { NegativeAccountCardComponent } from './cards/negative-account-card/negative-account-card.component';
import { SpinnerComponent } from './interstitials/spinner/spinner.component';
import { CreditReportCardComponent } from './cards/credit-report-card/credit-report-card.component';
import { CreditReportGraphicPipe } from '@shared/components/graphics/credit-report-graphic/credit-report-graphic.pipe';
import { OnboardingDisputeComponent } from '@shared/components/modals/onboarding-dispute/onboarding-dispute.component';
import { CreditReportGraphicComponent } from './graphics/credit-report-graphic/credit-report-graphic.component';
import { TradelineMetricsComponent } from './tradelines/tradeline-metrics/tradeline-metrics.component';
import { TradelineSummaryComponent } from './tradelines/tradeline-summary/tradeline-summary.component';
import { TradelineDetailsComponent } from './tradelines/tradeline-details/tradeline-details.component';
import { TradelinePaymentsComponent } from './tradelines/tradeline-payments/tradeline-payments.component';
import { TradelinePaymentIconComponent } from './tradelines/tradeline-payment-icon/tradeline-payment-icon.component';
import { TradelineDetailRowComponent } from './tradelines/tradeline-detail-row/tradeline-detail-row.component';
import { TradelinePaymentHistoryComponent } from './tradelines/tradeline-payment-history/tradeline-payment-history.component';
import { TradelineRemarksComponent } from './tradelines/tradeline-remarks/tradeline-remarks.component';
import { CreditScoreGraphicTabsComponent } from './tabs/credit-score-graphic-tabs/credit-score-graphic-tabs.component';
import { CreditScoreHistoryChartComponent } from './charts/credit-score-history-chart/credit-score-history-chart.component';
import { CreditScoreHistoryNgxChartComponent } from './charts/credit-score-history-ngx-chart/credit-score-history-ngx-chart.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { CreditReportGraphicWithGraphComponent } from './graphics/credit-report-graphic-with-graph/credit-report-graphic-with-graph.component';

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
  CreditcardCardComponent,
  ViewdetailButtonComponent,
  LoanCardComponent,
  SnapshotDisplayCardComponent,
  CreditBuilderCardComponent,
  SnapshotDisplayCardComponent,
  NegativeAccountCardComponent,
  KbaMultiplechoiceInputComponent,
  CreditReportCardComponent,
  SpinnerComponent,
  OnboardingDisputeComponent,
  CreditReportGraphicComponent,
  TradelineMetricsComponent,
  TradelineSummaryComponent,
  TradelineDetailsComponent,
  TradelineDetailRowComponent,
  TradelinePaymentsComponent,
  TradelinePaymentIconComponent,
  TradelinePaymentHistoryComponent,
  TradelineRemarksComponent,
  CreditScoreGraphicTabsComponent,
  CreditScoreHistoryChartComponent,
  CreditScoreHistoryNgxChartComponent,
  CreditReportGraphicWithGraphComponent,
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
];

const directives = [HiddenAsteriskInputDirective, OutlineTooltipDirective];

@NgModule({
  declarations: [...components, ...pipes, ...directives],
  imports: [
    CommonModule,
    NgxChartsModule,
    BrowserAnimationsModule,
    ChartsModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule,
  ],
  exports: [...components, ...pipes, ...directives],
})
export class SharedComponentsModule {}
