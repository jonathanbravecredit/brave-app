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
  DashboardReportSnapshotNegative = 'dashboard_report_snapshot_negative',
  DashboardReportSnapshotForbearance = 'dashboard_report_snapshot_forbearance',
  DashboardReportSnapshotDatabreach = 'dashboard_report_snapshot_databreach',
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
  NavigationFraudToCreditReport = 'navigation_fraudtocreditreport',
}

export enum AnalyticErrorEvents {
  OnboardingInformationIssue = 'onboarding_informationissue',
  ApiTechnicalIssue = 'api_technicalissue',
  Suspension30DayLockout = 'suspension_30daylockout',
}
