import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService, NewUser } from '@shared/services/auth/auth.service';
import { CognitoHostedUIIdentityProvider } from '@aws-amplify/auth';

@Component({
  selector: 'brave-signup',
  templateUrl: './signup.component.html',
})
export class SignupComponent implements OnInit {
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private auth: AuthService
  ) {}

  ngOnInit(): void {}

  /**
   * Method to sign user up
   */
  async signUpWithCognito(user: NewUser): Promise<void> {
    if (!user) return;
    // add email validation here // const isValid = await this.accountMgmtService.isEmailValid(formData.username);
    let isValid = true;
    if (isValid) {
      try {
        let cognitoUser = await this.auth.signUp(user);
        this.router.navigate(['../thankyou'], { relativeTo: this.route });
      } catch (err) {
        this.router.navigate(['../error'], { relativeTo: this.route });
      }
    } else {
      // TODO: need to provide feedback to the user on the invalid email
    }
  }

  /**
   * Method to sign user up/in with Facebook
   */
  signUpWithFacebook(): void {
    let provider = CognitoHostedUIIdentityProvider.Facebook;
    this.auth.socialSignIn(provider);
  }

  /**
   * Method to sign user up/in with Google
   */
  signUpWithGoogle(): void {
    let provider = CognitoHostedUIIdentityProvider.Google;
    this.auth.socialSignIn(provider);
  }

  /**
   * Method to route user to forgot
   */
  goToForgot(): void {
    this.router.navigate(['/auth/forgot']);
  }

  /**
   * Method to route user to login
   */
  goToLogin(): void {
    this.router.navigate(['/auth/signin']);
  }

  /**
   * Method to route user to privacy policy
   */
  goToPrivacy(): void {
    this.router.navigate(['/legal/privacy']);
  }

  /**
   * Method to route user to terms of service
   */
  goToTerms(): void {
    this.router.navigate(['/legal/tos']);
  }
}
