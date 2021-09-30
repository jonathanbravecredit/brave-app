export enum GooglePageViewEvents {
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

export enum GoogleClickEvents {
  OnboardingName = 'onboarding_name',
  OnboardingAddress = 'onboarding_address',
  OnboardingIdentity = 'onboarding_identity',
  OnboardingIdentityFull = 'onboarding_identityfull',
  OnboardingPhone = 'onboarding_phone',
  OnboardingCode = 'onboarding_code',
  OnboardingKba = 'onboarding_kba',
}

export enum GoogleErrorEvents {
  OnboardingInformationIssue = 'onboarding_informationissue',
  ApiTechnicalIssue = 'api_technicalissue',
  Suspension30DayLockout = 'suspension_30daylockout',
}
