import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService, NewUser } from '@shared/services/auth/auth.service';

@Component({
  selector: 'brave-signup',
  templateUrl: './signup.component.html',
})
export class SignupComponent implements OnInit {
  constructor(private router: Router, private auth: AuthService) {}

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
      } catch (err) {
        console.log('err:', err);
      }
    } else {
      console.log('invalid email');
    }
  }

  signUpWithFacebook(): void {
    // add method for federated login or service
  }

  signUpWithGoogle(): void {
    console.log('google clicked');
    // add method for federated login or service
  }

  /**
   * Method to route user to forgot
   */
  goToForgot(): void {
    this.router.navigate(['/']);
  }

  /**
   * Method to route user to login
   */
  goToLogin(): void {
    this.router.navigate(['/']);
  }

  /**
   * Method to route user to privacy policy
   */
  goToPrivacy(): void {
    this.router.navigate(['/']);
  }

  /**
   * Method to route user to terms of service
   */
  goToTerms(): void {
    this.router.navigate(['/']);
  }
}
