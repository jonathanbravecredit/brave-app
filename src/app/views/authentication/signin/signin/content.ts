export enum SignInErrors {
  UserNotConfirmedException = 'UserNotConfirmedException',
  PasswordResetRequiredException = 'PasswordResetRequiredException',
  NotAuthorizedException = 'NotAuthorizedException',
  UserNotFoundException = 'UserNotFoundException',
}

export const SignInErrorDescriptions: Record<any, string> = {
  [SignInErrors.UserNotConfirmedException]: `To log in please confirm your account by clicking on the button in the email we sent you`,
  [SignInErrors.PasswordResetRequiredException]: `Password reset required`,
  [SignInErrors.NotAuthorizedException]: ``,
  [SignInErrors.PasswordResetRequiredException]: `Please use a registered email`,
};
