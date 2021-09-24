// see: https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_SignUp.html
export enum SignUpErrors {
  UsernameExistsException = 'UsernameExistsException',
  InvalidPasswordException = 'InvalidPasswordException',
  NotAuthorizedException = 'NotAuthorizedException',
}

export const SignUpErrorDescriptions: Record<any, string> = {
  [SignUpErrors.UsernameExistsException]: `<p>An account already exists with this email.<a href="/auth/signin"><span><strong>&nbsp;Please log in with your account here.</strong></span></a></p>`,
  [SignUpErrors.NotAuthorizedException]: `Not authorized`,
  [SignUpErrors.InvalidPasswordException]: `Password does not meet minimum requirements`,
};
