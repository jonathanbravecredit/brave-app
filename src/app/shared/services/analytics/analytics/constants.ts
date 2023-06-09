export enum AnalyticPageViewEvents {
  AuthSignup = 'auth_signup',
  AuthThankyou = 'auth_thankyou',
  OnboardingCongratulations = 'onboarding_congratulations',
  OnboardingName = 'onboarding_name',
  OnboardingAddress = 'onboarding_address',
  OnboardingIdentity = 'onboarding_identity',
  OnboardingIdentityFull = 'onboarding_identityfull',
  OnboardingPhone = 'onboarding_phone',
  OnboardingCode = 'onboarding_code',
  OnboardingKba = 'onboarding_kba',
  DashboardReport = 'dashboard_report',
  DashboardInit = 'dashboard_init',
  DashboardReportSnapshotNegative = 'dashboard_report_snapshot_negative',
  DashboardReportSnapshotForbearance = 'dashboard_report_snapshot_forbearance',
  DashboardReportSnapshotDatabreach = 'dashboard_report_snapshot_databreach',
  DashboardReportSnapshotCreditUtilization = 'dashboard_report_snapshot_credit_utilization',
  DashboardReportSnapshotCreditMix = 'dashboard_report_snapshot_credit_mix',
  DashboardDisputeFinding = 'dashboard_dispute_findings',
  ProgressTracker = 'progress_tracker',
  OnboardingGoalChoice = 'onboarding_goal_choice',
}

export enum AnalyticClickEvents {
  OnboardingName = 'onboarding_name',
  OnboardingAddress = 'onboarding_address',
  OnboardingIdentity = 'onboarding_identity',
  OnboardingIdentityFull = 'onboarding_identityfull',
  OnboardingPhone = 'onboarding_phone',
  OnboardingCode = 'onboarding_code',
  OnboardingKba = 'onboarding_kba',
  SnapshotBreachCard = 'snapshot_breachcard',
  SnapshotFraudModule = 'snapshot_fraud',
  SnapshotForbearanceModule = 'snapshot_forbearance',
  SnapshotNegativeItemsModule = 'snapshot_negativeitems',
  SnapshotCreditUtilization = 'snapshot_credit_utilization',
  SnapshotCreditMix = 'snapshot_credit_mix',
  SnapshotBreachCardReview = 'snapshot_breachcard_review',
  SnapshotBreachCardDelete = 'snapshot_breachcard_delete',
  NavigationFraudToCreditReport = 'navigation_fraudtocreditreport',
  DashboardProduct = 'dashboard_product',
  CreditMixProductRecommendation = 'creditmix_product_recommendation',
  DisputeEnrollment = 'dispute_enrollment',
  DisputeSucessfullySubmited = 'dispute_sucessfully_submited',
  DisputeInvestigationResults = 'dispute_investigation_results',
  UserLogIn = 'user_log_in',
  UnknownClickEvent = 'unknown_click_event',
}

export enum AnalyticErrorEvents {
  OnboardingInformationIssue = 'onboarding_informationissue',
  ApiTechnicalIssue = 'api_technicalissue',
  Suspension30DayLockout = 'suspension_30daylockout',
}
