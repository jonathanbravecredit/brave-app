import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { ChartsModule } from "ng2-charts";
import { NgxChartsModule } from "@swimlane/ngx-charts";
import { SharedPipesModule } from "@shared/pipes/shared-pipes.module";

// pipes
import { FilledOnlytextButtonPipe } from "@shared/components/buttons/filled-onlytext-button/filled-onlytext-button.pipe";
import { LinksOnlytextButtonPipe } from "@shared/components/buttons/links-onlytext-button/links-onlytext-button.pipe";
import { OutlineOnlytextButtonPipe } from "@shared/components/buttons/outline-onlytext-button/outline-onlytext-button.pipe";
import { OutlineInputPipe } from "@shared/components/inputs/outline-input/outline-input.pipe";
import { OutlineSelectInputPipe } from "@shared/components/inputs/outline-select-input/outline-select-input.pipe";
import { FilledClosingAlertPipe } from "@shared/components/alerts/filled-closing-alert/filled-closing-alert.pipe";
import { FilledOnlytextBadgeComponent } from "@shared/components/badges/filled-onlytext-badge/filled-onlytext-badge.component";
import { FilledOnlytextBadgePipe } from "@shared/components/badges/filled-onlytext-badge/filled-onlytext-badge.pipe";
import { SnapshotLabelPipe } from "./cards/snapshot-display-card/snapshot-label.pipe";
import { SnapshotStatusPipe } from "./cards/snapshot-display-card/snapshot-status.pipe";
import { BasePaginationPipe } from "./paginations/base-pagination/base-pagination.pipe";
import { CreditReportGraphicPipe } from "@shared/components/graphics/credit-report-graphic/credit-report-graphic.pipe";
import { BaseModalPipe } from "./modals/base-modal/base-modal.pipe";

// componenents
import { FilledOnlytextButtonComponent } from "./buttons/filled-onlytext-button/filled-onlytext-button.component";
import { LinksOnlytextButtonComponent } from "./buttons/links-onlytext-button/links-onlytext-button.component";
import { OutlineOnlytextButtonComponent } from "./buttons/outline-onlytext-button/outline-onlytext-button.component";
import { OutlineInputComponent } from "./inputs/outline-input/outline-input.component";
import { OutlineOnecolumnFormComponent } from "./forms/outline-onecolumn-form/outline-onecolumn-form.component";
import { SimpleSignupFormComponent } from "./forms/simple-signup-form/simple-signup-form.component";
import { SimpleSigninFormComponent } from "./forms/simple-signin-form/simple-signin-form.component";
import { OutlineSelectInputComponent } from "./inputs/outline-select-input/outline-select-input.component";
import { FilledClosingAlertComponent } from "@shared/components/alerts/filled-closing-alert/filled-closing-alert.component";
import { OutlineAddressFormComponent } from "@shared/components/forms/outline-address-form/outline-address-form.component";
import { OutlinePhoneFormComponent } from "@shared/components/forms/outline-phone-form/outline-phone-form.component";
import { OutlineVerificationcodeFormComponent } from "@shared/components/forms/outline-verificationcode-form/outline-verificationcode-form.component";
import { BaseModalSmallComponent } from "@shared/components/modals/base-modal-small/base-modal-small.component";
import { OutlinePrevnextPaginationComponent } from "@shared/components/paginations/outline-prevnext-pagination/outline-prevnext-pagination.component";
import { FilledChecktextProgressbarComponent } from "@shared/components/progressbars/filled-checktext-progressbar/filled-checktext-progressbar.component";
import { FilledChecktextProgressbarPipe } from "@shared/components/progressbars/filled-checktext-progressbar/filled-checktext-progressbar.pipe";
import { KbaquestionsFormComponent } from "./forms/kbaquestions-form/kbaquestions-form.component";
import { OutlineNamedobFormComponent } from "./forms/outline-namedob-form/outline-namedob-form.component";
import { BaseFormComponent } from "./forms/base-form/base-form.component";
import { SelectDobFormComponent } from "./forms/select-dob-form/select-dob-form.component";
import { OutlineNameFormComponent } from "./forms/outline-name-form/outline-name-form.component";
import { ViewdetailButtonComponent } from "./buttons/viewdetails/viewdetail-button/viewdetail-button.component";
import { KbaMultiplechoiceInputComponent } from "./inputs/kba-multiplechoice-input/kba-multiplechoice-input.component";
import { SnapshotDisplayCardComponent } from "./cards/snapshot-display-card/snapshot-display-card.component";
import { CreditBuilderCardComponent } from "./cards/credit-builder-card/credit-builder-card.component";
import { SpinnerComponent } from "./interstitials/spinner/spinner.component";
import { CreditReportCardComponent } from "./cards/credit-report-card/credit-report-card.component";
import { OnboardingDisputeComponent } from "@shared/components/modals/onboarding-dispute/onboarding-dispute.component";
import { CreditReportGraphicComponent } from "./graphics/credit-report-graphic/credit-report-graphic.component";
import { BasePaginationComponent } from "./paginations/base-pagination/base-pagination.component";
import { BaseModalComponent } from "./modals/base-modal/base-modal.component";
import { ConfirmationModalComponent } from "./modals/confirmation-modal/confirmation-modal.component";
import { CreditScoreHistoryNgxChartComponent } from "./charts/credit-score-history-ngx-chart/credit-score-history-ngx-chart.component";
import { BaseExceptionComponent } from "./exceptions/base-exception/base-exception.component";
import { BasicCarouselComponent } from "./carousels/basic-carousel/basic-carousel.component";
import { BasicCarouselLoaderComponent } from "./carousels/basic-carousel-loader/basic-carousel-loader.component";
import { BottomNavbarComponent } from "./navbars/bottom-navbar/bottom-navbar.component";
import { OutlineInputPhoneComponent } from "./inputs/outline-input-phone/outline-input-phone.component";
import { NgxMaskModule } from "ngx-mask";
import { OutlineInputCodeComponent } from "./inputs/outline-input-code/outline-input-code.component";
import { SimpleBackButtonComponent } from "./buttons/simple-back-button/simple-back-button.component";
import { SharedDirectivesModule } from "@shared/directives/shared-directives.module";
import { BaseTableRowComponent } from "./tables/base-table-row/base-table-row.component";
import { SecurityFreezeComponent } from "./messages/security-freeze/security-freeze.component";
import { FilledSpinningButtonComponent } from "./buttons/filled-spinning-button/filled-spinning-button.component";
import { OutlineSsnFullFormComponent } from "./forms/outline-ssn-full-form/outline-ssn-full-form.component";
import { OutlineInputSsnComponent } from "./inputs/outline-input-ssn/outline-input-ssn.component";
import { OutlineSsnLastfourFormComponent } from "./forms/outline-ssn-lastfour-form/outline-ssn-lastfour-form.component";
import { CreditReportGraphicNoGraphComponent } from "./graphics/credit-report-graphic-no-graph/credit-report-graphic-no-graph.component";
import { HorizontalCreditscoreInvisiblebarComponent } from "./graphics/horizontal-creditscore-invisiblebar/horizontal-creditscore-invisiblebar.component";
import { OutlineInputHiddenComponent } from "./inputs/outline-input-hidden/outline-input-hidden.component";
import { PlacesAutocompleteInputComponent } from "./inputs/places-autocomplete-input/places-autocomplete-input.component";
import { AutocompleteAddressFormComponent } from "./forms/autocomplete-address-form/autocomplete-address-form.component";
import { PercentageBadgeComponent } from "./badges/percentage-badge/percentage-badge.component";
import { PercentageGaugeComponent } from "./charts/percentage-gauge/percentage-gauge.component";
import { CreditUtilizationFillBarComponent } from "./charts/credit-utilization-fill-bar/credit-utilization-fill-bar.component";
import { FacebookShareComponent } from "./share-buttons/facebook-share/facebook-share.component";
import { TwitterShareComponent } from "./share-buttons/twitter-share/twitter-share.component";
import { AdCardComponent } from "./cards/ad-card/ad-card.component";
import { NotificationBadgeComponent } from "./badges/notification-badge/notification-badge.component";
import { CircleChecktextProgressbarComponent } from "@shared/components/progressbars/circle-checktext-progressbar/circle-checktext-progressbar";
import { GoalChoiceParentComponent } from "./goals/goal-choice-parent/goal-choice-parent.component";
import { GoalChoiceCardComponent } from "@shared/components/goals/goal-choice-card/goal-choice-card.component";
import { OnboardingDisputeV2Component } from "./modals/onboarding-dispute-v2/onboarding-dispute-v2.component";
import { SimpleChangePasswordFormComponent } from "./forms/simple-change-password-form/simple-change-password-form.component";

const components = [
  BaseFormComponent,
  FilledOnlytextButtonComponent,
  LinksOnlytextButtonComponent,
  OutlineOnlytextButtonComponent,
  OutlineInputComponent,
  OutlineOnecolumnFormComponent,
  SimpleSignupFormComponent,
  SimpleSigninFormComponent,
  OutlineSelectInputComponent,
  FilledClosingAlertComponent,
  FilledOnlytextBadgeComponent,
  OutlineAddressFormComponent,
  OutlinePhoneFormComponent,
  OutlineVerificationcodeFormComponent,
  BaseModalSmallComponent,
  OutlinePrevnextPaginationComponent,
  FilledChecktextProgressbarComponent,
  KbaquestionsFormComponent,
  OutlineNamedobFormComponent,
  SelectDobFormComponent,
  OutlineNameFormComponent,
  ViewdetailButtonComponent,
  SnapshotDisplayCardComponent,
  CreditBuilderCardComponent,
  SnapshotDisplayCardComponent,
  KbaMultiplechoiceInputComponent,
  CreditReportCardComponent,
  SpinnerComponent,
  OnboardingDisputeComponent,
  CreditReportGraphicComponent,
  CreditScoreHistoryNgxChartComponent,
  BasePaginationComponent,
  BaseModalComponent,
  ConfirmationModalComponent,
  BaseExceptionComponent,
  BasicCarouselComponent,
  BasicCarouselLoaderComponent,
  BottomNavbarComponent,
  OutlineInputPhoneComponent,
  OutlineInputCodeComponent,
  BaseTableRowComponent,
  SecurityFreezeComponent,
  SimpleBackButtonComponent,
  FilledSpinningButtonComponent,
  CreditReportGraphicNoGraphComponent,
  OutlineSsnFullFormComponent,
  OutlineInputSsnComponent,
  OutlineSsnLastfourFormComponent,
  HorizontalCreditscoreInvisiblebarComponent,
  OutlineInputHiddenComponent,
  PlacesAutocompleteInputComponent,
  AutocompleteAddressFormComponent,
  PercentageBadgeComponent,
  PercentageBadgeComponent,
  PercentageGaugeComponent,
  CreditUtilizationFillBarComponent,
  NotificationBadgeComponent,
  CircleChecktextProgressbarComponent,
  OnboardingDisputeV2Component,
  SimpleChangePasswordFormComponent,
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
  SnapshotLabelPipe,
  SnapshotStatusPipe,
  CreditReportGraphicPipe,
  BasePaginationPipe,
  BaseModalPipe,
  FacebookShareComponent,
  TwitterShareComponent,
  AdCardComponent,
  GoalChoiceParentComponent,
  GoalChoiceCardComponent,
];

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
  declarations: [...components, ...pipes],
  exports: [...components, ...pipes],
})
export class SharedComponentsModule {}
