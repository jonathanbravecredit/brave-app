// see https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_InitiateAuth.html#API_InitiateAuth_Errors
export enum SignInErrors {
  UserNotConfirmedException = 'UserNotConfirmedException',
  PasswordResetRequiredException = 'PasswordResetRequiredException',
  NotAuthorizedException = 'NotAuthorizedException',
  UserNotFoundException = 'UserNotFoundException',
}

export const SignInErrorDescriptions: Record<any, string> = {
  [SignInErrors.UserNotConfirmedException]: `To log in please confirm your account by clicking on the button in the email we sent you`,
  [SignInErrors.PasswordResetRequiredException]: `Password reset required`,
  [SignInErrors.NotAuthorizedException]: `Not authorized`,
  [SignInErrors.UserNotFoundException]: `<p>This account does not exist. <a href="/auth/signup"><span><strong>&nbsp;Please create an account by clicking here.</strong></span></a></p>`,
};
