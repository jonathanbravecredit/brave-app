
export type ConfirmPasswordState = 'init' | 'invalid';
export interface IConfirmPassword {
  password: string;
  newPassword: string;
  confirmPassword: string;
}
